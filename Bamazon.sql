
DROP DATABASE IF EXISTS BAMAZON_DB;
CREATE DATABASE BAMAZON_DB;
USE BAMAZON_DB;

CREATE TABLE products (
	item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
    price FLOAT(10, 2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("Pencil", "School Supplies", 1.00, 100),
	("Eraser", "School Supplies", 0.50, 100)
