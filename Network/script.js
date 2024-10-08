//met 1 
document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    console.log(city)
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=a03cf2cabcaa4353971164038230401&q=${city}&days=5&aqi=no&alerts=no`, {
        method: 'GET',
        headers: {
            "X-RapidAPI-Key": "8bd9d6c688msh68d31c229fdad4ap11c13ajsn87b83ab7f99a",
            "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"  
        }
    })
    .then(response => response.json())
    .then(data => {
      
        const location = data.location.name;
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;

        document.getElementById('weather-info').innerHTML = `
            <h3>Weather for ${location}</h3>
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${condition}</p>
        `;
    })
    .catch(error => {console.error('Error:', error);});
})


