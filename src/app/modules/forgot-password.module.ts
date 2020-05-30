import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordPageComponent } from '@pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ForgotPasswordPageComponent],
  exports: [RouterModule]
})
export class ForgotPasswordModule {}
