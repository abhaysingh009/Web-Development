// const arr = [10,20,30,40,50];


// initial value of accumulator is 0
// accumulator = 150
// const sum = arr.reduce((accumulator,num)=>{
//     return accumulator+num;
// },0);
// console.log(sum)

// const ans = arr.reduce((acc,num)=>{
//     return acc*num;
// },1)


// console.log(ans);

Array.prototype.ownReduce = function(callback, initialValue) {

    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }

    return accumulator;
};

const arr = [10, 20, 40, 73, 18];

const sum = arr.ownReduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log(sum);