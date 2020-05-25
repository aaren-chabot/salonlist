import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalonsComponent } from '@pages/salons/salons.component';
import { SalonComponent } from '@pages/salon/salon.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SalonsComponent
  },
  {
    path: ':id',
    component: SalonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [SalonsComponent, SalonComponent],
  exports: [RouterModule]
})
export class SalonsModule {}
