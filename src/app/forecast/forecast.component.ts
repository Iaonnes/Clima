import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Forecast } from '../forecast';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  forecastForm: FormGroup
  cityForecast: Forecast[] =[]

  ngOnInit() {

  	this.forecastForm = new FormGroup({
  		
  		forecastCity: new FormControl(''),
  		forecastCountry: new FormControl('')

  	})
  }

  onSubmit(){

  	console.log(this.forecastForm);
  	this.weatherService.fiveForecast(this.forecastForm.value.forecastCity, this.forecastForm.value.forecastCountry).subscribe(

  			(data) => {

  				console.log(data);
  				

  			}

  		);
  	
  }

}
