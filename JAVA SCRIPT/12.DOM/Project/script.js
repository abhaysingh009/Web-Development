// lets say we have information of 10 users came from backend
// i want to show this data on ui , name age and photo

const users = [
  {
    name: "Aarav Sharma",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rahul Mehta",
    age: 26,
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sneha Kapoor",
    age: 23,
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Karan Malhotra",
    age: 28,
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Ananya Singh",
    age: 21,
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Rohan Gupta",
    age: 25,
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Neha Joshi",
    age: 27,
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Aditya Raj",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Isha Agarwal",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];

/*
<div>
{ <h2>Name: Abhay Pratap Singh</h2>
<p>Age: 22</p>
<img src="url"></img> }
</div>*/

const root=document.getElementById('root')

users.forEach((people)=>{
    const name=document.createElement('h2')
    name.textContent=`Name: ${people.name}`;
    // age 
    const age=document.createElement('p')
    age.textContent=`Age: ${people.age}`;
    // create image 
    const image=document.createElement('img');
    image.src=people.photo;
    image.alt="image loading..."
    // add all elemenst in a single div
    const card=document.createElement('div')
    card.append(image,name,age);
    root.append(card)
})

// here we are putting elements one by one in dom can we optimize it??????

// const root=document.getElementById('root')
// const arr=[]

// users.forEach((people)=>{
//     const name=document.createElement('h2')
//     name.textContent=`Name: ${people.name}`;
//     // age 
//     const age=document.createElement('p')
//     age.textContent=`Age: ${people.age}`;
//     // create image 
//     const image=document.createElement('img');
//     image.src=people.photo;
//     image.alt="image loading..."
//     // add all elemenst in a single div
//     const card=document.createElement('div')
//     card.append(image,name,age);
//     // root.append(card)f
//     arr.push(card)
// })
// root.append(...arr)

