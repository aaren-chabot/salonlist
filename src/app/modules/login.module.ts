import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from '@pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [LoginPageComponent],
  exports: [RouterModule]
})
export class LoginModule {}
