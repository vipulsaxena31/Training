import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';
import { AuthProvider } from './AuthContext'; // Assuming you have an AuthProvider wrapping the component

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Mock useAuth hook
jest.mock('./AuthContext', () => ({
  useAuth: jest.fn(() => ({
    login: jest.fn(),
    dummyUsers: [
      { username: 'testuser', password: 'testpassword' },
      // Add more dummy users if needed
    ],
  })),
}));

describe('LoginForm', () => {
  test('submits login form with valid credentials', async () => {
    const { getByLabelText, getByText } = render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    // Fill in the form inputs
    fireEvent.change(getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'testpassword' } });

    // Submit the form
    fireEvent.click(getByText('Login'));

    // Wait for the login process to complete
    await waitFor(() => {
      // Check if the login function was called
      expect(useAuth().login).toHaveBeenCalledWith({ username: 'testuser', password: 'testpassword' });
      // Check if useNavigate was called to navigate to "/welcome"
      expect(useNavigate()).toHaveBeenCalledWith('/welcome');
    });
  });

  test('displays error message for invalid credentials', async () => {
    const { getByLabelText, getByText, findByText } = render(
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    );

    // Fill in the form inputs with invalid credentials
    fireEvent.change(getByLabelText('Username:'), { target: { value: 'invaliduser' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'invalidpassword' } });

    // Submit the form
    fireEvent.click(getByText('Login'));

    // Wait for the error message to appear
    const errorMessage = await findByText('Invalid credentials');
    expect(errorMessage).toBeInTheDocument();
  });
});
