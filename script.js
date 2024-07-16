const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f3080a8eaamsh373d66c50c9efccp154d4fjsnd5d317f5929a',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=' + city +'&u=c', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);
			const weatherData = response.current_observation;

			temp.innerHTML = weatherData.condition.temperature;
			feels_like.innerHTML = weatherData.wind.chill;
			humidity.innerHTML = weatherData.atmosphere.humidity;
			min_temp.innerHTML = response.forecasts[0].low;
			max_temp.innerHTML = response.forecasts[0].high;
			wind_speed.innerHTML = weatherData.wind.speed;
			wind_degrees.innerHTML = weatherData.wind.direction;
			pressure.innerHTML = weatherData.atmosphere.pressure;
			visibility.innerHTML = weatherData.atmosphere.visibility;
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});

getWeather("Kolkata");
