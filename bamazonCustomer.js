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
  console.log("connected as id " + connection.threadId);
});

// product display
var productDisplay = function() {
  var query = "SELECT * FROM products";
  connection.query(query, function(err, res) {
    if (err) throw err;
    var tableDisplay = new Table({
      head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
      colWidths: [10, 25, 25, 10, 14]
    });
    for (var i = 0; i < res.length; i++) {
      tableDisplay.push([
        res[i].item_id,
        res[i].product_name,
        res[i].department_name,
        res[i].price,
        res[i].stock_quantity
      ]);
    }
    console.log(tableDisplay.toString());
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
      var quantityNeed = answers.Quantity;
      var requestedId = answers.Id;
      purchase(requestedId, quantityNeed);
    });
}

//  handles purchasing; informs user of items in stock/out of stock
function purchase(Id, amount) {
  connection.query("SELECT * FROM products WHERE item_id= " + Id, function(
    err,
    res
  ) {
    if (err) {
      console.log(err);
    }
    if (amount <= res[0].stock_quantity) {
      var total = res[0].price * amount;
      console.log("Your order is in stock!");
      console.log(
        "The total amount due " +
          amount +
          " " +
          res[0].product_name +
          " is " +
          total
      );

      connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - " +
          amount +
          "WHERE item_id = " +
          Id
      );
    } else {
      console.log(
        "I'm sorry, we do not have enough " +
          res[0].product_name +
          " to complete your order."
      );
    }
    productDisplay();
  });
}

productDisplay();
