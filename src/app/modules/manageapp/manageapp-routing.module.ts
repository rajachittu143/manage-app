import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/core/layout/layout.component';
import { AppdevelopmentconsoleComponent } from './appdevelopmentconsole/appdevelopmentconsole.component';
import { AddEditGetstersAppsComponent } from './appdevelopmentconsole/appsforgetsters/add-edit-getsters-apps/add-edit-getsters-apps.component';
import { AddEditGenericAppsComponent } from './appdevelopmentconsole/appsforusers/appsforallusers/add-edit-generic-apps/add-edit-generic-apps.component';
import { AddEditCustomAppsComponent } from './appdevelopmentconsole/appsforusers/customapps/add-edit-custom-apps/add-edit-custom-apps.component';
import { GetsterAccessControlComponent } from './getster-access-control/getster-access-control.component';
import { GetsterCategoryAdminComponent } from './getster-category-admin/getster-category-admin.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { ManageapphomeComponent } from './manageapphome/manageapphome.component';
import { RegisterfaceComponent } from './registerface/registerface.component';
import { RegistergetsterComponent } from './registergetster/registergetster.component';
import { UserLoginSessionDataComponent } from './user-login-session-data/user-login-session-data.component';

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
          description: 'getbiz',
          keywords: ''
        }
      },
      {
        path: 'login1',
        component: Login1Component,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      },
      {
        path: 'register-getster',
        component: RegistergetsterComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      },
      {
        path: 'register-face',
        component: RegisterfaceComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      },
      {
        path: 'manageapphome',
        component: ManageapphomeComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      }, {
        path: 'appdevelopmentconsole',
        component: AppdevelopmentconsoleComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      },
      {
        path: 'getster-category-admin',
        component: GetsterCategoryAdminComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      }, {
        path: 'getster-access-control',
        component: GetsterAccessControlComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      }, {
        path: 'user-login-session-data',
        component: UserLoginSessionDataComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      },
      {
        path: 'add-edit-generic-apps',
        component: AddEditGenericAppsComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      },
      {
        path: 'add-edit-custom-apps',
        component: AddEditCustomAppsComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      },
      {
        path: 'add-edit-getsters-apps',
        component: AddEditGetstersAppsComponent,
        data: {
          title: 'getbiz.app',
          description: 'getbiz',
          keywords: ''
        }
      }
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
    GetsterAccessControlComponent,
    UserLoginSessionDataComponent,
    AddEditCustomAppsComponent,
    AddEditGenericAppsComponent,
    AddEditGetstersAppsComponent
  ]
}
