// getting dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

// connection setup and displayed response, once connected
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});
// product display
var productDisplay = function() {
  var query = "SELECT * FROM products";
  dbConnect.query(query, function(err, res) {
    if (err) throw err;
    var tableDisplay = new Table({
      head: [
        "item_id",
        "product_name",
        "department_name",
        "price",
        "stock_quantity"
      ],
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
function purchasePrompt() {
  inquirer
    .prompt([
      {
        name: "Id",
        type: "input",
        message: "Please enter the Id of the item you wish to purchase.",
        filter: Number
      },
      {
        name: "Quantity",
        type: "input",
        message: "How many would you like to purchase, today?",
        filter: Number
      }
    ])
    .then(function(answers) {
      var requestedId = answers.Id;
      var quantityNeed = answers.Quantity;
      purchase(requestedId, quantityNeed);
    });
}
