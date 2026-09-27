const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')

const h1=document.querySelector('h1')
let count=0;

btn1.addEventListener('click',()=>{
    if(count<100)
    count++;
    h1.textContent=`Counter is: ${count}`;
})
btn2.addEventListener('click',()=>{
    if(count-1>=0)count--;
    h1.textContent=`Counter is: ${count}`;
})