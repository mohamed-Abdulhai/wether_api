// variblss
let today = document.getElementById("today")
let todayNumber = document.getElementById("todayNumber")
let todayMounth = document.getElementById("todayMounth")
let locationCity = document.getElementById("locationCity")
let todayDgree = document.getElementById("todayDgree")
let todayImg = document.getElementById("todayImg")
let todayStatus = document.getElementById("todayStatus")
let wetnessDgree = document.getElementById("wetnessDgree")
let windDgree = document.getElementById("windDgree")
let WindDirection = document.getElementById("WindDirection")
// today end
let tomorrowDay = document.getElementById("tomorrowDay")
let tomorrowImg = document.getElementById("tomorrowImg")
let tomorrowDgree = document.getElementById("tomorrowDgree")
let tomorrowMineDgree = document.getElementById("tomorrowMineDgree")
let tomorrowStatus = document.getElementById("tomorrowStatus")
// tomorrow end
let afterTomorrowDay = document.getElementById("afterTomorrowDay")
let afterTomorrowImg = document.getElementById("afterTomorrowImg")
let afterTomorrowDgree = document.getElementById("afterTomorrowDgree")
let afterTomorrowMineDgree = document.getElementById("afterTomorrowMineDgree")
let afterTomorrowStatus = document.getElementById("afterTomorrowStatus")
// after tomorrow end
let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsOfYear= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
let apiRespos
let responsData 
let serchInput = document.getElementById("serchInput")
let city = "London"

let date = new Date()
// start

async function getApiWether() {
    apiRespos = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=28b141f45c464389a0f205056231408&q=${city}&days=3&aqi=no&alerts=no`)
    responsData = await apiRespos.json()
    displyToday()
    tomorrowDisply()
    afterTomorrowDisply()
}
getApiWether();


function displyToday() {
    today.innerHTML = daysOfTheWeek[date.getDay()]
    todayNumber.innerHTML = date.getDate()
    todayMounth.innerHTML = monthsOfYear[date.getMonth()]
    locationCity.innerHTML = responsData.location.name
    todayDgree.innerHTML = responsData.current.temp_c
    todayImg.setAttribute("src",`https:${responsData.current.condition.icon}`)
    todayStatus.innerHTML = responsData.current.condition.text
    wetnessDgree.innerHTML = responsData.current.humidity
    windDgree.innerHTML = responsData.current.wind_kph
    WindDirection.innerHTML = responsData.current.wind_dir
}
function tomorrowDisply() {
    tomorrowDay.innerHTML = daysOfTheWeek[date.getDay() + 1]
    tomorrowImg.setAttribute("src", `https:${responsData.forecast.forecastday[1].day.condition.icon}`)
    tomorrowDgree.innerHTML = responsData.forecast.forecastday[1].day.maxtemp_c
    tomorrowMineDgree.innerHTML = responsData.forecast.forecastday[1].day.mintemp_c
    tomorrowStatus.innerHTML = responsData.forecast.forecastday[1].day.condition.text
}
function afterTomorrowDisply() {
    afterTomorrowDay.innerHTML = daysOfTheWeek[date.getDay() + 2]
    afterTomorrowImg.setAttribute("src", `https:${responsData.forecast.forecastday[2].day.condition.icon}`)
    afterTomorrowDgree.innerHTML = responsData.forecast.forecastday[2].day.maxtemp_c
    afterTomorrowMineDgree.innerHTML = responsData.forecast.forecastday[2].day.mintemp_c
    afterTomorrowStatus.innerHTML = responsData.forecast.forecastday[2].day.condition.text
}

serchInput.addEventListener("keyup", function () {
    city = serchInput.value
    getApiWether()
    
})



