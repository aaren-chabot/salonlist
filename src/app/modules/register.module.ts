import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPageComponent } from '@pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [RegisterPageComponent],
  exports: [RouterModule]
})
export class RegisterModule {}
