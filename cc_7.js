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