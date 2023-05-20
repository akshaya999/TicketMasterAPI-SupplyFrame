var form = document.getElementById("searchForm")
form.addEventListener('submit', function(e) {
    e.preventDefault();
})

function display(d) {
    console.log(d)
    

    if(document.getElementById("myData")){
        document.getElementById("tabledisplay").removeChild(document.getElementById("myData"))
    }

    if(document.getElementById("noresult")){
        document.getElementById("mainbody").removeChild(document.getElementById("noresult"))
    }

    if (document.getElementById("cardiv")) {
        document.getElementById("card").removeChild(document.getElementById("cardiv"));
      }

    if(d["page"]["totalElements"]==0)
    {
        div2 = document.createElement("div")
        div2.className = "noresults container"
        div2.id = "noresult"
        paragraph1 = document.createElement("p")
        paragraph1.innerHTML = "No Result"
        div2.appendChild(paragraph1)
        document.getElementById("mainbody").appendChild(div2)
        return
    }

    d = d["_embedded"]
    

    console.log(d)
    console.log(d["events"][0])

    var division = document.createElement("div")
    division.id ="myData"
    division.setAttribute("class","container rounded")
    var table = document.createElement("table")
    table.id = "tableData"
    table.setAttribute("class","table table-striped table-light")
    // table.setAttribute("class","table table-striped")
    table.setAttribute("id","tableData")
    
    var tbody = document.createElement("tbody")

    var thead = document.createElement("thead")



    var row,cellA,cellB,cellC,cellD,cellE;

    row = thead.insertRow(-1);
    

    cellA = row.insertCell(0);
    cellA.className = "header"
    cellB = row.insertCell(1);
    cellB.className = "header"
    cellC = row.insertCell(2);
    cellC.className = "header"
    cellD = row.insertCell(3);
    cellD.className = "header"
    cellE = row.insertCell(4);
    cellE.className = "header"


    cellA.innerHTML = "Date"
    cellB.innerHTML = "Icon"
    cellC.innerHTML = "Event"
    cellD.innerHTML = "Genre"
    cellE.innerHTML = "Venue"

    // thead.appendChild(row);

    for (var i = 0; i < d["events"].length; i++){
        if(d["events"][i]["id"]==""){
            continue;
        }

        row = tbody.insertRow(-1);

        row.id = d["events"][i]["id"]



        cellA = row.insertCell(0);

        cellB = row.insertCell(1);
        cellC = row.insertCell(2);

        cellD = row.insertCell(3);

        cellE = row.insertCell(4);


        img = document.createElement("img")
        img.src = d["events"][i]['images'][0]['url']
        img.height = 100;
        img.width = 100;

        cellA.innerHTML = d["events"][i]["dates"]["start"]["localDate"]
        cellB.appendChild(img)
        button = document.createElement('button')
        button.innerHTML = d["events"][i]['name']
        button.id = row.id
        button.className = "btn btn-link"
        button.addEventListener("click",function(e){card_present(e)})
        cellC.appendChild(button)
        
        if(d["events"][i]['classifications'][0]['genre']){
          cellD.innerHTML = d["events"][i]['classifications'][0]['genre']["name"]
        }
        else{
          cellD.innerHTML = "N/A"
        }
        if(d["events"][i]["_embedded"]["venues"]){
            cellE.innerHTML = d["events"][i]["_embedded"]["venues"][0]["name"]
        }
        else{
            cellE.innerHTML = "N/A"
        }
    }

    table.appendChild(thead)
    table.appendChild(tbody)
    division.appendChild(table)
    document.getElementById("tabledisplay").appendChild(division);

    $('#tableData').DataTable();
}




function ipinfo(d) {

    fetch("https://ipinfo.io/?token=ff0a5f7fb71d3b").
    then(response => response.json()).
    then(response => response['loc']).
    then(response => {d["lat"] = response.split(",")[0];
                     d["long"]= response.split(",")[1];
                     d["geopoint"] = Geohash.encode(d["lat"],d["long"],7);
                     fetch(`http://localhost:8000/events/${d['keyword']}/${d['category']}/${d['distance']}/miles/${d["geopoint"]}`).
                     then(response => response.json().
                     then(response=>display(response)) )})
}


function hidfunc() {
    if(document.getElementById("AutoDetect").checked){
        document.getElementById("location").value = ""
        document.getElementById("location").disabled=true
    }
    else{
        document.getElementById("location").disabled=false
    }
}

function clear_output(){
  document.getElementById('location').disabled = false

  document.getElementById('keyword').value = ""
  document.getElementById('location').value = ""
  document.getElementById('distance').value = "10"
  document.getElementById('category').value = "Default"



  if(document.getElementById("myData")){
      document.getElementById("tabledisplay").removeChild(document.getElementById("myData"))
  }
  if(document.getElementById("noresult")){
      document.getElementById("mainbody").removeChild(document.getElementById("noresult"))
  }
  if(document.getElementById("cardiv")){
      document.getElementById("card").removeChild(document.getElementById("cardiv"))
  }


}




function card_present(e)
{   
    fetch(`http://localhost:8000/events_details/${e.target.id}`)
    .then(response => response.json())
    .then(response=>display_card(response))
}

function display_card(response) {
    if (document.getElementById("cardiv")) {
      document.getElementById("card").removeChild(document.getElementById("cardiv"));
    }
  
    const data = response;
  
    const eventDate = data.dates?.start?.localDate;
    const artists = data._embedded?.attractions?.map((attraction) => attraction.name).join(', ');
    const venueName = data._embedded?.venues?.[0]?.name;
    const genres = data.classifications?.map((classification) => classification.genre.name).join(', ');
    const ticketStatus = data.dates?.status?.code;


    let ticketStatusClass = "";

    switch (ticketStatus) {
      case "onsale":
        ticketStatusClass = "ticket-status-green";
        break;
      case "offsale":
        ticketStatusClass = "ticket-status-red";
        break;
      case "rescheduled":
        ticketStatusClass = "ticket-status-orange";
        break;
      default:
        ticketStatusClass = "ticket-status";
        break;
    }

    const ticketmasterLink = data.url;
    const seatmapLink = data.seatmap?.staticUrl || 'https://example.com/sample-seat-map.jpg';
  
    const cardDiv = document.createElement("div");
    cardDiv.id = "cardiv";
    cardDiv.classList.add("container");
  
    const content = `
      <h1>Event Details</h1>
      <hr>
      <div class="big-details">
      <div class="event-details">
        <p><strong>Date:</strong> ${eventDate}</p>
        <p><strong>Artist(s):</strong> ${artists}</p>
        <p><strong>Venue:</strong> ${venueName}</p>
        <p><strong>Genre(s):</strong> ${genres}</p>
        <p><strong>Ticket Status:</strong> <span class="${ticketStatusClass} rounded ">${ticketStatus}</span></p>
        <p><a href="${ticketmasterLink}" target="_blank">Ticketmaster Link</a></p>
      </div>
      <div class="seat-map">
        <img src="${seatmapLink}" alt="Seat Map">
      </div>
      </div>
    `;
  
    cardDiv.innerHTML = content;
  
    document.getElementById("card").appendChild(cardDiv);
    document.getElementById("belowcard").scrollIntoView();
  }
  

function test() {
    var d = {} 



    d['keyword'] = document.getElementById('keyword').value
    d['Location'] = document.getElementById('location').value
    d['distance'] = document.getElementById('distance').value
    d['category'] = document.getElementById('category').value

    if (d['distance']===""){
        d["distance"]="10";
    }

    if(d["keyword"]==""){
        return 
    }

    console.log(d)

    if(document.getElementById("AutoDetect").checked){
        ipinfo(d);
    }
    else{
        fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+d["Location"]+"&key=AIzaSyDkZC6qXgOktCpNrk9fa5VDDk8jmNqQ0w4").
        then(response => resp = response.json()).
        then(data => {
            d["lat"]=data["results"][0]["geometry"]["location"]['lat'].toString();
            d["long"]=data["results"][0]["geometry"]["location"]['lng'].toString();
            d["geopoint"] = Geohash.encode(d["lat"],d["long"],7);
            fetch(`http://localhost:8000/events/${d['keyword']}/${d['category']}/${d['distance']}/miles/${d["geopoint"]}`).
            then(response => response.json()).
            then(data => obj = data).
            then(()=>display(obj))

        }
        );
  }
}