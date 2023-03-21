var searchBar = document.querySelector("#searchInput");
var submitBtn = document.querySelector("#submitBtn");
var container1 = document.querySelector(".card-1");

submitBtn.addEventListener("click", function () {
    console.log("testing");

    unction capitalWeather(countryData) {
        var capital = countryData[0].capital[0];
        //Requires API key that can be generated on https://www.weatherapi.com/
        fetch(
          "https://api.weatherapi.com/v1/current.json?key=35d7f63e5325473788e112056231603&q=" +
            capital
        )
          .then(function (response) {
            console.log(response);
            return response.json();
          })
          .then(function (data) {
            console.log(data, "Capital Weather");
            var uvDiv = document.createElement("div");
            uvDiv.setAttribute("id", "uv");
            var temp_fDiv = document.createElement("div");
            temp_fDiv.setAttribute("id", "temp_f");
            var temp_cDiv = document.createElement("div");
            temp_fDiv.setAttribute("id", "temp_c");
            var conditionDiv = document.createElement("div");
            conditionDiv.setAttribute("id", "condition");
            var humidityDiv = document.createElement("div");
            humidityDiv.setAttribute("id", "humidity");
            //There are no arrays key on objects only eg.data.current.condition.text
            temp_fDiv.textContent = "The temperature in " + capital + 
              " is " + data.current.temp_f + " °F " +
              "and " + data.current.temp_c + "°C";
            uvDiv.textContent =
              "The UV index in " + capital + " is " + data.current.uv;
            conditionDiv.textContent = "The current condition in " +
              capital + " is " + data.current.condition.text;
            humidityDiv.textContent =
              "The current humidity in " + capital + " is " +
               data.current.humidity + "%";
            var container2 = document.querySelector(".card-2");
            container2.appendChild(temp_fDiv);
            container2.appendChild(temp_cDiv);
            container2.appendChild(uvDiv);
            container2.appendChild(conditionDiv);
            container2.appendChild(humidityDiv);
          });
      }
    });
    
    // Function to clear search results
    function clearAll(){
      document.getElementById("card1").innerHTML = "";
      document.getElementById("card2").innerHTML = "";
      //document.getElementById("card3").innerHTML = "";
    };  