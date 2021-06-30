function A(a,b,c){
	console.log(a*b*c)
}
//A(4,5,6);


function curr(x){
	return function(y){
		return function(z){
			console.log(x*y*z)
		}
	}
}

//curr(4)(5)()


person={
	firstname:"ramnayan",
	lastname:"yadav",
	fullname:function(state,city){
		console.log(this.firstname+" "+this.lastname+" "+state+" "+city)
	}
}

person1={
	firstname: "vivek",
	lastname:"gupta"
}

//person.fullname.call(person1,'uttarpradesh','kanpur')
//person.fullname.apply(person1,['uttarpradesh','kanpur'])
//Bind=person.fullname.bind(person1,'uttarpradesh','kanpur')
//Bind()

function manf(){
   console.log(d)
   //var d
}
//manf()


let  sales =  [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  },{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    },{
      name: 'Jack',
      salary: 1300
    }]

    function salary(sales){
        let max=0
        let result=0;
        for(let i in sales){
            if(sales[i].salary>max){
                max=sales[i].salary
            }
        }
        for(let i in sales){

            if(sales[i].salary==max){
                //result=sales[i].name
                return sales[i]
                break;
            }

        }
        //return result;
    }

    console.log(salary(sales))