//variables and data types 

//LET KEYWORD
// let name ="abhay";
// let age =21;
// age =30;
// console.log(name,age);

// const account=1234;
// account=3;//throws error becz we cant override const var;
// console.log(account);


//VAR KEYWORD AND ITS PROBLEMS
// var a=10; using let we cant declare same var more than one time ;
// var a=29; but using var we can; but var is an older method to declare variable   ;
// console.log(a);
// if(true){
//     var a=20;
// }
//  console.log(a);//this will get printed becz var doesn't respects scope  


//DATA TYPES
//PRIMITIVE DATA TYPES 
// number,string ,boolean ,undefined ,null,bigint ,symbol 

//NON PRIMITIVE DATA TYPES
//array ,object ,function


//primitve data types
 // number
// let n=109;
// let a=202.30;
// console.log(typeof a)//number

//string
// let s="abhay"
// let c='abhay'
// console.log(typeof c)//string



//boolean
// let b=true;
// let w=false


//undefined
// let n;
// const w;    we cant declare var usnig const keyword becz we must have  to assign its value at the time of declaration 
// console.log(n)  //prints undefined



//bigint
// let x=991354235353464575682359n;
// console.log(x);


//null
// let weather=null;
// console.log(weather);

//symbol
// let id1=Symbol("s1"); //symbol generates a unique value 
// let id2=Symbol("s1");
// console.log(id1==id2)//return false becz both are unique



//NON -Primitive data types 

// array

// let arr=[1,2,3,4,'abhay',729.3,true,38.4];
// console.log(arr)


//object 
// let user = {
//     name :"rohit",
//     account:1234,
//     age:18,
//     catagory:'gen'
// }


// function
//  function add(){
//     console.log("hello")

//  }
//  add()

//  let s=function add(){     //we can store a function in variable in javascript
//      console.log("hello")
     
//     }
//     console.log(s)




//primitive datatypes are immutable in js  non primitive datatypes are mutable
// let s="abhay"
// s[0]='s'
// console.log(s[0])//this will print a becaz we cant change its value in same string 




// let obj={
//     name:"abhay",
//     age:21
// }
// let obj1=obj
// obj1.name="aman"
// console.log(obj.name)//this will print aman becz both objects are ponting same memory location (applicable for all non primitive datatypes)
