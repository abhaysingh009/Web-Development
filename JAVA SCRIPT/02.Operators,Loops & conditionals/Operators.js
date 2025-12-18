//OPERATORS-----------------------------------------------

//Arithmatic 

// console.log(2+4)//6
// console.log(2-4)//-2
// console.log(2*4)//8
// console.log(4/2)//2
// console.log(10%4)//rem=2
// console.log(5**2)//5x5=25
// console.log(5**3)//5x5x5=125



//Assignment Operator

// let x=20
// let y=10;
// x+=y;
// console.log(x);//30
// x=x-y;
// console.log(x);//20



// comaprision operator

// let x=20;
// let y=10;
// console.log(x>y);//true
// console.log(x<y);//false
// console.log(x==y);//false


//typecast string <-->  number
// let y='10';
// let a=Number(y);
// console.log(typeof a)//Number

// let b=String(a);
// console.log(typeof b);//string

// let x='1000';
// let y='999';
// console.log(x>y)// unicode value of 1=49 and of 9=57 so it will compare character by character 1st step 49>57 it will return false here the first condition is false
//so it will not check for other character and will return false; so in string and number comaprison if number will get converted in string then thistype of error can occur
//that's why in two numbers(one is number and another is number string) comparison string is gets converted in number not number gets converted in string

// let x=10;
// let y='10'
// console.log(x==y)// true because string gets converted in number('==':-loose equality)

// console.log(x===y)//('===':- strict equality) before comparing it checks data types if data types are not same it returns false without comparing 
//if data types are same then compares both values and returns result; 


// let a='21bs';
// let b=Number(a);
// console.log(b);//prints NaN - Not a Number 
// console.log(typeof b)//but its type will be number 


// // Boolean to Number
// let a=Number(false);
// let b=Number(true);
// console.log(a);//0
// console.log(b);//1

//  Number to boolean
// let a=Boolean(2390);//any number!=0 will converted in true
// let b=Boolean(0);//only 0 considerd as false
// console.log(a);
// console.log(b);

// let a=null;
// console.log(Number(a));// converted in 0;
// let b=undefined;
// console.log(Number(b));//NaN



//computer science challenge
// let a=0.1;
// let b=0.2;
// let c=a+b;
// console.log(c==0.3)//this will print false because binary rep of 0.1 and 0.3 or any other point value can not be precised so addition of 0.1 and 0.3 
// //wil not be exactly equal to 0.3 it can be 0.3000000002231,0.299992232,0.3009202 ............. 
// console.log(c)

// some RULES 
// 1: null is loosely equal to undefined only

// console.log(null==undefined); //true
// console.log(null===undefined);//false
// console.log(null==0);//false
// console.log(null=="");//false
// console.log(null==false);//false
// console.log(null==true);//false

// >,<,>=,<= (null --> number, undefined --> NaN)

// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);
// console.log(null>=undefined);
// console.log(undefined>=0);

console.log(NaN==NaN); //this is not equal






