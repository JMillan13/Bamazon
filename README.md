# Bamazon

Using MySQL

Overview

In this unit, I will add the final layer to our stack: the database. While it is the last, it is by no means the least. Databases are the foundation of full-stack web applications. Although I began the journey on the client-side, it will be more useful from this point on to approach application development from the bottom up. When using our applications, what is most important to my users is being able to store and retrieve data. Once I determine how I will model that data, I can then set about determining the best way to deliver it to the front-end via our server-side API.
In simplest terms, a database is a collection of data stored electronically. The database management system (DBMS) I will be using in this unit is MySQL. MySQL is the most popular SQL database. The SQL in MySQL is short for Structured Query Language, and that structure is relational. A relational database stores and finds data based on its relationship to other data in the database. Relational databases are tabular, meaning data is stored in tables composed of rows and columns, much like a spreadsheet.

I will begin the unit using GUI's, such as Workbench or Sequel Pro, to interface with my databases, but by the end of the unit 
I should be proficient using the MySQL command prompt. I will then connect our Node.js servers to our MySQL databases to perform queries based on client requests and return responses accordingly.

Key Topics:

MySQL Workbench
MySQL command prompt
Creating and dropping databases and tables
schema.sql and seeds.sql files
CRUD
Primary and foreign keys
Prepared statements
Joins
ACID


In this activity, I will be creating a Amazon-like storefront with the MySQL skills you learned in this unit. The app will take in orders from customers and deplete stock from the store's inventory. 

Helpful Links
SQL
MySQL
MySQL - W3 Schools
MySQL Workbench Documentation
MySQL NPM Package
