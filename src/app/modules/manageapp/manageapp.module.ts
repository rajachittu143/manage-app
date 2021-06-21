import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageappRoutingModule } from './manageapp-routing.module';
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
import { UserLoginSessionDataComponent } from './user-login-session-data/user-login-session-data.component';
import { AddEditGenericAppsComponent } from './appdevelopmentconsole/appsforusers/appsforallusers/add-edit-generic-apps/add-edit-generic-apps.component';
import { AddEditCustomAppsComponent } from './appdevelopmentconsole/appsforusers/customapps/add-edit-custom-apps/add-edit-custom-apps.component';
import { AddEditGetstersAppsComponent } from './appdevelopmentconsole/appsforgetsters/add-edit-getsters-apps/add-edit-getsters-apps.component';
import { AuditBusinessCountriesComponent } from './appdevelopmentconsole/audit-trail/audit-business-countries/audit-business-countries.component';
import { MenuAppdevelopmentConsoleComponent } from './appdevelopmentconsole/menu-appdevelopment-console/menu-appdevelopment-console.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddNodeComponent, NewNodeDialog } from 'src/app/shared/components/master-category/add-node/add-node.component';
import { EditNodeComponent, EditNodeDialog } from 'src/app/shared/components/master-category/edit-node/edit-node.component';
import { DeleteNodeComponent } from 'src/app/shared/components/master-category/delete-node/delete-node.component';
import { ReassignCategoryComponent } from './getster-category-admin/reassign-category/reassign-category.component';
import { HttpClientModule } from '@angular/common/http';
import { ReasonBusinessCategoryComponent } from './appdevelopmentconsole/appsforusers/businesscategories/reason-business-category/reason-business-category.component';

@NgModule({
  entryComponents: [
    NewNodeDialog,
    EditNodeDialog
  ],
  declarations: [
    ManageappRoutingModule.components,
    Login1Component,
    ManageapphomeComponent,
    AppdevelopmentconsoleComponent,
    MenuAppdevelopmentConsoleComponent,
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
    UserLoginSessionDataComponent,
    AddEditGenericAppsComponent,
    AddEditCustomAppsComponent,
    AddEditGetstersAppsComponent,
    AuditBusinessCountriesComponent,
    MenuAppdevelopmentConsoleComponent,

    AddNodeComponent,
    NewNodeDialog,
    EditNodeComponent,
    EditNodeDialog,
    DeleteNodeComponent,
    ReassignCategoryComponent,
    ReasonBusinessCategoryComponent,
    
  ],
  imports: [
    ThemeModule,
    CommonModule,
    ManageappRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MatSidenavModule,
    NgxIntlTelInputModule,
    HttpClientModule
  ],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManageappModule { }
