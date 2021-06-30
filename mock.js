
function  sort(arr){
   newarr=arr.sort(function(a,b){return a-b})
   return newarr;

}

//console.log(sort([1, 10, 2, 21, 39]))

var mydata=[{name:"Ram",age:22},{name:"ramesh",age:12},{name:"ravi",age:14}]

function returnAge(text){
	//var mydata=[{name:"Ram",age:22},{name:"ramesh",age:12},{name:"ravi",age:14}]
	mydata.forEach((item,index)=>{
		if(item.name===text){
			result=item.age;

		}
	})
	return result;
}

//console.log(returnAge("ramesh"))

function* Generator(num){
	yield num+1
	yield num+2
	yield num+3
}	

const generator=Generator(10);
console.log(generator.next())
console.log(generator.next().value)
console.log(generator.next().done)
console.log(generator.next())