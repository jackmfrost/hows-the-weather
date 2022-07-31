let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
    
    function displayData(data) {
        console.log(data);
    
        //Getting locationInfo-container contents
        let location = document.getElementById("location");
        let currentTemp = document.getElementById("currentTemp");
        let currentCondition = document.getElementById("currentCondition");
        let highAndLow = document.getElementById("highAndLow");
    
        //Setting locationInfo-container contents
        location.innerHTML = data.location.name;
        currentTemp.innerHTML = `${Math.round(data.current.temp_f)}°`;
        currentCondition.innerHTML = data.current.condition.text;
        highAndLow.innerHTML = `H:${Math.round(data.forecast.forecastday[0].day.maxtemp_f)}°  L:${Math.round(data.forecast.forecastday[0].day.mintemp_f)}°`;
    
        //-------------------------------------------------------------------------------------------------//
    
        //Displaying forecast-container contents
        let presentDay = 0;                                                         //Present Day
        let presentTime = (data.current.last_updated).substring(11,13);             //Present Time
        if (presentTime.substring(0,1) == 0) {
            presentTime = presentTime.substring(1,2);
        }
        let boundary = document.getElementsByClassName("todaysWeather").length;     //HAHAHAHAHAHAHA
    
        for (let i = 0; i < boundary; i++) {
            //Getting forecast-container contents
            let time = document.getElementById(`time${i}`);
            let icon = document.getElementById(`icon${i}`);
            let chance = document.getElementById(`chance${i}`);
            let temp = document.getElementById(`temp${i}`);
            console.log(` Hour = ${presentTime}`);
    
            //Current hour forecast displayed as "now", all proceeding forecast display their hour 
            if (i == 0) {
                time.innerHTML = "Now";
                icon.src = data.current.condition.icon;
                temp.innerHTML = `${Math.floor(data.current.temp_f)}°`;
            }
            else {
                if (presentTime == 0) {
                    time.innerHTML = "12 AM";
                }
                else if (presentTime == 12) {
                    time.innerHTML = "12 PM";
                }
                else if (presentTime < 12) {
                    time.innerHTML = `${presentTime} AM `;
                }
                else {
                    time.innerHTML = `${presentTime % 12} PM`;
                }
    
                //Icon setting
                icon.src = data.forecast.forecastday[presentDay].hour[presentTime].condition.icon; 
                icon.title = data.forecast.forecastday[presentDay].hour[presentTime].condition.text;
    
                //Chance of precipitation setting
                let precipitation = false;
                let rainChance = data.forecast.forecastday[presentDay].hour[presentTime].chance_of_rain;
                let snowChance = data.forecast.forecastday[presentDay].hour[presentTime].chance_of_snow;
    
                if (rainChance > 0)
                {
                    chance.innerHTML = `${rainChance}%`;
                    precipitation = true;
                }
                else if (snowChance > 0) {
                    chance.innerHTML = `${snowChance}%`;
                    precipitation = true;
                }
    
                //Temperature setting
                temp.innerHTML = `${Math.floor(data.forecast.forecastday[presentDay].hour[presentTime].temp_f)}°`;
                if (precipitation) {
                    temp.style.marginTop = "3.1px";
                }
    
                //Increment hour if presentTime is less than 23, if it's greater we increment to the next day
                if (presentTime < 23) {
                    presentTime++;
                }
                else {
                    presentTime = 0;
                    presentDay++;
                }
            }
        }
    
        //-------------------------------------------------------------------------------------------------//
    
        for (let i = 1; i < 3; i++) {
    
            //Getting forecast-container contents
            let weekday = document.getElementById(`weekday${i}`);
            let wIcon = document.getElementById(`wIcon${i}`);
            let wChance = document.getElementById(`wChance${i}`);
            let wTempLow = document.getElementById(`wTempLow${i}`);
            let wTempHigh = document.getElementById(`wTempHigh${i}`);
    
            weekday.innerHTML = new Date(data.forecast.forecastday[i].date)
                                .toString()
                                .substring(0,3);
    
            wIcon.src = data.forecast.forecastday[i].day.condition.icon;
    
            let precipitation = false;
            let rainChance = data.forecast.forecastday[i].day.daily_chance_of_rain;
            let snowChance = data.forecast.forecastday[i].day.daily_chance_of_snow;
    
            if (rainChance > 0)
            {
                wChance.innerHTML = `${rainChance}%`;
                precipitation = true;
            }
            else if (snowChance > 0) {
                wChance.innerHTML = `${snowChance}%`;
                precipitation = true;
            }
    
            wTempLow.innerHTML = `Low: ${data.forecast.forecastday[i].day.mintemp_f}°`;
            wTempHigh.innerHTML = `High: ${data.forecast.forecastday[i].day.maxtemp_f}°`;
        }
    }
    

    let city = document.getElementById("searchLocation");

    //Calling weatherapi
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=b144387a316747d9b07163114220307&q=${city.value}&days=7&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => displayData(data));
    
});