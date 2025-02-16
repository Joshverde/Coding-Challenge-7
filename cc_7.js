// Task 1 - Customer Invoice Calculation
function calculateInvoice(subtotal,taxRate,discount){ // creates the function and parameters
    let total = subtotal +(subtotal * taxRate) - discount; // calculates the total invoice amount 
    console.log(`Total Invoice: $${total.toFixed(2)}`); // logs answer in conolse with message
};
console.log("**Task 1**"); // for ease of readabillity in the console
calculateInvoice(100,0.08,5); // calls function
calculateInvoice(500,0.1,20); // calls function