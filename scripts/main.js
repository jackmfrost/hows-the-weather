window.onload = () => {
    function dailyForecastSkeletonGenerator() {
        let section = document.createElement("section");
        document.body.appendChild(section);

        //Building label
        let forecastLabel = document.createElement("div");
        forecastLabel.id = "forecast-label";
        section.appendChild(forecastLabel);

        let forecastText = document.createElement("p");
        forecastText.id = "forecast-text";
        forecastText.innerHTML = "24-Hour Forecast";
        forecastLabel.appendChild(forecastText);

        let seperator = document.createElement("hr");
        seperator.id = "forecast-sperator";
        forecastLabel.appendChild(seperator);   

        //Building daily forecast container
        let forecastContainer = document.createElement("div");
        forecastContainer.id = "dailyForecast-container";
        forecastContainer.className = "forecast-container";
        section.appendChild(forecastContainer);
        

        for (let i = 0; i <= 24; i++) {
            let todaysWeather = document.createElement("div");
            todaysWeather.className = "todaysWeather";

            forecastContainer.appendChild(todaysWeather);

            let time = document.createElement("p");
            time.className = "time";
            time.id= `time${i}`;
            
            let icon = document.createElement("img");
            icon.className = "icon";
            icon.id= `icon${i}`;

            let chance = document.createElement("p");
            chance.className = "chance";
            chance.id= `chance${i}`;

            let temp = document.createElement("p");
            temp.className = "temp";
            temp.id= `temp${i}`;

            todaysWeather.appendChild(time);
            todaysWeather.appendChild(icon);
            todaysWeather.appendChild(chance);
            todaysWeather.appendChild(temp);
        }
    }

    function weeklyForecastSkeletonGenerator() {
        let section = document.createElement("section");
        document.body.appendChild(section);

        //Building label
        let forecastLabel = document.createElement("div");
        forecastLabel.id = "wForecast-label";
        section.appendChild(forecastLabel);

        let forecastText = document.createElement("p");
        forecastText.id = "wForecast-text";
        forecastText.innerHTML = "Next 2 Days";
        forecastLabel.appendChild(forecastText);

        let seperator = document.createElement("hr");
        seperator.id = "wForecast-sperator";
        forecastLabel.appendChild(seperator);   
        
        let forecastContainer = document.createElement("div");
        forecastContainer.id = "weeklyForecast-container";
        forecastContainer.className = "forecast-container";
        section.appendChild(forecastContainer);
        

        for (let i = 1; i < 3; i++) {
            let weeksWeather = document.createElement("div");
            weeksWeather.className = "weeksWeather";
            weeksWeather.id = `weeksWeather${i}`;

            forecastContainer.appendChild(weeksWeather);

            let weekday = document.createElement("p");
            weekday.className = "weekday";
            weekday.id= `weekday${i}`;
            
            let wIcon = document.createElement("img");
            wIcon.className = "wIcon";
            wIcon.id= `wIcon${i}`;

            let wChance = document.createElement("p");
            wChance.className = "wChance";
            wChance.id= `wChance${i}`;

            let wTempLow = document.createElement("p");
            wTempLow.className = "wTempLow";
            wTempLow.id= `wTempLow${i}`;

            let wTempHigh = document.createElement("p");
            wTempHigh.className = "wTempHigh";
            wTempHigh.id= `wTempHigh${i}`;

            weeksWeather.appendChild(weekday);
            weeksWeather.appendChild(wIcon);
            weeksWeather.appendChild(wChance);
            weeksWeather.appendChild(wTempLow);
            weeksWeather.appendChild(wTempHigh);
        }
    }

    dailyForecastSkeletonGenerator();
    weeklyForecastSkeletonGenerator();
};

