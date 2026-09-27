const form=document.querySelector('form')
const para=document.querySelector('p')
const first=document.getElementById('first')
const second=document.getElementById('second')

form.addEventListener('submit',(e)=>{  // for button event is submit
    e.preventDefault();
    const targetId=e.submitter.id;// e.submitter gives you the button that actually caused the form submission.For a submit event, e.target refers to the element on which the event listener was attached — your form.
    const num1=Number(first.value);// using .value we can get value of input
    const num2=Number(second.value);// data comes in string so it is neccessary to convert it in number
    switch(targetId){
        case 'add':
            para.textContent=`Result is: ${num1+num2}`;
            break;
        case 'sub':
            para.textContent=`Result is: ${num1-num2}`;
            break;
        case 'mul':
            para.textContent=`Result is: ${num1*num2}`;
            break;
        case 'divi':
            if(num2==0)para.textContent="Division by zero not allowed!";
            else 
            para.textContent=`Result is: ${num1/num2}`;
    }


})