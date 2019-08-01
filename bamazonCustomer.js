// getting dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table");

// connection setup and displayed response, once connected
var dbConnect = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

dbConnect.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + dbConnect.threadId);
});
