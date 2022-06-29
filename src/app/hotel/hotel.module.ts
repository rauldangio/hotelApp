import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class HotelModule { }
