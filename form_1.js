let form = document.getElementById('form');
let fName = document.getElementById('firstName');
let lName = document.getElementById('lastName');
let age = document.getElementById('age');
let email = document.getElementById('email');
let phoneno = document.getElementById('phoneNo');
let submit = document.getElementById('submit');


let fn = document.getElementById('fn');
let ln = document.getElementById('ln');
let ag = document.getElementById('ag');
let em = document.getElementById('em');
let ph = document.getElementById('ph');

let inputValidator = {
    "firstName": false,
    "lastName": false,
    "passengerAge": false,
    "emailId": false,
    "phoneNumber": false

};


fName.addEventListener('input',validatefName)
lName.addEventListener('input',validatelName)
age.addEventListener('input',validateAge)
email.addEventListener('input',validateEmail)
phoneno.addEventListener('input',validatephoneNo)




function passvalues()
        {
            var fname=document.getElementById("firstName").value;
            localStorage.setItem("textvalue",fname); 
            var lname=document.getElementById("lastName").value;
            localStorage.setItem("textvalue1",lname);
            var a=document.getElementById("age").value;
            localStorage.setItem("textvalue2",a);
            var e=document.getElementById("email").value;
            localStorage.setItem("textvalue3",e);

            localStorage.setItem("flag",0);

            var radios = document.getElementsByName('gender');
            for (var radio of radios)
            {
                if (radio.checked) {
                    localStorage.setItem("gend",radio.value); 
                }
            }
            return false;
        }
        



submit.disabled = true;

function btnRelease(){

    console.log("Entered Button release fn");

    if(inputValidator.firstName === true && inputValidator.lastName === true && inputValidator.passengerAge === true && inputValidator.emailId === true && inputValidator.phoneNumber === true){
    
        
        submit.removeAttribute('disabled');
        console.log("Submit button");

    }
    else{
        submit.disabled = 'true'
        console.log('Submit button not active');
    }
}




function validatefName(){

    console.log(fName);
    var f = fName.value;

    

    if(f.match(/^[a-zA-Z]{0,20}$/)){
        console.log('Name valid');

        valid(fName);
        fn.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.firstName = true;
        btnRelease();
        

    }
    else{
        invalid(fName);
        fn.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.firstName = false;
    }
}


function validatelName(){

    console.log(lName);

    var l = lName.value;

    if(l.match(/^[a-zA-Z]{0,20}$/)){
        console.log('Name valid');

        valid(lName);
        ln.innerHTML = '<i class="uil uil-check-circle"></i>';
        
        inputValidator.lastName = true;
        btnRelease();
    }
    else{
   
        invalid(lName);
        ln.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.lastName = false;
        
        
    }
}

function validateEmail(){
    console.log(email);

    var e = email.value;

    if(e.match(/\S+@\S+\.\S+/)){

        valid(email);
        em.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.emailId = true;
        btnRelease();
     
        
    }
    else{
        invalid(email);
        em.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.emailId = false;
    }
}

function validateAge(){
    console.log(age);

    var a = age.value;

    if(a.match(/^0?1[89]|0?[2-9][0-9]$/)){

        valid(age);
        ag.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.passengerAge = true;
        btnRelease();
    
    }
    else{
     
        invalid(age);
        ag.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.passengerAge = false;
    }
    
}


function validatephoneNo(){
    console.log(phoneno);

    var p = phoneno.value;

    if(p.match(/^[0-9]{10}$/)){
        valid(phoneno);
        ph.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.phoneNumber = true;
        btnRelease();   
    }
    else{
        invalid(phoneno);
        ph.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.phoneNumber = false;
       
}
}


function invalid(element){

    element.style.borderColor = "red";
    element.style.borderWidth = "thin thick";

}

function valid(element){

    element.style.borderColor = "black";
    element.style.borderWidth = "thin thin";

}

/*Final Submit */

let fName1 = document.getElementById('firstName1');
let lName1 = document.getElementById('lastName1');
let age1 = document.getElementById('age1');

function finalSubmit(){
    passvalues();

    var fname1 = fName1.value;
    localStorage.setItem("firstName1",fname1);
    var lname1 = lName1.value;
    localStorage.setItem("lastName1",lname1);
    var a1 = age1.value;
    localStorage.setItem("age1",fname1);

    localStorage.setItem("flag",1);

    window.location.href="confirmation.html";



}




function text(){
    // localStorage.setItem("flag",1);
    document.getElementById("addpass").style.display = "block";
    document.getElementById("addpass1").style.display = "block";
    document.getElementById("addpass2").style.display = "block";
    document.getElementById("addpass3").style.display = "block";
    document.getElementById("inner2").style.display = "block";
    
    
}