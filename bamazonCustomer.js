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
// product display
var productDisplay = function() {
  var query = "SELECT * FROM products";
  dbConnect.query(query, function(err, res) {
    if (err) throw err;
    var tableDisplay = new Table({
      head: ["Item Id", "Product Name", "Category", "Price", "Quantity"],
      colWidths: [10, 25, 25, 10, 14]
    });
    for (var i = 0; i < res.length; i++) {
      displayTable.push([
        res[i].item_id,
        res[i].product_name,
        res[i].department_name,
        res[i].price,
        res[i].stock_quantity
      ]);
    }
    console.log(displayTable.toString());
    purchasePrompt();
  });
};

// prompt for quantity and purchase
