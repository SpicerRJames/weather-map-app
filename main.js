// var saWeth = "http://api.openweathermap.org/data/2.5/weather?q=San+Antonio,Texas&appid=" + thisIsAKey;
// var saWeth = "http://api.openweathermap.org/data/2.5/forecast/hourly?q=san+antonio&appid=" + thisIsAKey;
// var saWeth = "http://api.openweathermap.org/data/2.5/forecast?q=San+Antonio&appid=" + thisIsAKey;

// console.log(saWeth);

// fetch(saWeth).then(response => response.json())
// .then(data => console.log(data));

//******* ONE DAY FORECAST *********//
// $("#button").on('click', function(event){
//     event.preventDefault();
//     var btn = $('#weatherSearch').val().toString().replace(" ", "+");
//     var saWeth = "http://api.openweathermap.org/data/2.5/weather?q=" + btn + "&appid=" + thisIsAKey;
//     // fetch(saWeth).then(response => response.json()).then(data => console.log(data));
//     fetch(saWeth).then(response => response.json()).then(data => {
//         var cityName = data.name;
//         var cityTemp = data.main.temp;
//         var cityDesc = data.weather[0].description;
//         $("#name").html(cityName);
//         $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit");
//         $("#description").html(cityDesc);
//     });
// })

//********** 3 DAY FORECAST ***************//
// $("#button").on('click', function(event){
//     event.preventDefault();
//     var btn = $('#weatherSearch').val().toString().replace(" ", "+");
//     var saWeth = "http://api.openweathermap.org/data/2.5/forecast?q=" + btn + "&appid=" + thisIsAKey;
//     // fetch(saWeth).then(response => response.json()).then(data => console.log(data));
//     fetch(saWeth).then(response => response.json()).then(data => {
//         var cityName = data.city.name;
//         var cityTemp = data.list[0].main.temp;
//         var cityDesc = data.list[0].weather[0].description;

//         var cityTemp1 = data.list[1].main.temp;
//         var cityDesc1 = data.list[1].weather[0].description;

//         var cityTemp2 = data.list[2].main.temp;
//         var cityDesc2 = data.list[2].weather[0].description;

//         $("#name").html(cityName);
//         $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit");
//         $("#description").html(cityDesc);

//         $("#tempurature1").html(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit");
//         $("#description1").html(cityDesc1);

//         $("#tempurature2").html(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit");
//         $("#description2").html(cityDesc2);

//         this.val = '';
//     });
// })


//************ 3 DAY MESSAGED RESPONSE APP ***************//
// $("#button").on('click', function(event){
    
//     event.preventDefault();
//     var btn = $('#weatherSearch').val().toString().replace(" ", "+");
//     var saWeth = "http://api.openweathermap.org/data/2.5/forecast?q=" + btn + "&appid=" + thisIsAKey;
//     // fetch(saWeth).then(response => response.json()).then(data => console.log(data));
//     fetch(saWeth).then(response => response.json()).then(data => {
//         var cityName = data.city.name;
//         var cityTemp = data.list[0].main.temp;
//         var cityDesc = data.list[0].weather[0].description;

//         var cityTemp1 = data.list[1].main.temp;
//         var cityDesc1 = data.list[1].weather[0].description;

//         var cityTemp2 = data.list[2].main.temp;
//         var cityDesc2 = data.list[2].weather[0].description;

//         $("#name").html(cityName);

//         //********* DAY 1 ***************//
//         if(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 > 85)){
//             $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS SOO DAMN HOT!!!");
//         } else if(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 < 84 && Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 > 60))){
//             $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit It's nice out today!");
//         } else if(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 < 59 && Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 > 36))){
//             $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit It is cold today.");
//         } else if(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 < 35 && Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 > 0))){
//             $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS FUCKING COLD TODAY!!!");
//         }
//         $("#description").html(cityDesc);

//         //************ DAY 2 *************//
//         if(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 > 85)){
//             $("#tempurature1").html(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS SOO DAMN HOT!!!");
//         } else if(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 < 85)){
//             $("#tempurature1").html(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS SOO DAMN COLD!!!");
//         }
//         $("#description1").html(cityDesc1);

//         //*************** DAY 3 ***************//
//         if(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 > 85)){
//             $("#tempurature2").html(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS SOO DAMN HOT!!!");
//         } else if(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 < 85)){
//             $("#tempurature2").html(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS SOO DAMN COLD!!!");
//         }
//         $("#description2").html(cityDesc2);

//         this.val = '';
//     });
// })

$("#button").on('click', function(event){
    
    event.preventDefault();
    var btn = $('#weatherSearch').val().toString().replace(" ", "+");
    var saWeth = "http://api.openweathermap.org/data/2.5/forecast?q=" + btn + "&appid=" + thisIsAKey;

    // fetch(saWeth).then(response => response.json()).then(data => console.log(data));

    fetch(saWeth).then(response => response.json()).then(data => {

        var cityName = data.city.name;
        var cityTemp = data.list[0].main.temp;
        var cityDesc = data.list[0].weather[0].description;

        var cityTemp1 = data.list[1].main.temp;
        var cityDesc1 = data.list[1].weather[0].description;

        var cityTemp2 = data.list[2].main.temp;
        var cityDesc2 = data.list[2].weather[0].description;

        $("#name").html(cityName);

        //********* DAY 1 ***************//
        if(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 > 85)){
            $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS SOO DAMN HOT!!!");
        } else if(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 < 84 && Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 > 60))){
            $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit It's nice out today!");
        } else if(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 < 59 && Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 > 36))){
            $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit It is cold today.");
        } else if(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 < 35 && Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 > 0))){
            $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS FUCKING COLD TODAY!!!");
        } else if(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32 < 0)){
            $("#tempurature").html(Math.floor(((parseInt(cityTemp)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit YOU WILL FREEZE TO DEATH!!!");
        }
        $("#description").html(cityDesc);

        //************ DAY 2 *************//
        if(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 > 85)){
            $("#tempurature1").html(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS SOO DAMN HOT!!!");
        } else if(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 < 84 && Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 > 60))){
            $("#tempurature1").html(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit It's nice out today!");
        } else if(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 < 59 && Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 > 36))){
            $("#tempurature1").html(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit It is cold today.");
        } else if(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 < 35 && Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 > 0))){
            $("#tempurature1").html(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS FUCKING COLD TODAY!!!");
        }  else if(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32 < 0)){
            $("#tempurature1").html(Math.floor(((parseInt(cityTemp1)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit YOU WILL FREEZE TO DEATH!!!");
        }
        $("#description1").html(cityDesc1);

        //*************** DAY 3 ***************//
        if(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 > 85)){
            $("#tempurature2").html(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS SOO DAMN HOT!!!");
        } else if(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 < 84 && Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 > 60))){
            $("#tempurature2").html(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit It's nice out today!");
        } else if(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 < 59 && Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 > 36))){
            $("#tempurature2").html(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit It is cold today.");
        } else if(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 < 35 && Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 > 0))){
            $("#tempurature2").html(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit IT IS FUCKING COLD TODAY!!!");
        } else if(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32 < 0)){
            $("#tempurature2").html(Math.floor(((parseInt(cityTemp2)-273.15)*1.8)+32) + " " + "Degrees Fahrenheit YOU WILL FREEZE TO DEATH!!!");
        }
        $("#description2").html(cityDesc2);

        this.val = '';
    });
})

mapboxgl.accessToken = thisIsAlsoAKey;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9
});

var marker = new mapboxgl.Marker()
.setLngLat([30.5, 50.5])
.addTo(map);