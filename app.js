const url = "https://api.openweathermap.org/data/2.5/weather?q=";
// let cityname= 'Karachi';
const apikey = "1df1779b66d82802e067653a7057ac0c";

(async function () {
  const search1 = document.getElementById("searchh");
  const button = document.getElementById("button");
  const temp = document.getElementById("temp");
  const humidity = document.getElementById("humid");
  const winds = document.getElementById("wind");
  const pic = document.getElementById("picture");

  button.addEventListener("click", async () => {
    let cityname = search1.value;
    console.log(cityname);

    try {
      const response = await fetch(url + cityname + "&appid=" + apikey);
      const result = await response.json();
      // const result = await response.text();
      console.log(result);

	temp.innerText = (result.main.temp-273.16).toFixed(2);
  winds.innerText = (result.wind.speed+" Km/h");
  humidity.innerText = result.main.humidity+"%";

  if(result.weather[0].description == 'smoke')
  {
    pic.src = 'smoke-icon.png';
  }
  else if(result.weather[0].description == 'scattered clouds')
  {
    pic.src = 'scattered-clouds.png';
  }
  else if(result.weather[0].description == 'clear sky')
  {
    pic.src = 'clear-sky.jpg';
  }
  else if(result.weather[0].description == 'few clouds')
  {
    pic.src = 'few clouds.jpg';
  }
  else if(result.weather[0].description == 'fog')
  {
    pic.src = 'fog.jpg';
  }



    } catch (error) {
      alert(error);
    }
  });

})();
