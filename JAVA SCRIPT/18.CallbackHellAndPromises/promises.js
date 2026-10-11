// pending , fullfilled , rejected

// const p1=fetch("https://api.github.com/users?per_page=20")
// // console.log(p1) // Promise { <pending> }

// // this is an older  method, in this : when state changes from pending to fullfilled or rejected only then consume 
// // p1.then((response)=>{
// //     console.log(response)
// // })
// const p2=p1.then((response)=>{
//     return response.json(); // it also return an promise
// })

// // console.log(p2) // again it will print pending

// p2.then((data)=>{
//     console.log(data)
// })

// we can write same thing like this also
// fetch("https://api.github.com/users?per_page=20")
// .then((response)=>{
//     return response.json()

// })
// .then((data)=>{
//     console.log(data)
// })


// how to handle errors like if url is wrong or rejection came then ?????
// fetch("https://api.github.com/users?per_page=20")
// .then((response)=>{
//     return response.json()

// })
// .then((data)=>{
//     console.log(data)
// }).catch((error)=>{
// // fetch("https://api.gi.com/users?per_page=20")// rejected state because request not reached to server 
// // fetch("https://api.github.com/u?per_page=20")// fullfilled becasuse request reached to the server but 'u' does not  exist in github backend so 
// // server will say that this type of data is not present here but we communicated with server so it is fullfilled state . 

//     console.log("Error: ",error)
// })
// in fullfilled state ther can be two states 1. data received 2. data not received due to some reason; how to handle this
// fetch("https://api.github.com/urs?per_page=20")
// .then((response)=>{
//     if(response.ok==false){
//         throw new Error("Unable to fetch data from server");
//         return ;
//     }
//     return response.json()

// })
// .then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("i will execute in any condition")
// })

// How to create a Promise
// const p1=new Promise((resolve, reject)=>{
//     // resolve("Hello")
//     // you can send an object also
//     // resolve({name:"abhay",
//     //     age:21
//     // })
//     // to handle reject catch is needed
//     reject("Error Occurred")
// })

// // console.log(p1)
// p1.then((resp)=>{
//     console.log(resp)
// }).catch((error)=>{
//     console.log(error)
// })
// here resolve means fullfilled and reject means rejected 
// it take very less time that's why we can print it directly and never get pending state 
// now to get pending state we will create a delay in response
const p2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
            resolve("Hello");
    },1000)
}) 
console.log(p2)  // shows pending state
p2.then((resp)=>{
    console.log(resp)
})

// why to learn Promise or what is need 
// because data does not come instantly like you send a request and instantly received the data 
// that's why java script promises that this some value will be come to this it may be rejected or fullfilled
// if there is no promise then js have to wait for response because its single threaded then page will be freezed 