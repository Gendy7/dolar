//start validate section

function validate(){

    var ali = document.getElementById ("bank").value;

    var result = document.getElementById("gendy")

    if(ali==""){
        result.innerHTML = "please Enter Data"
        return false;
    }
    else if(isNaN(ali)){
        result.innerHTML ="Please Enter Number Not Text"
        return false;
    }
    else if(ali<0){
        result.innerHTML = "Please Enter Postive Number"
        return false;
    }
    else if(ali==0){
        result.innerHTML ="Please Enter Number Rather Than 0"
        return false;
    }
    else{
        result.innerHTML = ali * 50 + " " + "Egyption pound";
        return false;
    }
   
}
//end validate section