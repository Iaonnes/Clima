import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { SearchCity } from '../administration';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

    // addCity: SearchCity;
    SaveCities: SearchCity[] = [
      
    ];

  constructor(private ws: WeatherService) { }

  addForm: FormGroup
  addCity: SearchCity[] = []
  // addCity: SearchCity;

  ngOnInit() {

      // this.route.data.subscribe(
      //   (data:{addCity:SearchCity})=>{
      //     this.addCity = data.addCity;
      //   }
      // )

      this.addForm = new FormGroup({

        city: new FormControl(''),
        Country: new FormControl('')

      })

    }

    onAdd(){

      this.addCity.splice(0,this.addCity.length);
      this.ws.anotherCity(this.addForm.value.city,this.addForm.value.Country).subscribe(
        (data) => {

          console.log(data);

          // for(let i = 0; i < data.list.lengt; i+=8){

              const temporary = new SearchCity(data.name,
                                               data.main.temp,
                                               data.main.temp_max,
                                               data.main.temp_min)

             this.addCity.push(temporary);

          // }

          console.log(this.addCity);

        }
      );


    }

  }
