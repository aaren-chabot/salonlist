import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from '@pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ForgotPasswordComponent],
  exports: [RouterModule]
})
export class ForgotPasswordModule {}