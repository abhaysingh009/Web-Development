

// this is a java script object
// const jsObject={
   //     name:"abhay",
   //     age:20,
   //     login:true,
   
   //     // json not supports
   //     a:undefined,
   //     b:function gr(){}
   // }
   
   // this is a json - it is a common format for communication b/w languages ;data is send in string form
   // const Json=`{
      // "name":abhay,
      // "age":20,
      // "login":true,
      // "arr":[1,2,3],
      // "b":null,
      // "ob":{"key":value,
      //     "k2":"v2"}
      // }`
      
      // how to convert js obj in json format
      //  const jsObj={
         //     name:"abhay",
         //     age:20
         //  }
         // const st=JSON.stringify(jsObj)
         // console.log(st)// type-> string
         
         
         // // string to object
         // const obj=JSON.parse(st)
         // console.log(obj)
         // console.log(typeof obj)// object




         // const response= await fetch('https://api.github.com/users?per_page=20'); // fetch to fetch data form response 
         // // await :- wait for response then execute next lines other wise it will not wait for response from api and will execute next instructions immediately
         // console.log(response)

         // response ki body ke andar data rakha gya hai , usko read krke js object me convert karo
         // const data=  await response.json(response)// what ever response came convert that into js object (NOT JSON) form and store in 'data ' variable and wait here until it completes the conversion
         // console.log(data)

         // if we will not use await then it will print Promise { <pending> }
         // promise :- i am promissing i will definitely give you response either pos or neg  
         // promise-(states) --> pending , fullfilled , rejected 
         // pending means abhi data nhi aaya hai us var ke andar ek pendig object create kr diya jata hai 
         // fullfilled means your request reached to the server and it resposed it can be like you requested data then if it gives data then also fullfilled if not gives then also fullfilled 
         // simple meaning if you get resp from server (pos or neg) means fullfilled

         // rejected means your request did not reach to the server due to network or DNS or anything else

// Java Script is called "single threaded asynchronus language"'
// ek baar me ek hi task excute hoga (go to any webpage-inspect and run a loop till 10^18 web page will get stucked for some time because meanwhile js is executing the loop ) that's why if a webpage uses too much animation it feels laging.

// jaise hamne upar await ko use kiya hai program waits for response from api,  to executes next lines and that is not a good thing 
// because jo code us instruction se independent hai at least wo to chale.........
// here we need asynchronus programmning --> code agar response ke liye wait kar rha hai to atleast wo code execute ho jo response se independent hai fir jab resp aa jaye to wo execute ho jaye
// isliye await wali command ko function ke andar likhte hain and use keyword async before function 



console.log('start')
async function github(params) {
   const response= await fetch('https://api.github.com/users?per_page=20');
   const data=  await response.json(response)
   console.log(data)
}
github()
console.log('end') // now this will executed without waiting for response 



   