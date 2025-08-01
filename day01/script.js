//100DAYS CHALLENGE OF DSA
//DAY-01

//problem-01:Remove Discontinued Products
//Expected Output:['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch']
let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2, 2);
console.log(products); 
// Output: ['Laptop', 'Mobile', 'Watch']

//problem-02:Add New Sudents in Between
//Expected Output:['Ali', 'Sara', 'Zoya'];
let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1, 0, 'Nina', 'Omar');
console.log(students); 
// Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

//problem-03:Extract Top Perfromers
//Expected Output: ['Zainab', 'Ali', 'Farhan']
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
let topPerformers = scores.slice(0, 3);
console.log(topPerformers); 
// Output: ['Zainab', 'Ali', 'Farhan']

//Promblem-04: Show Last 2 Days’ Sales
// Expected Output: [390, 310];
let sales = [220, 300, 280, 150, 400, 390, 310];
let lastTwoDays = sales.slice(-2);
console.log(lastTwoDays); 
// Output: [390, 310]

//problem-05: Get All Users Who Are Active
//Expected Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]
let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
let activeUsers = users.filter(user => user.active);
console.log(activeUsers); 
// Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]

//Promblem-06:Block Short Phone Numbers
// Expected Output: ['1234567890', '9876543210']
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let validNumbers = phoneNumbers.filter(num => num.length === 10);
console.log(validNumbers); 
// Output: ['1234567890', '9876543210']

//Promblem-07:. Convert Price to With Tax
// Expected Output: [118, 236, 354]
let prices = [100, 200, 300];
let withTax = prices.map(price => price * 1.18);
console.log(withTax); 
// Output: [118, 236, 354]

//Problem-08:Append “.com” to Website Names
// Expected Output: ['google.com', 'amazon.com', 'microsoft.com']
let sites = ['google', 'amazon', 'microsoft'];
let domains = sites.map(site => site + '.com');
console.log(domains); 
// Output: ['google.com', 'amazon.com', 'microsoft.com']

//Problem-09: Calculate Total Cart Price
// Expected Output: 2896
let cart = [499, 1299, 299, 799];
let totalPrice = cart.reduce((sum, price) => sum + price, 0);
console.log(totalPrice); 
// Output: 2896

//Problem-10: Count Frequency of Votes
//Expected Output: { A: 3, B: 2, C: 1 }
let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let frequency = votes.reduce((acc, vote) => {
  acc[vote] = (acc[vote] || 0) + 1;
  return acc;
}, {});
console.log(frequency); 
// Output: { A: 3, B: 2, C: 1 }
