// Task 1 - Customer Invoice Calculation
function calculateInvoice(subtotal,taxRate,discount){ // creates the function and parameters
    let total = subtotal +(subtotal * taxRate) - discount; // calculates the total invoice amount 
    console.log(`Total Invoice: $${total.toFixed(2)}`); // logs answer in conolse with message
};
console.log("**Task 1**"); // for ease of readabillity in the console
calculateInvoice(100,0.08,5); // calls function
calculateInvoice(500,0.1,20); // calls function

//Task 2 -Employee Hourly Wage Calculation
function calculateHourlyWage(salary,hoursPerWeek){ // creates the function and parameters
    let hourlyWage = salary/(hoursPerWeek*52); // calculates the hourly wage
    console.log(`Hourly wage: $${hourlyWage.toFixed(2)}`);
};
console.log("**Task 2**"); // for ease of readabillity in the console
calculateHourlyWage(52000,40); // calls the function
calculateHourlyWage(75000,35); // calls the function

//Task 3 - Customer Loyalty Discount
let calculateLoyaltyDiscount = (amount, years) => {  // creates an arrow function with two parameters 
    let loyaltyDiscount; // declares the fucntion 
    if (years >= 5)
        loyaltyDiscount = (amount - (amount * .15)); // calculation used if year is >= 5
    else if (years >= 3)
        loyaltyDiscount = (amount - (amount * .10)); //calculation used if year is >= 3
    else
        loyaltyDiscount = (amount - (amount * .05)); // calculation used if year is > 3
    
    console.log(`Discounted Price: $${loyaltyDiscount.toFixed(2)}`) // logs answer in console log with message
};
console.log("**Task 3**"); // for ease of readabillity in the console
calculateLoyaltyDiscount(100,6); // calls the function
calculateLoyaltyDiscount(200,2); // calls the function

// Task 4 - Product Shipping Cost Calculation
function calculateShippingCost(weight,location,expedited = false){ // creates a function and parameters
    let shippingCost = 0; // declares the fucntion as = to 0
    if(location === "USA")
        shippingCost = 5 + weight *.5; // calculation used if the location is USA
    else if(location === "Canada")
        shippingCost = 10 + weight *.7; //calculation used if location is Canada 
    if (expedited)
        shippingCost += 10;
    console.log(`Shipping Cost: $${shippingCost.toFixed(2)}`)  // logs answer in console log with message
};
console.log("**Task 4**"); // for ease of readabillity in the console
calculateShippingCost(10,"USA",true); // calls the function
calculateShippingCost(5,"Canada",false); // calls the function

// Task 5 - Business Loan Interest Calculation
function calculateLoanInterest(principal,rate,years){ //creates a function with parameters
    let interest = principal * rate * years;// calculates the interest based on the parameters
    console.log(`Total Interest: $${interest.toFixed(2)}`);  //logs the result in the cosole
};
console.log("**Task 5**"); // for ease of readabillity in the console
calculateLoanInterest(1000,.05,3); // calls the function
calculateLoanInterest(5000,0.07,5); // calls the function

// Task 6 - Filtering High-Value Transactions
let transactions = [500, 1200, 3000, 800, 2200]; // creates an array of transactions 
function FilterHighValueTransactions(transactions,filterFunction){  // creates a function with parameters
    let expensiveOrders = transactions.filter(filterFunction) // filters array using the function given in the parameters
     console.log(` Transactions over 1k: ${expensiveOrders}`) // logs expensiveOrders in the console
};
console.log("**task 6**") // for ease of readability in console
FilterHighValueTransactions(transactions,amount => amount > 1000) //calls function