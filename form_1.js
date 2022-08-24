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
submit2.disabled = true;



function btnRelease(){

    console.log("Entered Button release fn");

    if(inputValidator.firstName == true && inputValidator.lastName == true && inputValidator.passengerAge == true && inputValidator.emailId == true && inputValidator.phoneNumber == true){
    
        
        
        submit.removeAttribute('disabled');
        submit2.removeAttribute('disabled');
        console.log("Submit button");

    }
    else{
        submit.disabled = 'true';
        submit2.disabled = 'true';
        
        console.log('Submit button not active');
    }
}



// Validation Functions


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
        fn.innerHTML = '<i class="uil uil-times-circle"></i>Invalid First Name';
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
        ln.innerHTML = '<i class="uil uil-times-circle"></i>Invalid First Name';
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
        em.innerHTML = '<i class="uil uil-times-circle"></i>Invalid Email';
        inputValidator.emailId = false;
    }
}

function validateAge(){
    console.log(age);

    var a = age.value;
    
    if(a.match(/^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/)){
        

        valid(age);
        ag.innerHTML = '<i class="uil uil-check-circle"></i>';
        inputValidator.passengerAge = true;
        btnRelease();
    
    }
    else{
     
        invalid(age);
        ag.innerHTML = '<i class="uil uil-times-circle"></i>Invalid Age';
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
        ph.innerHTML = '<i class="uil uil-times-circle"></i>Invalid Phone Number';
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


// Initial Submit

function passvalues()
        {
            // Fetching data from local storage

            var fname=document.getElementById("firstName").value;
            localStorage.setItem("firstName2",fname); 
            var lname=document.getElementById("lastName").value;
            localStorage.setItem("lastName2",lname);
            var a=document.getElementById("age").value;
            localStorage.setItem("age2",a);
            var e=document.getElementById("email").value;
            localStorage.setItem("email2",e);
            var ph=document.getElementById("phoneNo").value;
            localStorage.setItem("phoneNo2",ph);

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



/*Final Submit */

let fName1 = document.getElementById('firstName1');
let lName1 = document.getElementById('lastName1');
let age1 = document.getElementById('age1');


function finalSubmit(){
    passvalues();

    // Fetching data from local storage

    var fname1 = fName1.value;
    localStorage.setItem("firstName1",fname1);
    var lname1 = lName1.value;
    localStorage.setItem("lastName1",lname1);
    var a1 = age1.value;
    localStorage.setItem("age1",a1);

    var radios = document.getElementsByName('gender1');
            for (var radio of radios)
            {
                if (radio.checked) {
                    console.log(radio.value);
                    localStorage.setItem("gend1",radio.value); 
                    break;
                }
            }
    

    localStorage.setItem("flag",1);

    window.location.href="confirmation.html";



}






function text(){
    
    document.getElementById("addpass").style.display = "block";
    document.getElementById("addpass1").style.display = "block";
    document.getElementById("addpass2").style.display = "block";
    document.getElementById("addpass3").style.display = "block";
    document.getElementById("inner2").style.display = "block";


    document.getElementById('submit').style.display = "none";
    
    
}