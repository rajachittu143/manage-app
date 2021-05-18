import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleserviceService } from './core/http/title/titleservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './core/theme.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ForgetPasswordComponent } from './shared/components/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
  ],
  providers: [TitleserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
