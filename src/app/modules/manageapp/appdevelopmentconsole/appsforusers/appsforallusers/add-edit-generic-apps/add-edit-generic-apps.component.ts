import { Component, OnInit } from '@angular/core';

import {
  DropzoneComponent, DropzoneDirective,
  DropzoneConfigInterface
} from 'ngx-dropzone-wrapper';


import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-add-edit-generic-apps',
  templateUrl: './add-edit-generic-apps.component.html',
  styleUrls: ['./add-edit-generic-apps.component.scss']
})
export class AddEditGenericAppsComponent implements OnInit {

  id = 't1nFAMws5FI&t';

  playerVars = {
    cc_lang_pref: 'en'
  };

  private player: any;
  ytEvent: any;

  constructor() {
  }

  onTimestamp(url_id:any){
    this.id = url_id;
    console.log(this.id);
    this.playVideo();
  }

  onStateChange(event: any) {
    this.ytEvent = event.data;
    console.log(this.ytEvent)
  }
  savePlayer(player: any) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

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


  // Upload Image

  name = 'Angular';
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
