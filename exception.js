var btn1=document.getElementById("btn1");
var err1=document.getElementById("err1");

function display(){
    try{
        alert("btn clicked")
    }catch(error){
        err1.innertext=error.message
    }
}
function check(){
    var jes=document.getElementById("jestin").Value;
    var nel=document.getElementById("nelbin").value;
    try{
        if(jes=="")throw"box cannot be empty";
        if(jes)throw"value is not a number";
        if(isNaN(jes))throw"value should be greater than 10";
        if(x<10(nel))throw"value should be greater than 20";
    }catch(error){
        pp.innertext=error
    }
    finally{
        document.getElementById("jestin").value=" "
    }
}
                      

