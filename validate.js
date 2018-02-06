function check(){

    var name = document.getElementById("name");
    var username = document.getElementById("username");
    var pwd = document.getElementById("pwd");
    var cpwd = document.getElementById("confirmpwd");
    var email = document.getElementById("email");
    var mobile = document.getElementById("Mobile_No");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var other = document.getElementById("other");
    
    if(validateName(name)){
        
        if(validateUserName(username)){
            
            if(validateEmail(email)){

                if(validatePwd(pwd,cpwd)){
                    
                    if(validateMobile(mobile)){
                        
                        if(validateGender(male,female,other)){
                            
                            alert("Successfull !!!");
                            name.reset();
                            username.reset();
                            email.reset();
                            pwd.reset();
                            cpwd.reset();
                            mobile.reset();
                            male.reset();
                            female.reset();
                            other.reset();
                            return true;
                        }    
                    }                        
                }
            }
        }
    }
    return false;
}
function validateName(name){
    if(name.value.length > 1 && isNaN(name.value)){
        return true;        
    }
    else{
        alert("Incorrect Name");
        name.focus;
        return false;
    }
}
function validateUserName(username){
    if(username.value.length >= 5){
        return true;        
    }
    else{
        alert("Username length must be >= 5");
        username.focus;
        return false;
    }
}
function validateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You entered Incorrect Mail-id");
        uemail.focus();
        return false;
    }
}
function validatePwd(pwd,cpwd){
    if(pwd.value != cpwd.value)
    {
        alert("Password Not Match");
        pwd.focus();
        return false;
    }    
    else
    {
        if(pwd.value.length >= 8)
            return true;
        else{
            alert("Password Must be of atleast length 8")
            pwd.focus();
            return false;            
        }
    }
}
function validateMobile(mobile){
    if(mobile.value.length==10 ){
        return true;        
    }
    else{
        alert("Incorrect Mobile Number")
        mobile.focus();
        return false;            
    }
}
function validateGender(male,female,other){
    x = 0;
    if(male.checked)
        x=1;
    else if(female.checked)
        x=1;
    else if(other.checked)
        x=1;
    
    if(x==1)
        return true;
    else{
        alert("Select Gender");        
        return false;
    }
}
