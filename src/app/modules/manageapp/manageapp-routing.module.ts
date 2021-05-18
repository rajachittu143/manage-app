import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/core/layout/layout.component';
import { AppdevelopmentconsoleComponent } from './appdevelopmentconsole/appdevelopmentconsole.component';
import { GetsterAccessControlComponent } from './getster-access-control/getster-access-control.component';
import { GetsterCategoryAdminComponent } from './getster-category-admin/getster-category-admin.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { ManageapphomeComponent } from './manageapphome/manageapphome.component';
import { RegisterfaceComponent } from './registerface/registerface.component';
import { RegistergetsterComponent } from './registergetster/registergetster.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'getbiz.app',
          description: '',
          keywords: ''
        }
      },
      {
        path: 'login1',
        component: Login1Component,
        data: {
          title: 'getbiz.app',
          description: '',
          keywords: ''
        }
      },
      {
        path: 'register-getster',
        component: RegistergetsterComponent,
        data: {
          title: 'getbiz.app',
          description: '',
          keywords: ''
        }
      },
      {
        path: 'register-face',
        component: RegisterfaceComponent,
        data: {
          title: 'getbiz.app',
          description: '',
          keywords: ''
        }
      },
      {
        path: 'manageapphome',
        component: ManageapphomeComponent,
        data: {
          title: 'getbiz.app',
          description: '',
          keywords: ''
        }
      }, {
        path: 'appdevelopmentconsole',
        component: AppdevelopmentconsoleComponent,
        data: {
          title: 'getbiz.app',
          description: '',
          keywords: ''
        }
      },
      {
        path: 'getster-category-admin',
        component: GetsterCategoryAdminComponent,
        data: {
          title: 'getbiz.app',
          description: '',
          keywords: ''
        }
      }, {
        path: 'getster-access-control',
        component: GetsterAccessControlComponent,
        data: {
          title: 'getbiz.app',
          description: '',
          keywords: ''
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageappRoutingModule {
  static components = [
    LoginComponent,
    RegistergetsterComponent,
    RegisterfaceComponent,
    ManageapphomeComponent,
    Login1Component,
    AppdevelopmentconsoleComponent,
    GetsterCategoryAdminComponent,
    GetsterAccessControlComponent
  ]
}
