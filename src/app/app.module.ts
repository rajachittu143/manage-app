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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppLoaderComponent } from './shared/services/app-loader/app-loader/app-loader.component';
import { MatTreeModule } from '@angular/material/tree';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgImageSliderModule } from 'ng-image-slider';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 5,
  acceptedFiles: '.docx,.pdf,.mp4,.mkv,.avi,image/jpeg,image/jpg,image/png',
  addRemoveLinks: true,
  createImageThumbnails: true
};

@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    AppLoaderComponent
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
    MatTreeModule,
    DropzoneModule,
    NgImageSliderModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [TitleserviceService,
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
