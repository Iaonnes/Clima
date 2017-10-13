import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
// import { CurrentWeather } from './current-weather';

@Injectable()
export class WeatherService {


	current: CurrentWeather = new CurrentWeather('Guadalajara','27',
																							 'https://icons.wxug.com/i/c/g/partlycloudy.gif',
												 										 	 'soleado con nubes','27','18')

  constructor() { }

  weatherNow(){

    return this.current;

  }

}
