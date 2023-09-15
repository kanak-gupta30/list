const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('container');
const additem=document.getElementById('button')
additem.addEventListener('click',function addelement() {
    if (inputbox.value == '') { alert("you must write something."); }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
})
listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName ==="SPAN"){e.target.parentElement.remove();}

})
