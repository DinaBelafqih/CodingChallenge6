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

// Task 3 Arrow Function 

let calculateBonus = (salary, performanceRating) => {
    let bonus;
    if (performanceRating === "Excellent") {
        bonus = salary * 0.20; // Bonus is 20% of salary
    } else if (performanceRating === "Good") {
        bonus = salary * 0.10; // Bonus is 10% of salary
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05; // Bonus is 5% of salary
    }
    return bonus;
};

console.log("Bonus 1: $", calculateBonus (5000, "Excellent")); // logging bonus with 5000 salary and excellent performance rating
console.log("Bonus 2: $", calculateBonus (7000, "Good")); // logging bonus with 7000 salary and good performance rating

// Task 4 Parameters and Arguements

let calculateSubscriptionsCost = function(plan, months, discount=0) {
    let monthlyCost;
    if (plan === "Basic") {
        monthlyCost = 10;
    } else if (plan === "Premium") {
        monthlyCost = 20;
    } else if (plan === "Enterprise") {
        monthlyCost=50;
    };

let totalCost = monthlyCost * months;

totalCost = totalCost - discount;

return totalCost;
}; // Created a function to calculate subscription cost based on plan type, # of months and if any discount is present

console.log(`Basic 6 Month plan with $10 discount: $${calculateSubscriptionsCost("Basic", 6, 10)}`); // logging basic 6 month plan with $10 discount to console
console.log(`Premium 12 Month plan with no discount: $${calculateSubscriptionsCost("Premium", 12, 0)}`); // logging premium 12 month plan with no discount to console

// Task 5 Returning Values

let convertCurrency = function(amount, exchangeRate) {
    let convertedAmount= (amount * exchangeRate).toFixed(2);

    return convertedAmount;
}; // Created a function to convert currency

console.log(`Converted Currency 1: $${convertCurrency(100, 1.1)}`); // logging converted currency to console
console.log(`Converted Currency 2: $${convertCurrency(250, 0.85)}`); // logging converted currency to console