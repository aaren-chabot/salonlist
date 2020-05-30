import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalonsPageComponent } from '@pages/salons/salons.component';
import { SalonPageComponent } from '@pages/salon/salon.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SalonsPageComponent
  },
  {
    path: ':id',
    component: SalonPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [SalonsPageComponent, SalonPageComponent],
  exports: [RouterModule]
})
export class SalonsModule {}
