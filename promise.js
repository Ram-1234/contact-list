
const promise=new Promise((resolve,reject)=>{
let value=10
//resolve(value)
reject("get rejected")
})

///The successively calling then/catch methods in this way is referred to as the promise chaining.

console.log("This is Promise Chaning")
promise.then((res)=>{
	console.log(res) 
	return res*2
})
.then((res)=>{
	console.log(res) 
	return res*3
})
.then((res)=>{
	console.log(res) 
	return res*4
})
.then((res)=>{
	console.log(res)
}).catch((res)=>{
	console.log(res)
})


//console.log("This is Promise Chaning")

const p=new Promise((resolve,rejected)=>{
	let result=10
	resolve(result)
	//rejected("promis get rejected!")
})

// p.then((result)=>{
// 	console.log(result)
// 	return result*2
// }).then((result)=>{
// 	console.log(result)
// 	return result*3
// }).then((result)=>{
//    console.log(result)
//    return result *4
// }).then((result)=>{
// 	console.log(result)
// 	return result*5
// }).then((err)=>{
// 	console.log(err)
// 	return err
// }).catch((err)=>{
//    console.log(err)
// })



