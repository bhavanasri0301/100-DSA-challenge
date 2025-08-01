//Day3 of 100days challenge

//Delete and merge Duplicate Product Entries
let inventory=[
    {id:201,name:"CAMERA"},
    {id:202,name:"MOBILE"},
    {id:203,name:"LAPTOP"},
    {id:204,name:"TABLET"},
    {id:205,name:"MOBILE"},
    {id:206,name:"CAMERA"}
];
let org=[];
let cleanedInventory=inventory.filter(item=>{
    let nameLower=item.name.toLocaleLowerCase();
    if(org.includes(nameLower)){
        return false;
    }
    org.push(nameLower);
    return true;
});
console.log(cleanedInventory);

//using map and filter
let namesLower=inventory.map(item=>item.name.toLowerCase());
let cleanedInventory1=inventory.filter((item,index)=>
    namesLower.indexOf(item.name.toLowerCase())===index
);
console.log(cleanedInventory1);

//Group transactions by category and sum amounts
let transactions=[
    {category:"Food",amount:150},
    {category:"Transport",amount:60},
    {category:"Food",amount:90},
    {category:"Shopping",amount:500},
    {category:"Transport",amount:80}
];
let sum=transactions.reduce((acc,curr)=>{
    acc[curr.category]=(acc[curr.category]||0)+curr.amount;
    return acc;
},{});
console.log(sum);