
//Problem
//Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

function lucky(arr,target,kth){
  var bool=false;
  for(let i=0;i<arr.length-(kth-1);i++){
    if(arr[i]+arr[i+1]+arr[i+2]===target){
       bool=true;
      break;
      }
    }
    if(bool){
    console.log("lucky number present");
    }else{
    console.log("nop");
    }
  }
   //lucky([2,1,3,4,2,2,5,2,3,5,2,3,3],7,3);
   
//Problem
//You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.

function angle(minuts=15){
  let date=new Date();
  let t=date.toLocaleTimeString("en-US");
  let h=date.getHours();
  console.log(t);
  //console.log(h%12);
  console.log(minuts*6);
  }
  //setInterval(angle,1000)
  

//Problem
//You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. Solve without and with reduce.

function sum_array(arr){
   let sum=0;
   for(let i=0;i<arr.length;i++){
       for(let j=0;j<arr[i].length;j++){
         sum+=arr[i][j];
         }
        }
       console.log(sum)
    }
    
    //sum_array([[3, 2], [1], [4, 12]])
    
  //Problem
//You will be given 2 parameters: a low and high number. Your goal is to print all numbers between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word "div3" directly after the number.
  
  function divisor(low,high){
    let newarr=[]
   for(let i=low;i<high;i++){
        newarr.push(i);
        if(i%3===0)
          newarr.push("div3");
      }
      return newarr;
   }
  
  //console.log(divisor(2,17))
  
  //Problem
//Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

function  arraysum(arr){
    const result=arr.reduce((initial,value)=>{
      return initial+value
    },arr.length);
    return result;
   }
  // console.log(arraysum([1,2,3,4,5,6]))
    
    const arr=[1,2,3,4,5,6];
    //const newarray=[];
     let sum=0;
    arr.forEach((item,index)=>{
       sum+=item+1;
       //console.log(sum)
    })
    //console.log(sum)
    
 //Problem
//Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements. Try to solve with and without reduce function.

let oddball=[1,2,3,4,5,6];
 let oddsum=0;
oddball.forEach((item,index)=>{
   if(item%2!==0){
     oddsum+=item;
     }
})
//console.log(oddsum)

//Problem
//Find out if a string is a rotation of another string. E.g. ABCD is a rotation of BCDA but not ACBD.

module.exports=function (a, b) {
  return a.length === b.length && (a + a).indexOf(b) > -1;
};

{
let fruits=["mango","apple","banana","pineapple"];

//console.log(fruits.pop());
//console.log(fruits.push("potato"));
//console.log(fruits)

//console.log(fruits.unshift("potato"));   //add new array element at front
//console.log(fruits)  //remove an element from start
}    
//REVERSE- reverse an string
let name="ramnayan";
spl=name.split("");
rev=spl.reverse();
jon=rev.join("");
//console.log(jon)
//console.log(name.split('').reverse().join(''))

//ARRAY ROTATION-


function rightrotate(arr,n){ // right rotation
   for(let i=0;i<n;i++){
     popele=arr.pop();
     arr.unshift(popele);
     }
     return arr;
    } 

function leftrotate(arr,n){ // left rotation
   for(let i=0;i<n;i++){
     popele=arr.shift();
     arr.push(popele);
     }
     return arr;
    }  
     

let months=["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"] 
//console.log(leftrotate(months,4));

//Problem
//For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

function wordreverse(sentence){
    var newarr=[];
    var words=sentence.split(" ");
     for(let i=0;i<words.length;i++){
              newword=words[i].split("").reverse().join("");
              newarr.push(newword);
      }
      return newarr.join(" ");
    }
    
var string = "Welcome to this Javascript Guide!";
 //console.log(wordreverse(string))
   
 //Problem
//Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time  
  
  function missing(arr,u,l){

    let sum=0;
    for(let i=0;i<arr.length;i++){
      sum+=arr[i];
    }

    let newsum=0;
    for(let i=1;i<=u;i++){
      newsum+=i;
    }

    //newsum=[(u*(u+1))/2]-[(l*(l-1))/2];
   return newsum-sum;
  } 

var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;
//console.log(missing(arrayOfIntegers, upperBound, lowerBound))

//Problem-remove duplicate element from array
function duplicate(arr){
  list=[];
  for(let i=0;i<arr.length;i++){
     if(!list.includes(arr[i])){
         list.push(arr[i])
     }
  }
  return list;
}  
//console.log(duplicate([1,2,1,3,2,4,5,2,5,6,1,3,4,10]))
   
  ///UNIQUE ELEMENTS 
function unique(text){
  var count={};
  var countarr=[]
  var newarr=[];
  text.split('').forEach((s)=>{
    count[s] ? count[s]++ : count[s]=1;
  })
  countarr[...count];
  countarr.filter((e)=>{
     if(e.value()===1){
       newarr.push(e.key())
     }
  })
  return newarr;
}
//console.log(unique("ramnayanyadav"))

//Frequency

function letterFrequency(text){
 var count = {};
 text.split('').forEach(function(s) {
  count[s] ? count[s]++ : count[s] = 1;
 });
 return count;
}

//console.log(letterFrequency("ramnayanyadav"))
    

    

   
  
  
  
  
  
  
