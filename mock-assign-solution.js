var orders = [
{"orderid": 1, "amount": 250, "items": ["mask","shirt","pant"]},
{"orderid": 2, "amount": 300, "items": ["water bottle","tablefan"]},
{"orderid": 3, "amount": 78, "items": ["glouse"]},
{"orderid": 4, "amount": 460, "items": ["helmet","shoe"]},
];

//Question1-find the order list that contains amount >100
// method-1
neworder1=[]
for(let i=0;i<orders.length;i++){
  if(orders[i].amount> 100){
    neworder1.push(orders[i])
  }
}
//console.log(neworder1)

//method-2
neworder2=[]
orders.forEach((item,index)=>{
  if(item.amount>100){
    neworder2.push(item)
  }
})

//console.log(neworder2)

//method-3
const neworder3=orders.filter(item=> item.amount>100)
//console.log(neworder3)


//Question2-add new property "delivery_charge: 0" to each order and add "delivery_charge: 50" to the order that amount<100 

// method-1
neworder4=[]
for(let i=0;i<orders.length;i++){
    let order={...orders[i],"delivery_charge":0}
    if(orders[i].amount<100){
      order.delivery_charge=40
    }
    neworder4.push(order)
}
//console.log(neworder4)

//method-2
var neworder5=[];
orders.forEach((item,inde)=>{
  const order={...item,"delivery_charge":0}
  if(item.amount<100){
    order.delivery_charge=40
  }
  neworder5.push(order)
})
//console.log(neworder5)



//method3
const neworder6=orders.map(items=>{
   items.delivery_charge=0;
   if(items.amount<100){
       items.delivery_charge=50;
       }
       return items
})

//console.log(neworder6)

//Question3-sort amount in ascending order

const neworder7=orders.sort((a,b)=> {return a.amount-b.amount})
//console.log(neworder7)



//new array problem
var original_array = [
{"firstName": "Sachin", "lastName": "Tendulkar"},
{"firstName": "Virat", "lastName": "Kohli"},
{"firstName": "Chandan", "lastName": "Singh"},
{"firstName": "Aryan", "lastName": "Rawat"},
{"firstName": "Rashika", "lastName": "Gupta"}
];

//Question: given array object that contains firstname and last name , you need to add a new property "fullName"
//method1
const newarray1=original_array.map(items=>{
    const array={...items,"fullName":items.firstName+" "+ items.lastName}
    return array
})
//console.log(newarray1)

//method-2
const newarray2=[];
for(let i=0;i<original_array.length;i++){
      const array={...original_array[i],"fullName":original_array[i].firstName+" "+original_array[i].lastName};
      newarray2.push(array);
   }
  //console.log(newarray2)
  

//method-3
const newarray3=[];
original_array.forEach((items,index)=>{
    const array={...items,"fullName":items.firstName+" "+items.lastName}
    newarray3.push(array);
})
//console.log(newarray3)

//Question : sort given array according to first name!

const new_original_array=original_array.sort((a,b)=>  a.firstName.toUpperCase() > b.firstName.toUpperCase() && 1 || -1)
//console.log(new_original_array);

//Question : search a name by given by input "Aryan"

const name_obj=original_array.filter((item,index)=> item.firstName==="Aryan")
console.log(name_obj)












