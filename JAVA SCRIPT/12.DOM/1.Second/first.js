// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!EVERY ELEMENT IS AN OBJECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// LETS SEE HOW AN OBJECT LOOKS LIKE CORRESPONDING TO A HTML ELEMENT;
// let  <ul id="first", style:"background-color:blue; color:pink">
//  <li>list1<li>
//  <li>list2<li>
//  </ul>

// now let see how it looks like as an object 
// const ulist ={
// tagName:"ul",
// id:"first",
// style:{
//     backgroundColor:"blue",
//     color:"pink"
// },
// children:[li1,li2,li3]
// }
// how lists will look like it is stored as seperate objects; 
// const li1={
//     tagname="li"
//     textContent:"list1",
    
// }
// const li1={
//     tagname="li"
//     textContent:"list2",
    
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // class keyword: var, let, const

// const newElement = document.createElement('h2');
// newElement.textContent = "I am Sachin Kumar";

// // console.log(newElement);

// // select the first element
// const element = document.getElementById('first');

// element.before(newElement);


// const newElement2 = document.createElement('h3');
// newElement2.textContent = "Chamak gaya bhaiya";
// newElement2.id = "third";
// // newElement2.className = "Mohit";
// // newElement2.className += " Rohit";
// newElement2.classList.add("Rohit");
// newElement2.classList.add("Mohit");

// // console.log(newElement2.getAttribute('class'));
// newElement2.setAttribute('piyush',"mohan");

// console.log(newElement2)


// newElement.before(newElement2);

// element.after(newElement2);


// first I have to select unorderlist

// const ul = document.querySelector('ul');

// const ul =  document.getElementById('ul');

// const li = document.createElement('li');
// li.textContent = "Web Development"

// const li2 = document.createElement('li');
// li2.textContent = "System Design"

// const li3 = document.createElement('li');
// li3.textContent = "Devops"

// const li4 = document.createElement("li");
// li4.textContent = "DSA";

// const li5 = document.createElement("li");
// li5.textContent = "GenAI";


// ul.append(li,li2,li3,li4);

// ul.append(li);
// ul.append(li2);
// ul.append(li3);
// ul.prepend(li4);

// ul.children[1].after(li5);

// li.after(li5);

// li.textContent = "System Design"


// ul.append(li2);
// ul.append(li3);



// const foods = ["Milk","Soya","Chicken","Egg","Samosa","Jalebi"]
// const ul = document.getElementById("ul");

// // const fra = document.createDocumentFragment();
// const arr = []



// for(const food of foods){
//     const li = document.createElement('li');
//     li.textContent = food;
//     arr.push(li);
// }

// // arr = [li1,li2,li3]

// ul.append(...arr);




// // -----------------------------------------------------------------------------------------------------
// const newElement=document.createElement('h2');
// newElement.textContent="I am abhay Pratap singh";
// console.log(newElement)
// // lets hame is new element ko first element ke baad dalna hai to 
// // phle first element ko select karenge
// const element =document.getElementById('first')// first element ko select kr liya
// element.after(newElement)// phele dalna hai to 'before ' likh do after ki jagah

// const newElement2=document.createElement('h3')
// newElement2.textContent="hi how are you"
// newElement2.id="third"
// newElement2.className="Mohit"// class keyword is reserved like let const , thats why it is defined as className
// // newElement.className+=" Rohit";// add another class but this method not preferd;
// newElement2.classList.add('Rohit')

// console.log(newElement2);
// element.after(newElement2)


// // now like i have to know about any attribute of newElement2 | attributes -: id, bg class 
// console.log(newElement2.getAttribute('class'))// returns class
// // create new attributes
// newElement2.setAttribute('piyush', "mohan")
// console.log(newElement2)


// now you have an ul and you have to add items 
//      ul id="ul">
    //     <li>list1</li>
    // </ul>  like this but you have to create it with js
 // first i have to select ul
 // getelementbyid se bhi kr skte ho 
//  document.querySelector('ul')// query selctor uper se traverse karega aur jaise hi phala ul dikhega wo usko return karke dega multiple hongi but 
//  wo phli return krke dega 
// const ul=document.getElementById('ul')
// const li=document.createElement('li')
// li.textContent="i am list 1"

// // now you have to add this inseide ul not before/after
// //list like the child of ul

// ul.append(li)// add element inside the unordered list
// const li2=document.createElement('li')
// li2.textContent="list 2"
// ul.prepend(li2)// sbse aage jake add ho jayega top.
// // console.log(ul)// to show in console

// // place in between
// const li3=document.createElement('li')
// li3.textContent="list 3"
// li2.after(li3) // place after li2
// console.log(ul.children)// all childrens in form of HTML collection (array)
// console.log(ul.children[0]) // 0th child

// const li5=document.createElement('li')
// li5.textContent="List 5"
// ul.children[1].after(li5)  // currently li3 is the 1st child so li5 will be added after li3

// we can also append multiple items at once 
// ul.append(l1,l2,l3,l4....)

// jab hum backend pdhte hain
// mere pass backend se data kuch aisee ayega
const foods=["Milk","chicken","Soya","Egg","Samosa", "Jalebi"]
// ab hame sare element list ke andar dalne hain to hum one by one nhi dal skte . then how ?? let's seee.....
const ul=document.getElementById('ul')
// now we have to put elements in this ul

// for(const food of foods){
//     console.log (food)// ek ek karke sare foods print kr dega

// }
// now add to unordered list
// for(const food of foods){
//     console.log (food)
//     const list=document.createElement('li')
//     list.textContent=food
//     ul.append(list)

// }
// but this for loop method is not prefered because it manipultated dom in every iteration like first add this milk then chicken and so on....
// so we send items in pathces 


// so let's see how we can optimize it 

const fra=document.createDocumentFragment()
for(food of foods){
    const li=document.createElement('li')
    li.textContent=food
    fr.append(li)
}
ul.append(fr);// append fragment in the main list ; now we are manipulating dom only once

// this is like first we are pushing elements in an array instead of directly pushing elements in dom
// then we append arr in dom 

const arr=[]
for (food of foods){
    const li=document.createElement('li')
    li.textContent=food
    arr.push(li)
}
ul.append(...arr)// spread ek ek element ko bahar nikal ke ul ke andar append kar do

