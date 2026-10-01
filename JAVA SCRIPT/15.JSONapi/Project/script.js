async function github(number=10) {
    // const resp=await fetch("https://api.github.com/users?per_page=20");
    const resp=await fetch(`https://api.github.com/users?per_page=${number}`);
    const data=await resp.json();
    console.log(data)

    const root=document.getElementById('root')
    root.textContent=""
    for(const user of data){
        // div create karenge
        const container=document.createElement('div')
        // container.style.display='flex';
        container.style.justifyContent='center'
        container.style.padding='5px'
        const img=document.createElement('img')
        img.src=user.avatar_url;
        img.style.height="200px"
        img.style.weight="200px"

        const name=document.createElement('p')
        name.textContent=user.login;

        container.append(img,name);


        root.append(container)
    }
    

}
// github()

const search=document.getElementById('btn')
const input=document.querySelector('input')
search.addEventListener('click',()=>{
    //    root.textContent=""
    const number=Number(input.value)
    github(number)

})
