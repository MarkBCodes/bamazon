# Bamazon

## Demo

![](demo.gif)

## Overview

This application is a simple command line Amazon-like storefront using technologies:

- Node.js
- Nodemon - an npm package that makes life easier, restarting your server when changes are made so you don't have to.
- npm inquirer
- npm cli-table
- and MySQL as the database and the MySQL npm package.
  It presents a customer serving interface in the CLI. Please be sure to use the packages outlined above to get the best experience with this application.

## Database Setup

This README assumes that you are using MySQL in order to replicate this project. Please head over to my [GitHub](https://github.com/Gudbrandr42/bamazon) to clone the project. You can then use the SQL file that will set up the database, once you have MySQL up and running. Copy and paste the following file contencts into MySQL and execute the query. The user will now have a database that will be used in the application.

It looks like this:
![SQLtoStart](https://github.com/Gudbrandr42/bamazon/blob/master/Images/SQLtoStart.PNG)

## Customer Interface

The Customer Interface lives inside the CLI (Command Line Interface), where the user will enter the following to get it started: nodemon bamazonCustomer.js
After hitting enter, the interface looks like this:
![bamazon Interface](https://github.com/Gudbrandr42/bamazon/blob/master/Images/AtRun.PNG)

Though it is not fully shown, below the table the user is prompted with a statement and then a question. The first is obtain the item_id number of the product they wish to purchase. The follow-up is a question that is requesting the amount they wish to purchase. If the user requests more than what is alloted, the return response informs the user that they have requested more than is available and the application resets to the table and the initial prompt:
![Too Much!](https://github.com/Gudbrandr42/bamazon/blob/master/Images/TooMuch.PNG)

When a user gives the application an order size that meets within the allotted amount, the user will receive a message that the amount is in stock and then given the amount due. Then the application resets the table with the updated amount. See here for a visual example:
![succesful order](https://github.com/Gudbrandr42/bamazon/blob/master/Images/order%20result.PNG)

a Buyout of products also proves that you can order up to the limited number without getting an error or a message saying there is not enough:
![buyout](https://github.com/Gudbrandr42/bamazon/blob/master/Images/buyout.PNG)
