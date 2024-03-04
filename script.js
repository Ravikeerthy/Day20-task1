// Using async function to fetch api
async function calling(){
    let api = await fetch("https://data.covid19india.org/v4/min/data.min.json");
    let data = await api.json();
    console.log(data);
    
    let mainData = data["TT"];
    console.log(mainData);   // Checking the fetched data

    let list = Object.keys(data);

    list.forEach((stateName)=>{ // Using the FOREACH method calls a each element in the dropdown option
        let  opt = document.createElement("option");
        opt.textContent = stateName;
        opt.value = stateName;
        document.getElementById("menudis").appendChild(opt);
    })
}
calling()

function displayDetails(){
    let getInput = document.getElementById("menudis").value; // Get the selected state

    let url = fetch("https://data.covid19india.org/v4/min/data.min.json"); // Fetching the Covid api

    url.then((resolve)=> resolve.json())

    .then((data)=>{
        console.log(data);

        let display = data[getInput].total;     
        let population = data[getInput].meta;

        console.log(`The total population of ${getInput} : ${population.population}`);   
        console.log(display);
        
        // Getting the data from api

        let totPopulation = population.population;

        let confirmed = display.confirmed;

        let recovered = display.recovered;

        let affected = display.deceased;

        let vaccine = display.vaccinated1 + display.vaccinated2;

        let testcase = display.tested;

        // Display the data in card with help of DOM
        var div = document.createElement("div");
        div.innerHTML = `<div class="d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
                <div class="card-body">
          <h3 class="card-title"><strong>${getInput}</strong></h3>
          <p class="card-text"> Total Population : ${totPopulation}</p>
          <p class="card-text"> Total Confirmed : ${confirmed}</p>
          <p class="card-text"> Total Recovered : ${recovered}</p>
          <p class="card-text"> Total Affected : ${affected}</p>
          <p class="card-text"> Total Vaccine : ${vaccine}</p>
          <p class="card-text"> Total Test Cases : ${testcase}</p>
          
          
        </div>
      </div>
      </div>`;    
        // appending the element to display in UI
      document.getElementById("resultBox").append(div);
        
    })


}




