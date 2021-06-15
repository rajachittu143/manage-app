import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import {
  DropzoneComponent, DropzoneDirective,
  DropzoneConfigInterface
} from 'ngx-dropzone-wrapper';


export interface CustomApp {
  biz_app_name:string,
  biz_app_id:string,
}

const CustomApp_DATA: CustomApp[] = [
  {biz_app_name: 'Venkraft - Unit 1', biz_app_id: 'b20120201'},
  {biz_app_name: 'Venkraft - Unit 2', biz_app_id: 'b20120202'},
  {biz_app_name: 'Venkraft - Unit 3', biz_app_id: 'b20120203'},
  {biz_app_name: 'Venkraft - Unit 4', biz_app_id: 'b20120204'},
  {biz_app_name: 'Venkraft - Unit 5', biz_app_id: 'b20120205'},
  {biz_app_name: 'Venkraft - Unit 6', biz_app_id: 'b20120206'},
  {biz_app_name: 'Venkraft - Unit 7', biz_app_id: 'b20120207'},
];

export interface GenericApp {
  app_name:string,
  app_id:string,
}

const GenericApp_DATA: GenericApp[] = [
  {app_name: 'Chat App', app_id: 'g201202021'},
  {app_name: 'Chat App 2', app_id: 'g201202022'},
  {app_name: 'Chat App 3', app_id: 'g201202023'},
  {app_name: 'Chat App 4', app_id: 'g201202024'},
  {app_name: 'Chat App 5', app_id: 'g201202025'},
  {app_name: 'Chat App 6', app_id: 'g201202026'},
  {app_name: 'Chat App 7', app_id: 'g201202027'},
];


@Component({
  selector: 'app-add-edit-custom-apps',
  templateUrl: './add-edit-custom-apps.component.html',
  styleUrls: ['./add-edit-custom-apps.component.scss']
})
export class AddEditCustomAppsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumnsCustomApp: string[] = ['select', 'biz_app_name','biz_app_id'];
  dataSourceCustomApp = new MatTableDataSource<CustomApp>(CustomApp_DATA);
  selectionCustomApp = new SelectionModel<CustomApp>(true, []);

  displayedColumnsGenericApp: string[] = ['select', 'app_name','app_id'];
  dataSourceGenericApp = new MatTableDataSource<GenericApp>(GenericApp_DATA);
  selectionGenericApp = new SelectionModel<GenericApp>(true, []);

  constructor() { }

  ngOnInit(): void {
    this.dataSourceCustomApp.paginator = this.paginator;
    this.dataSourceGenericApp.paginator = this.paginator;
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

  
  /** Whether the number of selected elements matches the total number of rows. */
  isCustomAppAllSelected() {
    const numSelected = this.selectionCustomApp.selected.length;
    const numRows = this.dataSourceCustomApp.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterCustomAppToggle() {
    this.isCustomAppAllSelected() ?
        this.selectionCustomApp.clear() :
        this.dataSourceCustomApp.data.forEach(row => this.selectionCustomApp.select(row));
  }

  logCustomAppSelection() {
    this.selectionCustomApp.selected.forEach(s => console.log(s.biz_app_name));
  }

    
  /** Whether the number of selected elements matches the total number of rows. */
  isGenericAppAllSelected() {
    const numSelected = this.selectionGenericApp.selected.length;
    const numRows = this.dataSourceGenericApp.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterGenericAppToggle() {
    this.isGenericAppAllSelected() ?
        this.selectionGenericApp.clear() :
        this.dataSourceGenericApp.data.forEach(row => this.selectionGenericApp.select(row));
  }

  logGenericAppSelection() {
    this.selectionGenericApp.selected.forEach(s => console.log(s.app_name));
  }

}
