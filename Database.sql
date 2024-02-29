CREATE DATABASE car_shop;

USE car_shop;

CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cars (
  id INT NOT NULL AUTO_INCREMENT,
  customer_id INT NOT NULL,
  make VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  year INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE bookings (
  id INT NOT NULL AUTO_INCREMENT,
  customer_id INT NOT NULL,
  car_id INT NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  service VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (car_id) REFERENCES cars(id)
);

CREATE TABLE admins (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
commit;