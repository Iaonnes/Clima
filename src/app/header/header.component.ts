import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  ngOnInit() {



  }

}
