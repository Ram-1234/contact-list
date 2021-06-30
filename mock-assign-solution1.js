var orders = [
{"orderid": 1, "amount": 250, "items": ["mask","shirt","pant"]},
{"orderid": 2, "amount": 300, "items": ["water bottle","tablefan"]},
{"orderid": 3, "amount": 78, "items": ["glouse"]},
{"orderid": 4, "amount": 460, "items": ["helmet","shoe"]},
];

//Question1-find the order list that contains amount >100
// method-1
order1=[]
for(let i=0;i<orders.length;i++){
    if(orders[i].amount>100){
    	order1.push(orders[i])
    }
}
//console.log(order1)

//method-2
order2=[]
orders.forEach((item,index)=>{
	if(item.amount<100){
		order2.push(item);
	}
})
//console.log(order2)

//method-3
order3=orders.filter((item,index)=>{
    return item.amount>100
})
//console.log(order3)

//Question-2-sort the orders with respect to amount
//method-1
//order4=orders.sort((a,b)=>a.amount-b.amount)
//console.log(order4)
//console.log(orders)


//Question-3-add the property 'delivery-charge' to each order and if order amount<100 then delivery charge is 50.
//method-1

order5=[]
for(let i=0;i<orders.length;i++){
	obj={...orders[i], delivery_charge:0}
	if(orders[i].amount<100){
		obj.delivery_charge=50;
	}
	order5.push(obj)
}
//console.log(order5)
order6=[]
orders.forEach((item,index)=>{
	obj={...item,delivery_charge:0}
	if(item.amount<100){
		obj.delivery_charge=50
	}else{
		obj.delivery_charge=1
	}
	order6.push(obj)
})
//console.log(order6)

order7=orders.map((item)=>{
	item.delivery_charge=0
	if(item.amount<100){
		item.delivery_charge=60
	}
	return item
})
//console.log(order7)

//question4:-add more items in arraya object item property.
//method-1
order8=orders.map((val,index)=> {
   obj={...val}
   obj.items.push("apple","mango")
   return obj
})
//console.log(order8)



//new array problem
var original_array = [
{"firstName": "Sachin", "lastName": "Tendulkar"},
{"firstName": "Virat", "lastName": "Kohli"},
{"firstName": "Chandan", "lastName": "Singh"},
{"firstName": "Aryan", "lastName": "Rawat"},
{"firstName": "Rashika", "lastName": "Gupta"}
];


//Question:-given a array object with property 
//firstname and lastname you need add one more property that is full anme
//method-1
newarray1=original_array.map((item,index)=>{
      return {...item, fullName:item.firstName+" "+item.lastName,city:"default"}
})
//console.log(newarray1)

//method-2
newarray2=[]
original_array.forEach((item,index)=>{
	obj={...item,fullName:item.firstName+" "+item.lastName,city:"default"}
	newarray2.push(obj)
})
//console.log(newarray2)

//method-3
newarray3=[]

for(var i=0;i<original_array.length;i++){
	obj={...original_array[i],fullName:original_array[i].firstName+" "+original_array[i].lastName,city:"default"}
	newarray3.push(obj)
}
//console.log(newarray3)

//quetsion2:-sort array object in order to first name
let newarray4=original_array.sort((a,b)=> {return a.firstName.toLowerCase()>b.firstName.toLowerCase() ? 1 : -1})
//console.log(newarray4)



//ARGUMENT

ab=[1,2,3,4,5,6,7,8,9]
let sum=0;
function AB(arguments){

   for(let i of arguments){
   	sum+=i
   }
   return sum
}
//console.log(AB(ab))



//HARD MOCK
//QUESTION-1
function greet (person)
{ if (person == { name: 'amy' }) 
           { 
             return 'hey amy' ;
           } 
 else 
 { 
   return 'hey arnold' ;
 } } 
//console.log(greet({ name: 'amy' }))


//QUESTION_2
let dog = { 
   name: 'doggo', 
   sayName: function(){ 
     console.log(this.name)
   } 
 } 
 
 let sayName2 = dog.sayName();
 sayName2;
 //dog.sayName()