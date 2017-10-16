
import {Routes, RouterModule}from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {CurrentComponent} from './current/current.component';
import {ForecastComponent} from './forecast/forecast.component';
import {ResolveLocationService} from './resolve-location.service';
import {AdministrationComponent} from './administration/administration.component';

const WEATHER_ROUTER:Routes  = [

  {path: '', component: CurrentComponent, resolve: {myWeather:ResolveLocationService}},
  {path: 'forecast', component: ForecastComponent},
  {path: 'administration', component: AdministrationComponent}

]

export const weatherRouting:ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER)
