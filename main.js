$(document).ready(function(){

// NASA API key
const key = 'tgXqo18P9Dt2gGW7z6zL3q5znCIEPl2JVpGCbcin';
var dangerousAsteroidsName = [];
var dangerousAsteroidsSize = [];
var dangerousAsteroidsVelocity = [];
$.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=tgXqo18P9Dt2gGW7z6zL3q5znCIEPl2JVpGCbcin", function(data) {
  // console.log(data);
  var nearEarthObjectData = data.near_earth_objects;

  for (var date in nearEarthObjectData) {
    var eachDate = nearEarthObjectData[date];
      for (var meteors in eachDate) {
        var individualMeteor = eachDate[meteors]
            if (individualMeteor['is_potentially_hazardous_asteroid']) {
              dangerousAsteroidsName.push(individualMeteor['name']);
              dangerousAsteroidsSize.push(individualMeteor['estimated_diameter']['feet']['estimated_diameter_max'])
              dangerousAsteroidsVelocity.push(individualMeteor['close_approach_data'][0]['relative_velocity']['miles_per_hour'])
            }

          }
      }
    })



// console.log(dangerousAsteroidsName)
// console.log(dangerousAsteroidsSize)
console.log(dangerousAsteroidsVelocity)

  })
