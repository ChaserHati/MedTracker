import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'home', canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dataentry',canActivate: [AuthGuard],
    loadChildren: () => import('./dataentry/dataentry.module').then( m => m.DataentryPageModule)
  },
  {
    path: 'chart',canActivate: [AuthGuard],
    loadChildren: () => import('./chart/chart.module').then( m => m.ChartPageModule)
  },
  {
    path: 'user',canActivate: [AuthGuard],
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

