import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class WeatherService {

  location
  myWeather: CurrentWeather

  constructor(private http:Http) { }

  //Geolocalizacion
  localWather (){

    return new Promise ((res, rej) => {

      navigator.geolocation.getCurrentPosition((pos) =>{

        this.location = pos.coords;

        const lat = this.location.latitude;
        const lon = this.location.longitude;

        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f6f8a485134b1316a2b59f1d2588460c&units=metric`)
        .map((response:Response) => response.json()).subscribe(


          (data) => {

                this.myWeather = new CurrentWeather ( data.name,data.main.temp,data.weather[0].icon,data.weather[0].description,data.main.temp_max, data.main.temp_min );


                res(this.myWeather);

              }

          )


      })

    })

  }

//condiciones del clima
  anotherCity(city:string,country:string){

      return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=67b8857f6c6d337850b4044caa235879&units=metric`).map((response:Response) => response.json());

  }
//Pronostico del ti
  fiveForecast(city:string,country:string){
      return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=67b8857f6c6d337850b4044caa235879&units=metric`).map((response:Response) => response.json());
  }
}
