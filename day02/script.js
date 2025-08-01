//DAY-02

//Problem-01:Generate Invoice Report
// Expected Output:
//[
 // { name: "Pen", total: 30 },
  //{ name: "Notebook", total: 100 },
  //{ name: "Bag", total: 400 }
//]
//Using Map Method
let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];

let invoiceReport = items.map(item => ({
  name: item.name,
  total: item.qty * item.price
}));

console.log(invoiceReport);

//Problem-02:Detect Duplicate Entries
//['Ali', 'Sara']
let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];

let duplicates = users.filter((name, index, arr) => 
  arr.indexOf(name) !== index && arr.lastIndexOf(name) === index
);

console.log(duplicates);

//Problem-03:Find Most Sold Product
//Expected output:'Pen'
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];

let productMap = orders.reduce((acc, order) => {
  acc[order.product] = (acc[order.product] || 0) + order.qty;
  return acc;
}, {});

let mostSold = Object.keys(productMap).reduce((maxProduct, product) => 
  productMap[product] > productMap[maxProduct] ? product : maxProduct
);

console.log(mostSold);
