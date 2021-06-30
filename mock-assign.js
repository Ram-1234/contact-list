var orders = [
{"orderid": 1, "amount": 250, "items": ["mask","shirt","pant"]},
{"orderid": 2, "amount": 300, "items": ["water bottle","tablefan"]},
{"orderid": 3, "amount": 78, "items": ["glouse"]},
{"orderid": 4, "amount": 460, "items": ["helmet","shoe"]},
];

//const neworder=orders.filter(value=>  value.amonut>100)
// var neworder=[]
// orders.ForEach(function(olditem,index)=>{
//                neworder[...oldeitem,]
//                })
// console.log(neworder)


var orders = [
{"orderid": 1, "amount": 250, "items": ["mask","shirt","pant"]},
{"orderid": 2, "amount": 300, "items": ["water bottle","tablefan"]},
{"orderid": 3, "amount": 78, "items": ["glouse"]},
{"orderid": 4, "amount": 460, "items": ["helmet","shoe"]},
];

solution based on for loop approach:

var transformed_orders = [];
for (let i=0; i<orders.length; i++) {
    var order = {...orders[i],"delivery_charge":0 };
    if(orders[i].amount<100) {
      order.delivery_charge = 50;
  }
  transformed_orders.push(order);
}
console.log(transformed_orders);

solution based on forEach approach:

var transformed_orders = [];
orders.forEach(function(item,index) {
    var order = {...item,"delivery_charge":0 };
    if(item.amount<100) {
      order.delivery_charge = 50;
  }
  transformed_orders.push(order);
});
console.log(transformed_orders);

solution based on functional approach:

var transformed_orders = orders.map(function(item, index) {
  item.delivery_charge = 0;
  if(item.amount<100) {
    item.delivery_charge = 50;
  }
  return item;
});
console.log(transformed_orders);



var orders = [
{"orderid": 1, "amount": 250, "items": ["mask","shirt","pant"]},
{"orderid": 2, "amount": 300, "items": ["water bottle","tablefan"]},
{"orderid": 3, "amount": 78, "items": ["glouse"]},
{"orderid": 4, "amount": 460, "items": ["helmet","shoe"]},
];
var transformed_orders = orders.map(function(item, index) {
  item.delivery_charge = 0;
  if(item.amount<100) {
    item.delivery_charge = 50;
  }
  return item;
});
console.log(transformed_orders);


function compareNumbers(firstItem, secondItem) {
  return firstItem.amount - secondItem.amount;
}
var sorted_orders = orders.sort(compareNumbers);
console.log(sorted_orders);




var original_array = [
{"firstName": "Sachin", "lastName": "Tendulkar"},
{"firstName": "Virat", "lastName": "Kohli"},
];




