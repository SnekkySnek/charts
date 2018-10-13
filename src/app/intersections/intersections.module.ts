import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionsComponent } from './intersections/intersections.component';
import { RouterModule } from '@angular/router';


const routes = [
  {
    path: '',
    component: IntersectionsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: [IntersectionsComponent]
})
export class IntersectionsModule { }
