
import { getJSON, getLocation } from './utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
// let baseUrl = 'https://raw.githubusercontent.com/UserStef/WDD330_w21/main/playground/fetch/test.json';

let jResult = {};

// jResult = getJSON(baseUrl);
// console.log(jResult);

// let mylocation = getLocation((position)=>{
//     console.log('getLocation(position) has been called.');
//     console.log(position);
//     // const latitude  = position.coords.latitude;
//     // const longitude = position.coords.longitude;
//     // console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
// });
// let mylocation = GeolocationPosition.coords
// let mylocation = getLocation();
// console.log(mylocation);
// console.dir(mylocation);

// mylocation.then((position)=>{
//     console.log('getLocation(position) has been called.');
//     console.log(position);
//     const latitude  = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
//     let myPosition = {lat: latitude, lon: longitude};
// });


import QuakesController from './QuakesController.js';

let myQuakesController = new QuakesController("#quakeList");
myQuakesController.init();


// console.log(`url: ${baseUrl}`)
// let fetchResult = {};
// let fetch_promise = getJSON(baseUrl);
// console.log(fetch_promise);
// // fetchResult.then()
// // fetch_promise.then(result => {console.log(result)}).catch(result => {console.log(result)});

// fetch_promise.then(result => {fetchResult = result; console.log(fetchResult);}).catch(result => {console.log(result)});
// // console.log(fetchResult);



// console.log();
// fetchResult.then().then(result => result.json()).then()






// function geoFindMe() {
//     function success(position) {
//         const latitude  = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
//     }
//     function error() {
//         console.log('Unable to retrieve your location');
//     }
//     if(!navigator.geolocation) {
//         console.log('Geolocation is not supported by your browser');
//     } else {
//         console.log('Locating…');
//         navigator.geolocation.getCurrentPosition(success, error);
//     }
// }
// geoFindMe();