import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessComponent } from '@pages/business/business.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BusinessComponent
  },
  {
    path: 'login',
    component: BusinessComponent
  },
  {
    path: 'register',
    component: BusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [BusinessComponent],
  exports: [RouterModule]
})
export class BusinessModule {}
