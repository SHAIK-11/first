// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';

async function getData(url){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'db5e7f9338mshf845f825cdb95ecp11e297jsn41f9ae1a8ea4',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
	// const result = await response.text();
    const result = await response.json();
	console.log(result);
    return result ;
    
} catch (error) {
    console.error(error);
}
}

let wind = document.querySelector(".wind");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let city = document.querySelector(".city-input")
let search = document.querySelector(".search-btn");
search.addEventListener("click", async(e) =>{
    try {
    let getresult = await getData(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city.value}`)
    displaydata(getresult);
    // console.log(getresult.temp);
    }
    catch(error){
        console.log(error);
    }
});


function displaydata(getresult){
    wind.innerText = getresult.wind;
    temp.innerText = getresult.temp;
    humidity.innerText = getresult.humidity;
}