import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@modules/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@modules/register.module').then((m) => m.RegisterModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('@modules/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      )
  },
  {
    path: 'search',
    loadChildren: () =>
      import('@modules/search.module').then((m) => m.SearchModule)
  },
  {
    path: 'business',
    loadChildren: () =>
      import('@modules/business.module').then((m) => m.BusinessModule)
  },
  {
    path: 'barbers',
    loadChildren: () =>
      import('@modules/barbers.module').then((m) => m.BarbersModule)
  },
  {
    path: 'salons',
    loadChildren: () =>
      import('@modules/salons.module').then((m) => m.SalonsModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  { path: '**', redirectTo: '404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
