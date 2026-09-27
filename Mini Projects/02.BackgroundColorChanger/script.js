

const Main=document.getElementById('main');

const root=document.getElementById('root');

function Callback(e){
    const t=e.target
    Main.style.backgroundColor=t.style.backgroundColor;

}
root.addEventListener('click',Callback)
// change.style.backgroundColor="red";