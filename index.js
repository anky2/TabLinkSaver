

let myLeads=[]
let inputText = document.getElementById("input-el")

let btnClick=document.getElementById("input-btn");

btnClick.addEventListener("click",function(){
    myLeads.push(inputText.value);
    console.log(myLeads);
})