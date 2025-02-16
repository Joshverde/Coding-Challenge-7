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