var user=document.getElementById("user");
var pwd=document.getElementById("pwd");
var btn=document.getElementById("btn")
//function validate(){
  //  if(user.value.trim()==""||pwd.value.trim() ==""){
    //    alert("field cannot be empty");
      //  return false;
    //}else if(pwd.value.length<5){
       // alert("password should be greater than 5");
       //return false;
       //}
       //else{pwd.style.border="2px solid green";
       //return true
       //}
    //}
    function validate(){
        let regex =/^([a-za-z0-9\-])
        if(regex.test(user.value)){
            return true
        }else{
            alert("email is invalid")
        }

    }