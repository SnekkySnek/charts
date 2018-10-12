import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarbyRoutingModule } from './darby-routing.module';
import { DarbyComponent } from './darby/darby.component';

@NgModule({
  imports: [
    CommonModule,
    DarbyRoutingModule
  ],
  declarations: [DarbyComponent]
})
export class DarbyModule { }
