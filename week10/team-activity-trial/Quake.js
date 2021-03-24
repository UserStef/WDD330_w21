import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
    constructor() {
        this.baseUrl =
            'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
        // this is where we will store the last batch of retrieved quakes in the model. 
        // I don't always do this...in this case the api doesn't have an endpoint to request one quake.
        this._quakes = [];

        // -- adding local storage...
        this.quakeResults = {};
        this.position = [];
        this.isDataLoaded = false;
    }
    loadFromLocalStorage(){
        console.log(" ─── Load from Local Storage ─── ");
        // localStorage.removeItem("quakeResults");
        // localStorage.removeItem("position");

        if (localStorage.getItem('quakeResults')){
            console.log(" ─── loading 'quakeResults'. ─── ");
            this.quakeResults = JSON.parse(localStorage.getItem("quakeResults"));
            console.log(" ─── loading 'position'. ─── ");
            this.position = JSON.parse(localStorage.getItem("position"));
            console.log(" ─── Loaded from Local Storage! ─── ");
            this.isDataLoaded = true;
        } else {
            console.log(" ─── No data in Local Storage! ─── ");
            this.isDataLoaded = false;
        }
    }
    saveToLocalStorage(){
        console.log(" ─── Saving to Local Storage ─── ");
        localStorage.setItem("quakeResults", JSON.stringify(this.quakeResults));
        console.log(" ─── 'quakeResults' saved. ─── ");
        localStorage.setItem("position", JSON.stringify(this.position));
        console.log(" ─── 'position' saved. ─── ");
        console.log(" ─── Saved to Local Storage! ─── ");
    }
    async getEarthQuakesByRadius(position, radius = 100) {
        this.position = position;
        this.loadFromLocalStorage();
        if(this.isDataLoaded){
            this._quakes = {"features":this.quakeResults};
            // return this._quakes;
        } else {
            // use the getJSON function and the position provided to build out the correct URL to get the data we need. 
            // Store it into this._quakes, then return it
            if (position.lat !== 0) {
                this._quakes = new Promise(resolve => {
                    let url = `${this.baseUrl}&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;
                    console.log(` ♦ fetch url ♦ : ${url}`);
        
                    let fetch_promise = getJSON(url);
                    fetch_promise.then(result => { 
                        console.log(` ♦ fetchDone! ♦ `);
                        this.quakeResults = result.features;
                        this.isDataLoaded = true;
                        this.saveToLocalStorage();
                        console.log(result);
                        console.log(" ↓ JSON.stringify(result).length ↓ ");
                        console.log(JSON.stringify(result).length);
                        resolve(result); 
                    }).catch(result => { 
                        console.log(result); 
                    });
                });
            } else { console.log(' • position is empty.'); }
        }
        return this._quakes;

        // // -- Shortest
        // this._quakes = new Promise(resolve => {
        //     let fetch_promise = getJSON(`${this.baseUrl}&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`);
        //     fetch_promise.then(result => { resolve(result); })
        // });
        // return this._quakes;
    }
    getQuakeById(id) {
        // filter this._quakes for the record identified by id and return it
        console.log(` → getQuakeById(${id});`);
        return this._quakes.features.filter(item => item.id === id)[0];
    }
}