var searchBar = document.querySelector("#searchInput");
var submitBtn = document.querySelector("#submitBtn");
var container1 = document.querySelector(".card-1");
var recentSearchVar = document.querySelector(".h2-element");
var container = document.querySelector(".container");

//Function saves the search bar input data into local storage.
function saveData() {
  var input = document.getElementById("searchInput").value;
window.localStorage.setItem("server", input);
console.log(input)
}

var savedSearch = localStorage.getItem("server");

//Adds an event listener to the search button 
submitBtn.addEventListener("click", function () {
  console.log("testing");
  
  //After the search button is clicked it calls the REST countries API
  fetch("http://api.openweathermap.org/data/2.5/forecast?q=" +searchBar.value + "&appid=229fb7ce25034ac6618ba416d71733f0&units=imperial")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);      
      //Dynamically creates a div to display our search bar inputs that have been saved to local storage and appended to its container
      var container3 = document.querySelector(".card-3");
      var searchLi = document.createElement('div');
      searchLi.setAttribute("id", "listItem");
      container3.append(searchBar.value);
      container3.append(searchLi);
      


      
        var tempDiv = document.createElement("div");
        tempDiv.setAttribute("id", "temp");
        var windDiv = document.createElement("div");
        windDiv.setAttribute("id", "wind");
        var humidityDiv = document.createElement("div");
        humidityDiv.setAttribute("id", "humidity");
        //There are no arrays key on objects only eg.data.current.condition.text
        tempDiv.textContent =
          "Temp: " + data.list[1].main.temp +"°F";
        windDiv.textContent = "Wind:" + data.list[1].wind.speed + "MPH";
     
        humidityDiv.textContent =
        "Humidity:" + data.list[1].main.humidity + "%";
        
        var container1 = document.querySelector(".card-1");
        container1.appendChild(tempDiv);
        // container2.appendChild(temp_cDiv);
        container1.appendChild(windDiv);
        // container2.appendChild(conditionDiv);
        container1.appendChild(humidityDiv);
      });
  }
);





// Function to clear search results
function clearAll(){
  document.getElementById("card1").innerHTML = "";
  document.getElementById("card2").innerHTML = "";
  document.getElementById('searchInput').value = "";
  
  //document.getElementById("card3").innerHTML = "";
};

var today = dayjs();
var currentHour = today.hour();
$('#currentDay').text(today.format('MMM D, YYYY HH:ss'));