CREATE DATABASE IF NOT EXISTS testdb;
USE testdb;
CREATE TABLE visitors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);
INSERT INTO visitors (name) VALUES ('Ankita'), ('Guest');
