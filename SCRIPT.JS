var head=document.getElementById("head1");
console.log(head);
head.style.color="blue";
head.textcontent="Text content changed"
head.innerHTML="<h6> Changed in to h6</h6>"
var c=document.getElementsByClassName("List");
for(let i=0;i<c.length;i++)
    {
    c[i].style.backgroundColor="yellow";
}
var t=document.getElementsByTagName("Li");
t[1].style.color="red"
//Using query selector
let val =document.querySelector("input");
val.value="name"
var savebtn=document.querySelector("#savebtn");
savebtn.style.backgroundColor="green"