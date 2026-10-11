
// how to solve callback hell
function placeOrder( ){
    console.log("Payment is in Progress")

    setTimeout(()=>{
        console.log("Payment is Completed")

    },3000)
}

function prepareOrder( callback){
    console.log("Restaurent received the order and preparing it ")

    setTimeout(()=>{
        console.log("Your order is prepared now.")
    },3000)
}

function pickUpOrder(callback){
    console.log("Delivery boy is on the way to pick order from restro")
    setTimeout(() => {
        console.log("Delivery boy reached to the restro and picking your order")
    }, 3000);
}
function deliverOrder(){
    console.log("Delivery boy picked the order from restro ")
    setTimeout(() => {
        console.log("Oreder delivered to the Customer")
        
    }, 3000);
}