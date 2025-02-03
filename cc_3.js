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

// Task 3: Employee Performance Tracking
let employee = {
    name: "Eduardo Pio Ribery Junior",
    role: "Banker",
    performanceScore: 90,
    isActive: true
    };
    employee.performanceScore = 90; // Updated performance score from 90 to 99
    employee.promotionEligible = true; // Included a new boolean property to indicate promotion eligibility and set it to true.
    console.log("Updated Employee Performance Tracking:", employee);

// Task 4: Customer Feedback Records
let feedback = [
    { customerName: "Neymar", feedbackText: "The best player in history", rating: 1 },
    { customerName: "Gabriel", feedbackText: "Useful in long-term championships", rating: 5 },
    { customerName: "Coutinho", feedbackText: "Useless", rating: 9 }
]; // Included customer names along with their feedback and corresponding ratings.
feedback.push({ customerName: "Marquinhos", feedbackText: "Best service I've ever recieved", rating: 5 }); // Inserted another customer along with their feedback and rating, following the same format.
console.log("Feedback List:", feedback); 
