const APIKey = '90fff982830fd36853b98512730df8e7'

async function getInfo(cityName, stateCode){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},US-${stateCode},US&appid=${APIKey}&units=imperial`)
    if(res.ok){
        const data = await res.json()
        console.log(data)
        return data
    } else window.alert('Bad Request')

    
}

// async function getMap(cityName, stateCode) {
//     const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${cityName},${stateCode}&zoom=14&size=400x400&key=${GMApiKey}&signature=${GMSig}`;
//     const locationMap = document.getElementById('locationMap');
//     locationMap.src = mapUrl;
// }


async function getForecast(cityName, stateCode) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateCode},US&appid=${APIKey}&units=imperial`)
    if(res.ok){
        const data = await res.json()
        // console.log(data)
        return data

    } else window.alert('Bad Request')
}


async function populateInfo(e){
    const cityName = document.getElementById('city').value
    const stateCode = document.getElementById('state').value
    
    const result = await getInfo(cityName, stateCode)
    const sunrise = new Date(result.sys.sunrise).toLocaleTimeString();
    const sunset = new Date(result.sys.sunset).toLocaleTimeString();
    const feelsLike = result.main.feels_like;
    const humidity = result.main.humidity;
    const temp = result.main.temp;
    const tempHigh = result.main.temp_max;
    const tempLow = result.main.temp_min;
    const weatherType = result.weather[0].main;
    const weatherDesc = result.weather[0].description;
    const windDirection = result.wind.deg;
    const windSpeed = result.wind.speed;
    const highLow = `High: ${tempHigh}º | Low: ${tempLow}º`
    const sunUpDown = `Sunrise: ${sunrise} | Sunset: ${sunset}`


    const sunInfo = document.getElementById('sunUp-sunDown')
    const tempInfo = document.getElementById('currentTemp')
    const highLowInfo = document.getElementById('highLowID')
    const weatherDescInfo = document.getElementById('weatherDescMain')
    const feelsLikeInfo = document.getElementById('feelsLikeID')
    const humidityInfo = document.getElementById('humidity')
    const wind1Info = document.getElementById('windD')
    const wind2Info = document.getElementById('windS')
    
    sunInfo.textContent = sunUpDown
    tempInfo.textContent = `${temp}º`
    weatherDescInfo.textContent = weatherDesc
    highLowInfo.textContent = highLow
    feelsLikeInfo.textContent = `${feelsLike}º`
    humidityInfo.textContent = `${humidity}%`
    wind1Info.textContent = degToCompass(windDirection)
    wind2Info.textContent = `${windSpeed} mph`

    updateBkgSource(weatherType)
}

async function forecastInfo(e){
    const cityName = document.getElementById('city').value
    const stateCode = document.getElementById('state').value

    const results = await getForecast(cityName, stateCode)
    console.log(results, "test")
    const dayNext = new Date (results.list[0].dt).toDateString()
    const tempNext = results.list[0].main.temp
    const descNext = results.list[0].weather[0].main

    const nextTempInfo = document.getElementById('nextTemp')
    const dayNextInfo = document.getElementById('nextTemp')
    const descNextInfo = document.getElementById('nextDesc')
    nextTempInfo.textContent = tempNext
    descNextInfo.textContent = nextDesc
 
        
    const day1 = new Date(results.list[3].dt).toDateString()
    const desc1 = results.list[3].weather[0].main
    const desc1Info = document.getElementById('day1')
    desc1Info.textContent = desc1
    
    const tempH1 = results.list[3].main.temp_max
    const tempL1 = results.list[3].main.temp_min
    const comingTemp1 = `High: ${tempH1}º | Low: ${tempL1}º`
        
    const day2 = new Date(results.list[11].dt).toDateString()
    const desc2 = results.list[11].weather[0].main
    const tempH2 = results.list[11].main.temp_max
    const tempL2 = results.list[11].main.temp_min
    const comingTemp2 = `High: ${tempH2}º | Low: ${tempL2}º`
        
    const day3 = new Date(results.list[19].dt).toDateString()
    const desc3 = results.list[19].weather[0].main
    const tempH3 = results.list[19].main.temp_max
    const tempL3= results.list[19].main.temp_min
    const comingTemp3 = `High: ${tempH3}º | Low: ${tempL3}º`

    const day4 = new Date(results.list[27].dt).toDateString()
    const desc4 = results.list[27].weather[0].main
    const tempH4 = results.list[27].main.temp_max
    const tempL4= results.list[27].main.temp_min
    const comingTemp4 = `High: ${tempH4}º | Low: ${tempL4}º`
        
    const day5 = new Date(results.list[35].dt).toDateString()
    const desc5 = results.list[35].weather[0].main
    const tempH5 = results.list[35].main.temp_max
    const tempL5= results.list[35].main.temp_min
    const comingTemp5 = `High: ${tempH5}º | Low: ${tempL5}º`

}

document.querySelector('form').addEventListener('submit', async (e)=> {
    e.preventDefault();
    await populateInfo();
    // await getMap(cityName, stateCode);
    await forecastInfo()
})



function updateBkgSource(weatherCondition){
    const video = document.getElementById('weatherVideo')
    const mainResult = document.getElementById('main-result')
    const weatherIcon = document.getElementById('icon')

    switch (weatherCondition){
        case 'Rain':
           video.src = './static/images/rain.mp4' 
           mainResult.classList.add('rain-bg')
           weatherIcon.src = "./static/images/rain.png"
           break
        case 'Thunderstorm':
           video.src = './static/images/thunder.mp4'
           mainResult.classList.add('thunder-bg')
           weatherIcon.src = "./static/images/nt_tstorms.png" 
           break
        case 'Clear':
            video.src="./static/images/clear.mp4"
            mainResult.classList.add('clear-bg')
            weatherIcon.src = "./static/images/clear.png"
            break
        case 'Clouds':
            video.src="./static/images/cloud1.mp4"
            mainResult.classList.add('clouds-bg')
            weatherIcon.src = "./static/images/cloudy.png"
            break
        case 'Snow':
            video.src="./static/images/snow.mp4"
            mainResult.classList.add('snow-bg')
            weatherIcon.src = "./static/images/snow.png"
            break
        case 'Haze':
            video.src="./static/images/haze.mp4"
            mainResult.classList.add('haze-bg')
            weatherIcon.src = "./static/images/hazy.png"
            break
        default:
            video.src='./static/images/earth.mp4'
            mainResult.classList.add('default-bg')
            weatherIcon.src = "./static/images/default.jpg"
    }

    // switch (weatherCondition) {
    //     case 'Rain':
    //        mainResult.classList.add('rain-bg')
    //        break
    //     case 'Clear':
    //         mainResult.classList.add('clear-bg')
    //         break
    //     case 'Clouds':
    //         mainResult.classList.add('clouds-bg')
    //         break
    //     case 'Snow':
    //         mainResult.classList.add('snow-bg')
    //         break
    //     case 'Haze':
    //         mainResult.classList.add('haze-bg')
    //         break
    //     default:
    //         mainResult.classList.add('default-bg')
    //     }
}

function updateMainImg(weatherCondition){
    const mainImg = document.getElementById('mainBkgdImg')

}

function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

//.toLocalTimeString() = converts unix UTC timestamp to local time (e.g. 6:45 AM)

//.toLocalDateString() = converts unix UTC timestamp to date as displayed locally (e.g., 7/28/2023)
// let sunrise = new Date(1690546841)
// console.log(sunrise.toLocaleTimeString())

// let Testsunset = new Date(1690771415)
// console.log('Sunset: ' + sunset.toLocaleTimeString())

