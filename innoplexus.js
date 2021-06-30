console.log("Hello Innoplexus!")
//CLOSURE PROPERTY
function outer(){
	let a=20
	  console.log("outer function "+a)
	  //console.log(b)
	return function (){
		let b=30
		console.log("inner function "+a)
		console.log("inner function "+b)
	}
}

//outer()()

//CALLBACK METHOD

function dosome(some){
	console.log("callback-method ",some)
}

function Operation(a,b,callback){
      return callback(a+b)
}

//Operation(10,20,dosome)


//MEMOIZATION METHOD

//memoization problem
function addTo256(num){
  return num + 256;
}

addTo256(20); // Returns 276
addTo256(40); // Returns 296
addTo256(20); // Returns 276

//memoization solution

function memoizedAddTo256(){
  var cache = {};

  return function(num){
    if(num in cache){
      console.log("cached value");
      return cache[num]

    }
    else{
      cache[num] = num + 256;
      return cache[num];
    }
  }
}

var memoizedFunc = memoizedAddTo256();

//console.log(memoizedFunc(20)) // Normal return
//console.log(memoizedFunc(20)) // Cached return

///RECURSION IN PROGRAMMING

function add(n){
	if(n<=0){
		return 0
	}else{
		return n+add(n-1);
	}
}

//console.log("Recursion method ",add(10))

//CONTRUCTOR METHOD
//constructor function are used to create objects in js
//when use constructor?
//if we want to create multiiple object having similar functionalities(properties) and methods
function Person(name,age,city){
	this.name=name
	this.age=age
	this.city=city
 
}

var person1=new Person("ramnayan",22,"kanpur")
//console.log(person1)

//spread operator use
function addvalue(){
	var sum=0;
	for(i in arguments){
        sum+=arguments[i]
	}
	return sum;
}

arr=[1,2,3,4,5,6]
//console.log(addvalue(...arr))


//REVERSE STRING
const reve=(s,i,ans)=>{
     if(i>=0){
     	return reve(s,i-1,ans+s[i])
     }else
        return ans
}

//console.log(reve("shubham",("shubham".length)-1,""))


const person={
	fname:"ramnayan",
	lname:"yadav",
	fullname:function(state,city){
		console.log(this.fname+" "+this.lname+" "+"state"+" "+city)
	}
}


person1={
	fname:"aryan",
	lname:"rawat"
}


person.fullname.call(person1,"uttarprasesh","delhi")
person.fullname.apply(person1,["uttarprasesh","delhi"])
data=person.fullname.bind(person1,"uttarprasesh","delhi");
data()