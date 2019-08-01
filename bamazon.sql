DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT(10) NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(20) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1000, "hats", "casual wear", 25.99, 100),
(1010, "tank tops", "active wear", 12.55, 35),
(1020, "sandals", "casual wear", 45.86, 150),
(1030, "shoes", "active wear", 55.45, 90),
(1050, "socks", "active wear", 11.99, 250),
(1040, "shades", "casual wear", 15.75, 300),
(1060, "shorts", "casual wear", 23.45, 113),
(1070, "headbands", "active wear", 5.99, 45),
(1080, "shirts", "casual wear", 15.00, 120),
(1090, "wristbands", "active wear", 7.99, 60);