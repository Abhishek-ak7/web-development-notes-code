let btn=document.querySelector('button');
let task=document.querySelector('input');
let list=document.querySelector('ul');

btn.addEventListener ("click", function(){
    let item=document.createElement("li");
    item.innerText=task.value;
    list.appendChild(item);
    task.value="";
});