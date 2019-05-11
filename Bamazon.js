
var mysql = require("mysql");
var Table = require("cli-table2");
var inquirer = require("inquirer");

var displayTable = require("./displayConstructor.js");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "BAMAZON_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

//Display db using a table from npm pack cli-table2
// See if Customer would want to purchase item and how many
var displayForCustomer = function() {
    var display = new displayTable();
    connection.query("Select *, from products", function(err, results){
      display.displayIventoryTable(results);
      purchaseItem();
    });

}

//Enter Customer Name and amount to wish they would like ot purchase
var purchaseItem = function() {
  console.log ('\n');
  inquirer.prompt([{
        name: "quantity",
        type: "input",
        message: " Enter the amount you want to purchase",
  }]) .then(function(answer) {
    // Query the DB for info on item and quantity
    Connection.query("Select ProductName, DepartName, Price, StockQuantity from products where?" , {ItemID: answer.id} function(err,res){

      console.log('\n You would like to buy ' + answer.quantity + ' ' +) res[0].ProductName + ' ' + res[0].DepartmentName + ' at $' + res[0].Price + ' each'
			);

      if (res[0].StockQuantity >= answer.quantity) {
        //If enough inventory to complete order, process order by updating database inventory and notifying customer that order is complete.
        var itemQuantity = res[0].StockQuantity - answer.quantity;
        connection.query("UPDATE products SET ? WHERE ?",[{
        {
          StockQuantity: itemQuantity

    }
    ItemID: answer.id
				}], function(err,res) {
          });
        {
				var cost = res[0].Price * answer.quantity;
				console.log('\n  Order fulfilled! Your cost is $' + cost.toFixed(2) + '\n');
				// Order completed
				customerPrompt();
      } else {
				//If not enought inventory notify customer and prompt customer for desire to shop more
				console.log('\n  Sorry, Insufficient quantity to fulfill your order!\n');
				// Order not completed
				customerPrompt();
			}
    })
  };


var customerPrompt = function() {
    inquirer.prompt({
        name: "action",
        type: "list",

        message: " Would like to continue shopping?\n",
        choices: ["Yes", "No"]
    }).then(function(answer) {
        switch(answer.action) {
            case 'Yes':
                displayForUser();
            break;
            case 'No':
            connection.end();
        break;
    }
})
};

// Start app by Prompting the customer
customerPrompt();
