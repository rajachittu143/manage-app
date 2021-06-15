import { Component, OnInit } from '@angular/core';

import {
  DropzoneComponent, DropzoneDirective,
  DropzoneConfigInterface
} from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-add-edit-generic-apps',
  templateUrl: './add-edit-generic-apps.component.html',
  styleUrls: ['./add-edit-generic-apps.component.scss']
})
export class AddEditGenericAppsComponent implements OnInit {

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



  imageObject: Array<object> = [{
    image: 'assets/icons/logo.png',
    thumbImage: 'assets/icons/logo.png',
    alt: 'alt of image',
    title: 'title of image'
  },
  ];

}
