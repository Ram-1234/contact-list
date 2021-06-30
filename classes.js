class Polygon{
	constructor(firstname,lastname){
		this.firstname=firstname
		this.lastname=lastname
	}
}

//const ploy1= new Polygon("akanksha","churasiya")

//console.log(ploy1.firstname+" "+ploy1.lastname)

class Person{
	constructor(name){
		this.name=name
	}

	introduce(){
		console.log(`Hello my name is ${this.name}`)
	}
}

const oto=new Person("mango")
console.log(oto.name)
oto.introduce()