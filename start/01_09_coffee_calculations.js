// Write your code here
const orders = [2,5,7,1,4];
const ppc = 1.25;

// This is my style
function calculateBill(coffee, price) {
    let total = 0;
    for (let i = 0; i < coffee.length; ++i) {
        if (coffee[i] > 0) {
            total += coffee[i] * price;
        }
    }
    return `The total bill is $${total}`
}

console.log("Oldschool solution: " + calculateBill(orders, ppc));

function calculateBillNew(coffee) {
    const total = coffee.reduce(
        (totalCoffee, numCoffees) => (totalCoffee += numCoffees)
    );
    return `The total bill is $${total * 1.25}`
}

console.log("New age solution: " + calculateBillNew([2,5,7,1,4]));
