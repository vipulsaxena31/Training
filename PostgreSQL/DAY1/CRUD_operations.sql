-- CREATING A DATABASE
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobileNumber VARCHAR(20) NOT NULL
);


-- INSERTING VALUES
INSERT INTO users (name, username, email, mobileNumber) 
VALUES ('John Doe', 'johndoe', 'johndoe@example.com', '1234567890');

INSERT INTO users (name, username, email, mobileNumber) 
VALUES 
    ('Jane Doe', 'janedoe', 'janedoe@example.com', '0987654321'),
    ('Alice Smith', 'alice', 'alice@example.com', '9876543210');


--UPDATING VALUES
UPDATE users
SET email = 'newemail@example.com'
WHERE id = 1;

UPDATE users
SET email = 'newemail@example.com', mobileNumber = '9876543210'
WHERE id = 2;

UPDATE users
SET email = 'newemail@example.com'
WHERE username = 'janedoe';


--ALTER COLUMNS 
  -- adding a new column
  ALTER TABLE users
  ADD COLUMN address VARCHAR(255);

  --removing a column
  ALTER TABLE users
  DROP COLUMN mobileNumber;


--DELETING ROWS
  -- single row
  DELETE FROM users
  WHERE id = 1;
  --delete al rows
  DELETE FROM users;
  --deleting rows based on multiple condition
  DELETE FROM users
  WHERE username = 'johndoe' AND email = 'johndoe@example.com';

--DROP TABLE
DROP TABLE users;






