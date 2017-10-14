import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class WeatherService {

	location
	myWeather: CurrentWeather

  constructor(private http:Http) { }


	localWeather(lat:string, lon:string){

		return new Promise ((res, rej) => {

			navigator.geolocation.getCurrentPosition((pos) =>{
				this.location = pos.coords;

				const latitude = this.location.latitude;
				const longitude = this.location.longitude;

				return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=67b8857f6c6d337850b4044caa235879`).map((response:Response ) =>
					response.json()).toPromise().then(
						(data) => {

		          console.log(data)
		          this.myWeather = new CurrentWeather(
		                                                data.name,
		                                                data.main.temp,
		                                                data.weather[0].icon,
		                                                data.weather[0].description,
		                                                data.main.temp_max,
		                                                data.main.temp_min,)


							res(this.myWeather);
		        }

				)
			})

		})

	}

}
