import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';


const libs=[
  MatGridListModule
];

@NgModule({
  imports: [
    CommonModule,
    libs
  ],
  exports:libs
})
export class MaterialModule { }
