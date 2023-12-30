let temp;
let humidity;
let desc;
let icon;

fetch('https://api.openweathermap.org/data/2.5/forecast?q=houston&appid=569b83e02c16eca2296eee261eebaa02')
.then(function(response){
    return response.json()
})
.then(function(response){
    console.log("hi")
})


console.log(temp)