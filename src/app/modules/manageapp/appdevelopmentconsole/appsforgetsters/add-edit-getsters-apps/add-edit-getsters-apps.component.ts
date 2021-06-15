import { Component, OnInit } from '@angular/core';

import { DropzoneComponent , DropzoneDirective,
  DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
  
@Component({
  selector: 'app-add-edit-getsters-apps',
  templateUrl: './add-edit-getsters-apps.component.html',
  styleUrls: ['./add-edit-getsters-apps.component.css']
})
export class AddEditGetstersAppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public disabled: boolean = false;
  
  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };


  public onUploadInit(args: any): void {
    console.log('onUploadInit:', args);
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }

  public onUploadSuccess(args: any): void {
    console.log('onUploadSuccess:', args);
  }

}
