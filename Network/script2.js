async function fet(city) {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=a03cf2cabcaa4353971164038230401&q=${city}&days=5&aqi=no&alerts=no`;

    try {
        const response = await fetch(url, { method: 'GET' });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

async function getter() {
    try {
        let city = document.getElementById('city-input').value;
        console.log(`Fetching weather for city: ${city}`);

        let response = await fet(city);

        if (!response.ok) {
            city = city.replace(/\s+/g, '');
            response = await fet(city);
        }

        const data = await response.json();
        const location = data.location.name;
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;

        document.getElementById('weather-info').innerHTML = `
            <h3>Weather for ${location}</h3>
            <p>Temperature: ${temperature}°C</p>
            <p>Condition: ${condition}</p>`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('weather-info').innerHTML = '<p>Failed to load weather data. Please try again later.</p>';
    }
}

document.getElementById('fetch-button').addEventListener('click', getter);
