import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  getster_id: number;
  access_getster: string;
  activity: string;
  time_stamp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {getster_id: 1, access_getster: '', activity: '', time_stamp: ''},
  {getster_id: 1, access_getster: '', activity: '', time_stamp: ''},
  {getster_id: 1, access_getster: '', activity: '', time_stamp: ''},
  {getster_id: 1, access_getster: '', activity: '', time_stamp: ''},
  {getster_id: 1, access_getster: '', activity: '', time_stamp: ''},
];

@Component({
  selector: 'app-audit-console-user',
  templateUrl: './audit-console-user.component.html',
  styleUrls: ['./audit-console-user.component.css']
})
export class AuditConsoleUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'getster_id', 'access_getster', 'activity', 'time_stamp'];
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
    this.selection.selected.forEach(s => console.log(s.access_getster));
  }

}