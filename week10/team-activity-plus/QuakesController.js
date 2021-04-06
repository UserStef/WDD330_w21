import { getLocation } from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

// Quake controller
export default class QuakesController {
    constructor(parent, position = null) {
        this.parent = parent;
        // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
        this.parentElement = null;
        // let's give ourselves the option of using a location other than the current location by passing it in.
        this.position = position || {
            lat: 0,
            lon: 0
        };
        // this is how our controller will know about the model and view...we add them right into the class as members.
        this.quakes = new Quake();
        this.quakesView = new QuakesView();
    }
    async init() {
        // use this as a place to grab the element identified by this.parent, 
        // do the initial call of this.initPos(), and display some quakes by calling this.getQuakesByRadius()
        // console.log(' ─── init() has been called. ─── ');
        this.parentElement = document.querySelector(this.parent);
        await this.initPos();
        this.getQuakesByRadius(100);

        // console.log(' ─── init() has been called. ─── ');
        // console.log('this.parent: '+this.parent);
        // console.log(this.parentElement);
        // console.log(this.position);
        // console.log(' ─── end of: init() has been called. ─── ');
    }
    async initPos() {
        // if a position has not been set
        if (this.position.lat === 0) {
            try {
                // try to get the position using getLocation()

                // if we get the location back then set the latitude and longitude into 'this.position'

                // return new Promise(resolve => {
                //     let mylocation = getLocation();
                //     mylocation.then((position) => {
                //         console.log('getLocation(position) has been called.');
                //         console.log(position);
                //         const latitude = position.coords.latitude;
                //         const longitude = position.coords.longitude;
                //         console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
    
                //         this.position = {
                //             lat: latitude,
                //             lon: longitude
                //         };
                //         console.log('this.position');
                //         console.log(this.position);
                //         resolve();
                //     });
                // });

                return new Promise(resolve => {
                    let mylocation = getLocation();
                    mylocation.then((position) => {
                        this.position = {
                            lat: position.coords.latitude,
                            lon: position.coords.longitude
                        };
                        resolve();
                    });
                });

            } catch (error) {
                console.log(error);
            }
        }
    }

    async getQuakesByRadius(radius = 100) {
        console.log(`getQuakesByRadius() was called.`);
        // this method provides the glue between the model and view. 
        // Notice it first goes out and requests the appropriate data from the model, 
        // then it passes it to the view to be rendered.

        //set loading message
        this.parentElement.innerHTML = `
Loading...
`;
        // get the list of quakes in the specified radius of the location
        const quakeList = await this.quakes.getEarthQuakesByRadius(
            this.position,
            100
        );
        // // render the list to html
        this.quakesView.renderQuakeList(quakeList, this.parentElement);
        // // add a listener to the new list of quakes to allow drill down in to the details
        this.parentElement.addEventListener('touchend', e => {
            // console.log(" → addEventListener() has been called.");
            // console.log(e.target);
            // console.log(`id: ${e.target.dataset.id}`);
            this.getQuakeDetails(e.target.dataset.id);
        });
    }
    async getQuakeDetails(quakeId) {
        // get the details for the quakeId provided from the model, 
        // then send them to the view to be displayed
        // console.log(`getQuakeDetails(${quakeId})`);
        // console.log(`quakeId: ${quakeId}`);
        let singleQuake = this.quakes.getQuakeById(quakeId);
        console.log(singleQuake);
    }
}