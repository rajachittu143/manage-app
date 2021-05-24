import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  getster_id: number;
  image_name: string;
  activity: string;
  time_stamp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {getster_id: 1, image_name: '', activity: '', time_stamp: ''},
  {getster_id: 1, image_name: '', activity: '', time_stamp: ''},
  {getster_id: 1, image_name: '', activity: '', time_stamp: ''},
  {getster_id: 1, image_name: '', activity: '', time_stamp: ''},
  {getster_id: 1, image_name: '', activity: '', time_stamp: ''},
];

@Component({
  selector: 'app-audit-launch-screen-images',
  templateUrl: './audit-launch-screen-images.component.html',
  styleUrls: ['./audit-launch-screen-images.component.css']
})
export class AuditLaunchScreenImagesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'time_stamp','getster_id', 'image_name', 'activity'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor()
  {
    // this.paginator =  MatPaginator;
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection() {
    this.selection.selected.forEach(s => console.log(s.image_name));
  }

}