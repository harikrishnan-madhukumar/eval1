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

        fn.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.firstName = true;
        btnRelease();

    }
    else{
    
        fn.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.firstName = false;
    }
}


function validatelName(){

    console.log(lName);

    var l = lName.value;

    if(l.match(/^[a-zA-Z]{0,20}$/)){
        console.log('Name valid');

        ln.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.lastName = true;
    }
    else{
   
         
        ln.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.lastName = true;
        btnRelease();
    }
}

function validateEmail(){
    console.log(email);

    var e = email.value;

    if(e.match(/\S+@\S+\.\S+/)){
        em.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.emailId = true;
        btnRelease();
     
        
    }
    else{

        em.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.emailId = false;
    }
}

function validateAge(){
    console.log(age);

    var a = age.value;

    if(a.match(/^0?1[89]|0?[2-9][0-9]$/)){
        ag.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.passengerAge = true;
        btnRelease();
    
    }
    else{
     
   
        ag.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.passengerAge = false;
    }
    
}


function validatephoneNo(){
    console.log(phoneno);

    var p = phoneno.value;

    if(p.match(/^[0-9]{10}$/)){
        ph.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.phoneNumber = true;
        btnRelease();   
    }
    else{
     
        ph.innerHTML = '<i class="uil uil-times-circle"></i>';
        inputValidator.phoneNumber = false;
       
}
}


