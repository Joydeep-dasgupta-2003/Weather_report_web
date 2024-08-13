const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f3080a8eaamsh373d66c50c9efccp154d4fjsnd5d317f5929a',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	
	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			const weatherData = response.current;
			
			temp.innerHTML = weatherData.temp_c;
			feels_like.innerHTML = weatherData.feelslike_c;
			humidity.innerHTML = weatherData.humidity;
			wind_speed.innerHTML = weatherData.wind_kph;
			wind_degrees.innerHTML = weatherData.wind_degree;
			pressure.innerHTML = weatherData.pressure_mb;
			visibility.innerHTML = weatherData.vis_km;
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});

getWeather("Kolkata");
