import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomePageComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    loadChildren: async () =>
      (await import('@modules/login.module')).LoginModule
  },
  {
    path: 'register',
    loadChildren: async () =>
      (await import('@modules/register.module')).RegisterModule
  },
  {
    path: 'forgot-password',
    loadChildren: async () =>
      (await import('@modules/forgot-password.module')).ForgotPasswordModule
  },
  {
    path: 'search',
    loadChildren: async () =>
      (await import('@modules/search.module')).SearchModule
  },
  {
    path: 'business',
    loadChildren: async () =>
      (await import('@modules/business.module')).BusinessModule
  },
  {
    path: 'barbers',
    loadChildren: async () =>
      (await import('@modules/barbers.module')).BarbersModule
  },
  {
    path: 'salons',
    loadChildren: async () =>
      (await import('@modules/salons.module')).SalonsModule
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
  { path: '**', redirectTo: '404' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
