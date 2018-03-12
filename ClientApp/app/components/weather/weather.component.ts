﻿import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'weather',
    template: require('./weather.component.html')
})

export class WeatherComponent {
    public weather: Weather;

    constructor(http: Http) {
        http.get('/api/weather/city/london').subscribe(result => {
            this.weather = result.json();
        })       
    }
}

interface Weather {
    temp: String;
    summary: String;
    city: String;
}