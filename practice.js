let ar=[1,2,3,4,5,6,7]

//Array Destructuring

const [v1,v2,v3,...v4]=ar;  
//console.log(v4)  //v4 contains all rest element of array

//Spread operator

let br=['ram',"nayan",...ar]
//console.log(br);

 function A(a1,b,c,d){
    console.log(a1+b+c+d)
 }
 //A(...ar)

//console.log(rest)

let ob={x:23,y:34,z:56}
//console.log(o.x)

//Object Destructuring
const {x:a,y:b,z:c}=ob
//console.log(a)

//reverse a string
function reve(l,s,res){
	if(l>=0){
		return reve(l-1,s,res+s[l]);
	}else
	   return res;
}

//console.log(reve(("ramnayan".length)-1,"ramnayan",""))

let string='ramnayanyadav'

//console.log(string.split("").reverse().join("")); //also reverse string

// character Frequency qount

obj={}
 string.split("").forEach(function(i){
 	obj[i] ? obj[i]++ : obj[i]=1
 })

//console.log(obj)


var name="ramnayan"
 
 var name1=name.split("").reverse()
 
 obj={}

 for(var i in name1){
 	if(name1[i] in obj){
 		obj[name1[i]]++
 	}else
 	  obj[name1[i]]=1
}

var  result='None'
 bool=true

 for(key in obj){
 	if(obj[key]==1){
 		result=key
 	}
 }

 console.log(result)
console.log(obj.a)       // static key (a) (it means not changable)
console.log(obj[result])   // dynamic key (a) traverse variable