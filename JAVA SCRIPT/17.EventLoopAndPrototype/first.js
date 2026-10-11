const obj={
    name:"Abhay",
    age:20,
    city:"delhi",
    greet:function (){
        console.log(`Name: ${this.name}`)
    }
}

// console.log(obj.hasOwnProperty('name')); // we did not make these properties(hasOw..ty, toSt..g) then from where they came ??
// console.log(obj.toString());

// arr=[1,2,3]
// arr.push(10)// we also not created push method ????? 

//--------------------------------------------------------------------------------------------
const obj2={
    balance:70

}
// console.log(obj2.name)            // undefined 
// console.log(obj2.balance)

// here name property is not defined in obj2 then we also not defined 'hasOwnP...y' in obj1 then how they are defined ????

 // these proprty comes like this 
 // we want to add obj properties with obj2
obj2.__proto__= obj // now we can access all the properties of obj
// console.log(obj2.name) // now it will print 'Abhay'
console.log(obj2.__proto__)// prints parent object
//--------------------------------------------------------------------------------

// console.log(Object.prototype)// run in browser's console   ; When an ordinary object is created, its internal [[Prototype]] is set to Object.prototype by default.

// object.prototype has various methods and object can access its own properties as well as object.prototype's properties also
// behind the secne as you create an object " obj.__proto__=Object.prototype "







