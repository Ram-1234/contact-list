let all_child=document.getElementsByClassName('all-contact')

 let modal_tag=document.getElementsByClassName('modal-tag')


function loadImage(numImage=10){

  let i=0
 while(i<numImage){
 fetch('https://jsonplaceholder.typicode.com/users')
.then(file=>file.json())
.then(data=> {	
	//console.log(data)

	document.getElementById('search').addEventListener('click',function(){
		all_child[0].innerHTML=""
		input=document.getElementById('input_data').value
		//console.log(input.toUpperCase())
		newdata=data.filter(item=> {return item.name.slice(0,input.length).toLowerCase() === input.toLowerCase()})
		//console.log(newdata)
		newdata.map(item => {
		all_child[0].appendChild(creatediv(item))
		
	})

	})

    document.getElementById("sort").addEventListener("click", function() {
    all_child[0].innerHTML=""
     data.sort((a,b)=> a.name.toUpperCase() > b.name.toUpperCase() && 1 || -1)
     data.map(item => {
		all_child[0].appendChild(creatediv(item))
		
	})
});

	data.map(item => {
		all_child[0].appendChild(creatediv(item))
		
	})
  })
 i++
 }
}

loadImage()


//infinite scroll
window.addEventListener('scroll',()=>{
    //console.log(window.scrollY) //scrolled from top
    //console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    loadImage();
    }
})
//event handling

function creatediv(item){
	//console.log(item)
	let parent=document.createElement('div','')
	parent.setAttribute('class','parent-div')
	let id=document.createElement('p')
	id.innerText="Id: "+item.id
	let company=document.createElement('p')
	company.innerText="Company: "+item.company.name
	let address=document.createElement('p')
	address.innerText="City: "+item.address.city
	let image=document.createElement('img')
	image.setAttribute('class','avtar')
	image.setAttribute('alt','image-avtar')
	image.setAttribute('src','data:image/jpeg;base64,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')
	let email=document.createElement('p')
	email.innerText="Email: "+item.email
	let name=document.createElement('h3')
	let user=document.createElement('h2')
	name.innerText="Name: "+item.name
	user.innerText="Username: "+item.username
	parent.append(image,id,user,name,company,email,address)
	return parent
}

