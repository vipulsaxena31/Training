import React from 'react';
import Simple from './components/Simple';
import Button from './components/Button';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/sidebar';
import Maincontent from './components/Maincontent';

import './App.css';

function App() {
  return (
  <div>
  <Header/> 
    <div className="content">
      <Maincontent/>
      <Sidebar/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
