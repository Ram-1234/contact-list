
function frequency(arr){
	var count={}
	arr.forEach(function (s){
		count[s] ? count[s]++ : count[s]=1;
	})
	d=[]
	for(let key  in count){
		if(count[key]==1){
			d.push(key)
		}
	}
	return d
}

//console.log(frequency([1,2,3,4,5,6,7,8,1,2,3,4,1,1,2,34,,5,67,]))

function uniqevalue(arr){
	var list=[]
	for(let i=0;i<arr.length;i++){
		if(!list.includes(arr[i])){
			list.push(arr[i])
		}
	}
	return list
}

//console.log(uniqevalue([1,1,2,3,4,5,3,2,4,6,5,4]))

function largestvalue1(arr){
	arr.sort(function(a,b){return a-b})
    return arr[arr.length-1];
}

function largestvalue(arr){
	let result=arr[0]
	for(let i=1;i<arr.length;i++){
		if(arr[i]>result){
			result=arr[i]
		}
	}
	return result
} 

//console.log(largestvalue([1,3,4,5,7,9,7,5,34,67,89,4,3,2,12]))


//question and answer

//var result="12" + "2" -true
//var result="12" +2
//var result="12"/"3"+"4"*"3" -true
//var result =1*2 +"12" -true
//var result="12"/"3" + "4"*"2" +true
//console.log(result)

// for(let i=0;i<=12; i+2){
// 	console.log(i)
// }

// for(var i=0;i<=12; i+2){
// 	setTimeout(function (i){console.log(i)},1000,i)
// }

//console.log(a())
function a(){
	//return b()
	 function b(){
		return 3
	}
	return b()
	var b=function (){
		return 8
	}
}


//how to fetch api

// fetch(request)
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Something went wrong on api server!');
//     }
//   })
//   .then(response => {
//     console.debug(response);
//     // ...
//   }).catch(error => {
//     console.error(error);
//   });


//   new Promise((resolve, reject) => {
//     console.log('Initial');

//     resolve();
// })
// .then(() => {
//     throw new Error('Something failed');

//     console.log('Do this');
// })
// .catch(() => {
//     console.error('Do that');
// })
// .then(() => {
//     console.log('Do this, no matter what happened before');
// });


let arr=[1,3,4,5,7,9,6,6,6,7,5,34,67,89,4,3,2,12]

a={}

arr.map(i=>{
	if(i in a){
		a[i]++
	}else{
		a[i]=1
	}
})

d=[]

for(let key in a){
	if(a[key]==1){
		d.push(key)
	}
}
//console.log(d)
//console.log(a)

myname="ramnayan"

const reverse=(s,i,ans)=>{
	if(i>=0){
		return reverse(s,i-1,ans+s[i])
	}else{
		return ans
	}
}

//console.log(reverse("ramnayan",('ramnayan'.length)-1,''))
//console.log(myname.split("").reverse().join(""))







const reve=(s,i,ans)=>{
	if(i>=0){
		return reve(s,i-1,ans+s[i])
	}else
	   return ans
}

//console.log(reve("ramnayan",("ramnayan".length)-1,""))




let arr1=[1,3,4,5,7,9,6,6,6,7,5,34,67,89,4,3,2,12]
a={}
arr.map(i=>{
	
	if(i in a){
		a[i]++
	}else{
		a[i]=1
	}
  })
	d=[]
	for(let key in a){
		if(a[key]==1){
			d.push(key)
		}
	}
//console.log(a)
//console.log(d)


const reve1=(s,i,ans)=>{
	if(i>=0){
		return reve1(s,i-1,ans+s[i])
	}else
	  return ans
}

//console.log(reve1("ramnayan",("ramnayan".length)-1,""))

var y=1
 if(function f(){}){
 	y += typeof f;
 }
 //console.log(y)
