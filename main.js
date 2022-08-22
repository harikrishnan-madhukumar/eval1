
/*
function display_cards(flight_det){
    const number_of_flights = Object.keys(flight_det).length; //number of flights in the json
    //console.log(number_of_flights);
    let content = '';
    for(let count=0;count<number_of_flights;count++){
        let flight = flight_det[count];

        //let flight_num = new Date(flight.flightNum)
        const departure = new Date(flight.departTime)
        const arrival = new Date(flight.ArrivalTime)
        //let flight_from = new Date(flight.origin)
        //let flight_to = new Date(flight.destination)
        //let fare = new Date(flight.price)

        content +=  `
        <div class="card" >
            <div class="card-body">
                <h6>Flight Number</h5>
                <p class="Flight-number">${flight_det[count]['flightNum']}</p>
                <h6>Origin</h5>
                <p class="origin">${flight_det[count]['origin']}</p>
                <h6>Destination</h5>
                <p class="destination">${flight_det[count]['destination']}</p>
                <h6>Departure</h5>
                <p class="departure-time">${departure.toUTCString()}</p>
                <h6>Arrival</h5>
                <p class="arrival-time">${arrival.toUTCString()}</p>
                <h6>Price</h5>
                <p class="price">&#8377;${flight_det[count]['price']}</p>
                <button type="button" class="btn btn-primary" id="flight${flight_det[count]['id']}">Proceed</button>
            </div>
        </div>

    `

    }
    document.querySelector("#card-collection").innerHTML = content;
}

fetch('flights.json')
.then(response => response.json())
.then(data => display_cards(data));
*/





let f_details = fetch("flights.json");

f_details.then(response=>response.json()).then(data=>{


    for(let i = 0; i<data.length; i++) {

        let obj = data[i];
        var container = document.createElement("div");
        container.className="card text-white bg-dark mb-3";
        container.style.width="30rem";

        var hd = document.createElement("div");
        hd.className = "card-header";

        var hd_h4 = document.createElement("h4");
        hd_h4.innerHTML = obj.flightNum+" "+obj.origin+"-to-"+obj.destination;


        
        var bd = document.createElement("div");
        bd.className = "card-body";

        var d_h5 = document.createElement("h5");
        d_h5.className = "card-title";

        const d_time = new Date(obj.departTime);
        d_h5.innerHTML = "Departure Time: "+d_time.toUTCString();

        var a_h5 = document.createElement("h5");
        a_h5.className = "card-title";

        const a_time = new Date(obj.ArrivalTime);
        a_h5.innerHTML = "Arrival Time: "+a_time.toUTCString();



        var price = document.createElement("h5");
        price.className = "card-title";
        price.innerHTML = "Price: "+obj.price;


        var book = document.createElement("a");
        book.className = "btn btn-primary";
        book.innerHTML = "Book";
        book.style.color = "white";
        book.setAttribute('id',obj.id);
        book.setAttribute('onClick','openpage(this.id)');


        container.appendChild(hd);
        hd.appendChild(hd_h4);
        container.appendChild(bd);
        
        bd.appendChild(d_h5);
        bd.appendChild(a_h5);
        bd.appendChild(price);
        bd.appendChild(book);

        document.getElementById("flight-cards").appendChild(container);





    }


});

function openpage(id)
{
    console.log(id);
    var flnum = id;
    localStorage.setItem("flid", flnum);
    window.location.href = "form_1.html";
}


/*

let flight_details = fetch("flights.json");
flight_details.then(response => response.json()).then(data=>{ 
            
    


    for(let i = 0; i < data.length; i++) {
        let obj = data[i];
        var box = document.createElement("div");
        box.className="card border-dark mb-3";
        box.style.width="30rem";
        var flno =document.createElement("div");
        flno.className="card-header";
        var flnoh3=document.createElement("h3");
        flnoh3.innerHTML=obj.flightNum+" "+obj.origin+" -> "+obj.destination;

        var detail=document.createElement("div");
        detail.className="card-body text-dark"
        var depttime=document.createElement("h5");
        depttime.className="card-title";
        const dtime=new Date(obj.departTime);
        depttime.innerHTML="Deaparture Time: "+dtime.toUTCString();
        var arrivetime=document.createElement("h5");
        arrivetime.className="card-title";
        const atime=new Date(obj.ArrivalTime);
        arrivetime.innerHTML="Arrival Time: "+atime.toUTCString();
        
        var price=document.createElement("h5");
        price.className="card-title"
        price.innerHTML="Price: "+obj.price;

        var proceed=document.createElement("a");
        proceed.className="btn btn-primary";
        proceed.innerHTML="Proceed";
        proceed.style.color="white";
        
        
        box.appendChild(flno);
        flno.appendChild(flnoh3);
        box.appendChild(detail);
        detail.appendChild(depttime);
        detail.appendChild(arrivetime);
        detail.appendChild(price);
        detail.appendChild(proceed);

        document.getElementById("flight-cards").appendChild(box);
        //document.getElementById("flight-cards").style.flex-direction="row";

    }

});


*/