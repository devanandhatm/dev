function popup(){
    alert("you have clicked me")
}
 btn=document.getElementById("mybtn")
btn.addEventListener("click",function(){
    btn.textcontent="changed"
})
var id1=document.getElementById("id1")
function changeColor(){
id1.style.backgroundColor="yellow"
}
function hide(){
    id1.style.backgroundColor="white"
}