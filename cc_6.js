//Task 1 - Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}

// Test cases
console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

// Task 2 Function Expression

let calculateSalesTax = function(amount, taxRate) {
    let salesTax =Math.floor(amount * taxRate);
    return salesTax;
}; // Created a function to calculate sales tax

console.log("Sales Tax: $", calculateSalesTax(100, 0.07)); // logging of sale for $100 with sales tax of 7% in console
console.log("Sales Tax: $", calculateSalesTax(500, 0.1)); // logging of sale for $500 with sales tax of 10% in conole

