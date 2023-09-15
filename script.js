const inputbox=document.getElementById('input-box');
const listcontainer=document.getElementById('container')


function addelement(){
if(inputbox.value==''){alert("you must write something.");}
else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputbox.value='';
}
