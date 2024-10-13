 function validation(){

        var popup = document.getElementById('popup');

    if(document.Formfill.Firstname.value==""){
        document.getElementById("result").innerHTML="Enter Firstname*";
        return false;
    }
     else if(document.Formfill.Firstname.value.length<3){
        document.getElementById("result").innerHTML="Atleast three letter*";
        return false;
    }
    else if(document.Formfill.Lastname.value==""){
        document.getElementById("result").innerHTML="Atleast three letter*";
        return false;
    }
    else if(document.Formfill.Email.value===""){
        document.getElementById("result").innerHTML="Enter your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your password*";
        return false;
    }
    else if(document.Formfill.cPassword.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digit*";
        return false;
    }
    else if(document.Formfill.cPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else if(document.Formfill.Password.value!== document.Formfill.cPassword.value){
        document.getElementById("result").innerHTML="Password doesnot matched*";
        return false;
    }
    else if(document.Formfill.Password.value!== document.Formfill.cPassword.value){
        popup.classList.add("open-slide")
        return false;
    }
    
    function closeSlide() {
        var popup = document.getElementById('popup');
        popup.classList.remove("open-slide");
    }
    
}
