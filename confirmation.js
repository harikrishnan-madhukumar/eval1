let flight_id=localStorage.getItem("flid");
let val=localStorage.getItem("textvalue");
let val1=localStorage.getItem("textvalue1");
let val2=localStorage.getItem("textvalue2");
let val3=localStorage.getItem("textvalue3");

flight_id-=1;


console.log(flight_id);
console.log(val);
console.log(val1);


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
        <h3> Passenger name: ${val} ${val1}</h3>
        <h3>Age: ${val2}</h3>
        <h3>Email: ${val3}</h3>
        </div>

        </div>


`
document.querySelector("#card-detail").innerHTML = content;
}




fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data))