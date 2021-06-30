//console.log(this)


function logf(){
	console.log(this)
}
//logf()

var instructor = {
    firstName: 'Tim',
    sayHi: function(){
        console.log("Hello! " + this.firstName);
    }
}

//instructor.sayHi() // ?


function hii(){
	console.log("hello world!");
}
console.log(hii)