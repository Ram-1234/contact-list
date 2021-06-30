
// let details={
// 	id:20,name:"ramnayan",
// 	subject:[],
// 	city:"kanpur"
// }

//console.log(details.subject.push("operating system"))
//console.log(details)

// (function A(){
// 	var a=20
// 	let b=30
// 	const c=50
// 	console.log(a+" "+b+" "+c)
// 	console.log("hello")
// })();
//console.log(c);

function* Generator(num){
    while(num>0){
    	yield num--;
    }

}

let generator= Generator(10)
//console.log(generator.next())
//console.log(generator.next().value)
//console.log(generator.next().done)