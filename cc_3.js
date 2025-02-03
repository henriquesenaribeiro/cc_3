// Task 1: Product Price Management

let prices = [20, 35, 50, 75, 90]; // Initial prices
prices.push(100); // Add a new price
prices.shift(); // Remove the first price
console.log("Updated prices:", prices); // Log updated prices

// Task 2: Modifying Customer Orders

let orders = [20, 35, 50, 65, 80];
orders[2] += 7; // Increased the third order by 7, so from 35 to 42
let totalOrders = orders.reduce((total, num) => total + num, 0); // Calculated total # of orders
console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders);
