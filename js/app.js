const API_KEY =`ad189aeaf41c955fc7a8c0ece359e25d`;
const searchTemparature = () =>{
    const city = document.getElementById('search_city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(city)
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayTempature(data))
}
const setInnerText = (id,Text) =>{
    document.getElementById(id).innerText =Text;
}
const displayTempature = temperature =>{
    setInnerText('city',temperature.name)
    setInnerText('temperature',temperature.main.temp)
    setInnerText('condition',temperature.weather[0].main)
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon =document.getElementById('w_ic');
    imgIcon.setAttribute('src',url);
}