import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarbersComponent } from '@pages/barbers/barbers.component';
import { BarberComponent } from '@pages/barber/barber.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BarbersComponent
  },
  {
    path: ':id',
    component: BarberComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [BarbersComponent, BarberComponent],
  exports: [RouterModule]
})
export class BarbersModule {}
