import { Component, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

	myWeather:CurrentWeather;

  constructor(private ws:WeatherService, private route:ActivatedRoute) { }

  ngOnInit() {

      this.route.data.subscribe(
        (data:{myWeather:CurrentWeather})=>{
        this.myWeather = data.myWeather;
      }
    )

  }

}
