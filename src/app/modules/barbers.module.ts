import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarbersPageComponent } from '@pages/barbers/barbers.component';
import { BarberPageComponent } from '@pages/barber/barber.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BarbersPageComponent
  },
  {
    path: ':id',
    component: BarberPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [BarbersPageComponent, BarberPageComponent],
  exports: [RouterModule]
})
export class BarbersModule {}
