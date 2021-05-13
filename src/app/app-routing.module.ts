import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'manage-app', loadChildren: () => import('./modules/manageapp/manageapp.module').then(m => m.ManageappModule) },
  { path: '', pathMatch: 'full', redirectTo: '/manage-app/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
