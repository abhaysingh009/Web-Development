// EVENT LOOP ------------------------------------------------------>
const btn1=document.getElementById('first')
const btn2=document.getElementById('sec')
const btn3=document.getElementById('third')

btn1.addEventListener('click',()=>{
    console.log("button 1 is clicked")
})
btn2.addEventListener('click',()=>{
    console.log("button 2 is clicked")
})
btn3.addEventListener('click',()=>{
    console.log("button 3 is clicked")
})

// we know that javascript is a single threaded lang but here we attached three event listener 
// so how js will do all three task 
// SO IT IS HANDLED BY BROWSER BECAUSE BROWSER CAN DO MULTIPLE TASKS AT SAME TIME

// WEB API :(window)global ) : ke through ye handle kiya jata hai 
// when js see event listener  it knows  it cant handle it so it tells to browser that this is a eventlistener if any user clicks on it remind me 
// and js goes to another task or instruction 


// how will this be printed 'console.log("button 1 is clicked")'
// when user clicks on button, browser listens that user cliked on buttton so it will move corresponding function in "call back queue"
// AND THERE IS A CODE HERE CALLED EVENT LOOP 
// which checks that is there any code present in the call back queue,  if present and callstack is empty  then move that code in the callstack
// and callstack will execute that code and it will be displayed on the screen ("button 1 is clicked")

// there is also a microtask queue and whose priority is little bit higher
// The Microtask Queue is a special queue used by JavaScript to store small, high-priority asynchronous tasks that should run after the current synchronous code finishes but before the next macrotask/task.
// Both queues callback and microtask  wait for the current synchronous code to finish. But once the call stack becomes empty, the Microtask Queue is processed before the Callback/Task Queue.


