import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@modules/shared.module';

import { RegisterPageComponent } from '@pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [RegisterPageComponent],
  exports: [RouterModule]
})
export class RegisterModule {}
