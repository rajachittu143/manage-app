import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageappRoutingModule } from './manageapp-routing.module';
import { LoginComponent } from './login/login.component';
import { ThemeModule } from 'src/app/core/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { Login1Component } from './login1/login1.component';
import { ManageapphomeComponent } from './manageapphome/manageapphome.component';
import { AppdevelopmentconsoleComponent } from './appdevelopmentconsole/appdevelopmentconsole.component';
import { AppsforgetstersComponent } from './appdevelopmentconsole/appsforgetsters/appsforgetsters.component';
import { AppsforusersComponent } from './appdevelopmentconsole/appsforusers/appsforusers.component';
import { LaunchscreenimagesComponent } from './appdevelopmentconsole/launchscreenimages/launchscreenimages.component';
import { BusinesscategoriesComponent } from './appdevelopmentconsole/appsforusers/businesscategories/businesscategories.component';
import { AppsforallusersComponent } from './appdevelopmentconsole/appsforusers/appsforallusers/appsforallusers.component';
import { CustomappsComponent } from './appdevelopmentconsole/appsforusers/customapps/customapps.component';
import { ConsoleuserComponent } from './appdevelopmentconsole/consoleuser/consoleuser.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegistergetsterComponent } from './registergetster/registergetster.component';
import { RegisterfaceComponent } from './registerface/registerface.component';
import { GetsterCategoryAdminComponent } from './getster-category-admin/getster-category-admin.component';
import { GetsterAccessControlComponent } from './getster-access-control/getster-access-control.component';
import { NewGetsterComponent } from './getster-access-control/new-getster/new-getster.component';
import { ExistingGetsterComponent } from './getster-access-control/existing-getster/existing-getster.component';
import { BlockedGetsterComponent } from './getster-access-control/blocked-getster/blocked-getster.component';
import { GetsterProfileComponent } from './getster-access-control/getster-profile/getster-profile.component';
import { AuditTrailComponent } from './appdevelopmentconsole/audit-trail/audit-trail.component';
import { AuditAppsComponent } from './appdevelopmentconsole/audit-trail/audit-apps/audit-apps.component';
import { AuditConsoleUserComponent } from './appdevelopmentconsole/audit-trail/audit-console-user/audit-console-user.component';
import { AuditLaunchScreenImagesComponent } from './appdevelopmentconsole/audit-trail/audit-launch-screen-images/audit-launch-screen-images.component';
import { AuditBusinessCategoriesComponent } from './appdevelopmentconsole/audit-trail/audit-business-categories/audit-business-categories.component';


@NgModule({
  declarations: [
    ManageappRoutingModule.components,
    Login1Component,
    ManageapphomeComponent,
    AppdevelopmentconsoleComponent,
    AppsforgetstersComponent,
    AppsforusersComponent,
    LaunchscreenimagesComponent,
    BusinesscategoriesComponent,
    AppsforallusersComponent,
    CustomappsComponent,
    ConsoleuserComponent,
    GetsterCategoryAdminComponent,
    GetsterAccessControlComponent,
    NewGetsterComponent,
    ExistingGetsterComponent,
    BlockedGetsterComponent,
    GetsterProfileComponent,
    AuditTrailComponent,
    AuditAppsComponent,
    AuditConsoleUserComponent,
    AuditLaunchScreenImagesComponent,
    AuditBusinessCategoriesComponent,
    
  ],
  imports: [
    ThemeModule,
    CommonModule,
    ManageappRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    NgxIntlTelInputModule,
  ],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManageappModule { }
