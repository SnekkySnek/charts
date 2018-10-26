import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodingViolationsComponent } from './coding-violations/coding-violations.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: CodingViolationsComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    HighchartsChartModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [CodingViolationsComponent]
})
export class CodingViolationsModule { }
