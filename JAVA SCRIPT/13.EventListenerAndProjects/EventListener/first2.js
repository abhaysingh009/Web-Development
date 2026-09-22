// we have 4 div's when some one clicks on div then it should show -"i am clicked"
// add 4 event Listener
// const child1=document.getElementById('child1')
// const child2=document.getElementById('child2')
// const child3=document.getElementById('child3')
// const child4=document.getElementById('child4')

// child1.addEventListener('click',()=>{
//     child1.textContent="I am Clicked"
// })
// child2.addEventListener('click',()=>{
//     child2.textContent="I am Clicked"
// })
// child3.addEventListener('click',()=>{
//     child3.textContent="I am Clicked"
// })
// child4.addEventListener('click',()=>{
//     child4.textContent="I am Clicked"
// })

// but this is efficient approach to add 4 event listener beacause all four are consuming some resources
// we can directly add eventlistener on the parent 

// const par=document.getElementById('parent')
// par.addEventListener('click',(evOb)=>{
//     console.log(evOb)
//     console.log("parent is clicked")
// })
//  evOb is an  event object jo ki sari info ko store krke rakhta hai events ke baare me ki exactly apne kya operation waha pe perform kiya hai 
// jaise ki e.target se hum clicked element ko pta kr skte hain 



// const par=document.getElementById('parent')
// par.addEventListener('click',(e)=>{
//    e.target.textContent="I am clicked"

//    console.log(e)
//    console.log(e.target)
// })

// 2nd --------------------------------------------------------
//ab 3 event listener lagate hain
const grandParent=document.getElementById('grandParent')
const Parent=document.getElementById('parent')
const child=document.getElementById('child')

// grandParent.addEventListener('click',()=>{
//    console.log("Grand Parent is clicked")
// })
// Parent.addEventListener('click',()=>{
//    console.log("Parent is clicked")
// })
// child.addEventListener('click',()=>{
//    console.log("child is clicked")
// })
// addEventListener ek tisra argument bhi expect krta hai by default it is false

// grandParent.addEventListener('click',()=>{
//    console.log("Grand Parent is clicked")
// },true)
// Parent.addEventListener('click',()=>{
//    console.log("Parent is clicked")
// },true)
// child.addEventListener('click',()=>{
//    console.log("child is clicked")
// },true)

// event bubbling
// capture phase , target phase , bubbling phase

// capture phase  goes in this order : window -> document-> html -> body -> grandParent -> parent -> child
// bubbling phase  goes in this order : child->parent -> grand.............................-> wondow
// the third valuse we are passing (true/false )indicates that if true then it will execute in  capture phase 
// if false  then it will execute in  bubbling (initially it is fault)

//  phle capture phase activate hota hai  aur target (jaha pe aap ne click kiya hai) tak jata hai so : here for three like if true false true then firs gp is clicked then child is clicked then bubbling phase will start so parent is clicked .  It will print in this order
// Grand Parent is clicked
// child is clicked
// parent is clicked


// hame events ko remove bhi krna hota hai 

// 3rd --------------------------------------
// button ko change krna hai clicked 
const button=document.querySelector('button')

const callBack=()=>{
button.textContent= "clicked";
button.removeEventListener('click',callBack)

}
button.addEventListener('click',callBack)

// click hone ke baad event listener ko hta do  afte click jo hame chahiye wo mil chuka hai but abhi bhi background me koi code uspe continuously work kr rha hoga , but hamara kaam ho chuka hai isliye after our work done , remove the event listener

// remove event listener
// button.removeEventListener('click',callBack)// here we are executing that is button ke upar  se click wale event listener ko hatana  and this is the call back which you have to remove   
// but yaha agar hum eventlistener ko remove karenge to eventlistener chalega hi nhi because we are adding evelistener then removing 
// so we add it inside the function so that after executing the instructions of function , remove eventlistener