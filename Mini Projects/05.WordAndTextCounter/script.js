const textArea=document.querySelector('textarea')

const textCount=document.querySelector('h2')
const wordCount=document.querySelector('h3')

textArea.addEventListener('input',()=>{
    const text=textArea.value;
    
    const refinedText=text.trim(); // remove leading and last space 
    textCount.textContent=`Text Count: ${refinedText.length}`;

    const totalWord=refinedText.split(' ')// convert strin in to array and return its length to count words 
    // but there is a problme like if string is empty then array will look like this arr= [""] her the length of array is 1 but it should 0 so we have to handle this explicitly
    // now if a user adds multiple spaces like abhay     pratap then arr becomes somme thing like this arr=[abhay , "","",pratap]
    // then its length is wrong anser so we filter it  or there is another option split based on '/\+s/' ->means one or more whitespace characters.
    const removedSpArr=totalWord.filter((word)=>word!='')
    let wordlength=removedSpArr.length
    if(refinedText=="")wordlength=0;

    wordCount.textContent=`Word Count: ${wordlength}`;

})
