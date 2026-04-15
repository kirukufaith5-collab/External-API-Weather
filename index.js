// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
//1. fetch alerts gfor a given state
 async function fetchWeatherAlerts(state) {
    try {
        const response = await fetch( `https://api.weather.gov/alerts/active?area=${state}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather alerts:", error);
        throw error;
    }

}

//display the alerts
function displayWeatherAlerts(data) {
    const Container = document.getElementById("#weather-container");
 Container.innerHTML = ""; 
 const summary = document .createElement("h2");
 const alert = data.features.length;
    summary.textContent = `${data.title}: ${alertcount}`;
    Container.appendChild(summary);
     
    const list = document.createElement("ul");

    //loop through each "feature"(alert )in the array
    data.features.forEach((feature) => {
        const listItem = document.createElement("li");

  // access the headline inside properties
        listItem.textContent = feature.properties.headline;
        list.appendChild(listItem);
        //add the full list to our container
        Container.appendChild(list);
    }
    function displayError(message) {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = message;
        errorMessage.classList.add("error");
    } 

    function showLoadingSpinner() {
        spinnerElement.style.display = "block";
    }
    function hideLoadingSpinner(){
        spinnerElement.style.display = "none";
    }
