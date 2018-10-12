import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DarbyComponent } from './darby/darby.component';

const routes: Routes = [
  {
    path: '',
    component: DarbyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DarbyRoutingModule { }
