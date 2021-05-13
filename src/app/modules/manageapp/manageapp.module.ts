import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageappRoutingModule } from './manageapp-routing.module';
import { LoginComponent } from './login/login.component';
import { ThemeModule } from 'src/app/core/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { RegisterComponent } from './register/register.component';
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


@NgModule({
  declarations: [
    ManageappRoutingModule.components,
    RegisterComponent,
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
