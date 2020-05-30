import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessPageComponent } from '@pages/business/business.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BusinessPageComponent
  },
  {
    path: 'login',
    component: BusinessPageComponent
  },
  {
    path: 'register',
    component: BusinessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [BusinessPageComponent],
  exports: [RouterModule]
})
export class BusinessModule {}
