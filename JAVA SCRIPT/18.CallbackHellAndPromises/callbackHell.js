// callback hell
// first principle : DRY (dont repeat your code), code readable

// zomato application
// place order
// prepare order
// pickUpOrder
// DeliverOrder

// function placeOrder(){
//     console.log("Payment is in Progress")

//     setTimeout(()=>{
//         console.log("Payment is Completed")

//     },3000)
// }

// function prepareOrder(){
//     console.log("Restaurent received the order and preparing it ")

//     setTimeout(()=>{
//         console.log("Your order is prepared now.")
//     },3000)
// }
// placeOrder()
// prepareOrder()

// output of this code is but we dont want like this 
// Payment is in Progress
// Restaurent received the order and preparing it 
// Payment is Completed
// Your order is prepared now.






// so we can call prepareOrder in settimeout but dont hardcode it pass it through callback function 
// function placeOrder( callback){
//     console.log("Payment is in Progress")

//     setTimeout(()=>{
//         console.log("Payment is Completed")
//         callback();

//     },3000)
// }

// function prepareOrder(callback){
//     console.log("Restaurent received the order and preparing it ")

//     setTimeout(()=>{
//         console.log("Your order is prepared now.")
//         callback()
//     },3000)
// }
// placeOrder(prepareOrder)
// // now perfect 
// // Payment is in Progress
// // Payment is Completed
// // Restaurent received the order and preparing it 
// // Your order is prepared now.

// function pickUpOrder(){
//     console.log("Delivery boy is on the way to pick order from restro")
//     setTimeout(() => {
//         console.log("Delivery boy reached to the restro and picking your order")
        
//     }, 3000);
// }
// function pickUpOrder(){
//     console.log("Delivery boy picked the order from restro ")
//     setTimeout(() => {
//         console.log("Oreder delivered to the Customer")
        
//     }, 3000);
// }


// Now let's See the call back Hell

function placeOrder( callback){
    console.log("Payment is in Progress")

    setTimeout(()=>{
        console.log("Payment is Completed")
        callback();

    },3000)
}

function prepareOrder( callback){
    console.log("Restaurent received the order and preparing it ")

    setTimeout(()=>{
        console.log("Your order is prepared now.")
        callback()
    },3000)
}

function pickUpOrder(callback){
    console.log("Delivery boy is on the way to pick order from restro")
    setTimeout(() => {
        console.log("Delivery boy reached to the restro and picking your order")
        callback()
    }, 3000);
}
function deliverOrder(){
    console.log("Delivery boy picked the order from restro ")
    setTimeout(() => {
        console.log("Oreder delivered to the Customer")
        
    }, 3000);
}

// placeOrder(prepareOrder) now  we have to call pickuporder() from prepareorder() we can't directly pass as -->
// placeOrder(prepareOrder(pickupOrder)) prepareOrder is called here when we written braces 


// this is called callBack Hell...........................also called piramid of DOM
placeOrder(()=>{
    prepareOrder(()=>{
        pickUpOrder(()=>{
            deliverOrder()
        })
    });
})

//this is a simplified version to understand callback hell but in realworld code base there are too many things in one fucntion 
// so to understand that code becomes very difficult



