




 const apiKey = "0e5ae72e11c25279ab0240de4146d052";

const submitBtn = document.querySelector(".navbar button");

const weatherIcon = document.querySelector(".Weather-icon");

  async function getWeather(e) {
   
    // -----geting the data from api---///


    const input = document.querySelector(".navbar input");
    const city = input.value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;   

    const response = await fetch(api);
    const data = await response.json();

console.log(data);




// showing the data in box----//




const cityName = document.querySelector("#city-name");
cityName.innerHTML = `
<h4 class="my-0 fw-normal " id="city-name">Weather In ${data.name}</h4>

`


document.querySelector("#my-city").innerHTML = ` <h3 id="my-city">${data.name}, ${data.sys.country}</h3>`
document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + "°C";
document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
document.querySelector("#Wind-speed").innerHTML = data.wind.speed + " km/h";


document.querySelector(".Weather-box").style.display = "block";
input.value = "";



if (data.weather[0].main == "Clouds") {
  weatherIcon.src = "images/clouds.png";
} else if(data.weather[0].main == "Drizzle"){
  weatherIcon.src = "images/drizzle.png";

}else if(data.weather[0].main == "Clear"){
  weatherIcon.src = "images/clear.png";

}else if(data.weather[0].main == "Mist"){
  weatherIcon.src = "images/mist.png";

}else if(data.weather[0].main == "Snow"){
  weatherIcon.src = "images/snow.png";

}else if(data.weather[0].main == "Rain"){
  weatherIcon.src = "images/rain.png";

}else{
  weatherIcon.src = "";

}





  }





submitBtn.addEventListener("click", async(e)=>{
    e.preventDefault();
   
   await getWeather();
  

})



