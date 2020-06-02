import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '@modules/shared.module';

import { LoginPageComponent } from '@pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class LoginModule {}
