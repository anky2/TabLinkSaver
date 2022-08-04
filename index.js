

let myLeads=["ankit","yadav"]
let inputText = document.getElementById("input-el");
let ulEl = document.getElementById("ul-El");
let btnClick=document.getElementById("input-btn");

btnClick.addEventListener("click",function(){
    myLeads.push(inputText.value);
    
})

for(let i=0; i<myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}