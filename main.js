$(document).ready(function(){

// NASA API key
const key = 'tgXqo18P9Dt2gGW7z6zL3q5znCIEPl2JVpGCbcin';
var dangerousAsteroidsName = [];
var dangerousAsteroidsSize = [];
var dangerousAsteroidsVelocity = [];

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// retrieve data from nasa website
$.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=tgXqo18P9Dt2gGW7z6zL3q5znCIEPl2JVpGCbcin", function(data) {
  var nearEarthObjectData = data.near_earth_objects;

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// loop through returned data to get information for individual asteroids
  for (var date in nearEarthObjectData) {
    var eachDate = nearEarthObjectData[date];
      for (var meteors in eachDate) {
        var individualMeteor = eachDate[meteors]
          if (individualMeteor['is_potentially_hazardous_asteroid']) {
            // push desired attributes to new arrays
              dangerousAsteroidsName.push(individualMeteor['name']);
              dangerousAsteroidsSize.push(individualMeteor['estimated_diameter']['feet']['estimated_diameter_max'])
              dangerousAsteroidsVelocity.push(individualMeteor['close_approach_data'][0]['relative_velocity']['miles_per_hour'])
          }
      }
  }

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//generate a random asteroid picture
  function randomPictureGenerator() {
  var randomNumber = Math.floor(Math.random()*12);
  if (randomNumber < 3) {
    return '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Rosetta_triumphs_at_asteroid_Lutetia.jpg/1200px-Rosetta_triumphs_at_asteroid_Lutetia.jpg" />';
  }
  else if (randomNumber > 3 && randomNumber < 6) {
    return '<img src="https://www.nasa.gov/images/content/479604main_eros_1600-1200.jpg" />';
  }
  else if (randomNumber > 6 && randomNumber < 9) {
    return '<img src="  http://www.pbs.org/wgbh/nova/next/wp-content/uploads/2013/03/asteroid-ida.jpg" />';
  }
  else {
    return '<img src="  https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzAxMi85MzYvb3JpZ2luYWwvYXN0ZXJvaWQtbHV0ZXRpYS1vc2lyaXMtZmx5YnktMi5qcGc=" />';
  }
  }


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// jquery to build li items to display
  var ul = $(".list");
  for (var i=0; i<dangerousAsteroidsName.length; i++) {
    ul.append(`<li id="asteroid${i}">`+ randomPictureGenerator() + dangerousAsteroidsName[i] + " is traveling at " + Math.ceil(dangerousAsteroidsVelocity[i]) + " MPH, and has a diameter of " + Math.ceil(dangerousAsteroidsSize[i]) +" ft" + "</li>");
  }


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// jQuery to bring up individual asteroid info on hover

$('img').click(function(){
  alert(this.id) ;
})


})




  })
