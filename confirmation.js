let flight_id=localStorage.getItem("flid");
let fn2=localStorage.getItem("firstName2");
let ln2=localStorage.getItem("lastName2");
let ag2=localStorage.getItem("age2");
let em2=localStorage.getItem("email2");
let gen2=localStorage.getItem("gend");
let ph2=localStorage.getItem("phoneNo2");

let flag = localStorage.getItem("flag");

let fn1 = localStorage.getItem("firstName1");
let ln1 = localStorage.getItem("lastName1");
let ag1 = localStorage.getItem("age1");
let gen1 = localStorage.getItem("gend1");
/*final submit */



flight_id-=1;


console.log(flight_id);
console.log(fn2);
console.log(ln2);


let content='';

function display_value(data)
{

    var departure=new Date(data[flight_id].departTime)
    var arrival=new Date(data[flight_id].ArrivalTime)

    content +=  `
    <div class="details" >
        
        <div class="b">
            <h3> ${data[flight_id].flightNum}</h3>
            
            <h3>Origin: <span> ${data[flight_id].origin}</span></h3>
            
            <h3>Destination: <span> ${data[flight_id].destination}</span></h3>
            
            <h3>Departure: <span>${departure.toUTCString()} </span></h3>
            
            <h3>Arrival: <span>${arrival.toUTCString()} </span></h3>
            
            <h3>Price: <span> &#8377;${data[flight_id].price}</h3>
            
        </div>
        <div class="b">
        <h3> Passenger name: ${fn2} ${ln2}</h3>
        <h3>Age: ${ag2}</h3>
        <h3>Email: ${em2}</h3>
        <h3>Gender: ${gen2}</h3>
        <h3>Phone No: ${ph2}</h3><br>
        </div>
        
        </div>
        <button type="button" class="btn btn-danger" onclick="window.location.href='index.html'">Home</button>

`

document.querySelector("#card-detail").innerHTML = content;
}

if(flag == 0){
    fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data))
}

else{
    fetch('flights.json')
    .then(response => response.json())
    .then(data => display_value2(data))
   
}
function display_value2(data){
    var departure=new Date(data[flight_id].departTime)
    var arrival=new Date(data[flight_id].ArrivalTime)

    content +=  `
    <div class="details" >
        
        <div class="b">
            <h3> ${data[flight_id].flightNum}</h3>
            
            <h3>Origin: <span> ${data[flight_id].origin}</span></h3>
            
            <h3>Destination: <span> ${data[flight_id].destination}</span></h3>
            
            <h3>Departure: <span>${departure.toUTCString()} </span></h3>
            
            <h3>Arrival: <span>${arrival.toUTCString()} </span></h3>
            
            <h3>Price: <span> &#8377;${data[flight_id].price*2}</h3>
            
        </div>
        <div class="b">
        <h3><u> Passenger 1 </u></h3>
        <h3> Passenger name: ${fn2} ${ln2}</h3>
        <h3>Age: ${ag2}</h3>
        <h3>Email: ${em2}</h3>
        <h3>Gender: ${gen2}</h3>
        <h3>Phone No: ${ph2}</h3><br>


        <h3><u> Passenger 2 </u></h3>
        <h3> Passenger name: ${fn1} ${ln1}</h3>
        <h3>Age: ${ag1}</h3>
        <h3>Gender: ${gen1}</h3>
        </div>
        
        </div>
        <button type="button" class="btn btn-danger" onclick="window.location.href='index.html'">Home</button>
    

`

document.querySelector("#card-detail").innerHTML = content;

}






