const weather = document.querySelector('#weather')
const API_KEY = '5a750672400d9209bd4ec593cb0b4853'
const temperature = weather.querySelector('span:first-child')
const city = weather.querySelector('span:last-child')
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)



function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const API_ADRESS = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(API_ADRESS).then((API)=>API.json()).then((data)=>{
        city.innerText = data.name
        temperature.innerText = `${Math.round(data.main.temp)}° @`
    })
}
function onGeoError(){
    alert('error')
}