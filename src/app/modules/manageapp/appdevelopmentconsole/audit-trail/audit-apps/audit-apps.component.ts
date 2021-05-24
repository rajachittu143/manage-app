import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  app_id:number,
  app_name:string,
  getster_id: number;
  getster_name: string;
  activity: string;
  time_stamp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {app_id: 1, app_name: 'Kirshna Kumar', getster_id: 1,getster_name:'',activity:'', time_stamp: '+91 8587216578'},
];


@Component({
  selector: 'app-audit-apps',
  templateUrl: './audit-apps.component.html',
  styleUrls: ['./audit-apps.component.css']
})
export class AuditAppsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'time_stamp','app_id', 'app_name', 'getster_id', 'getster_name','activity'];
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
    this.selection.selected.forEach(s => console.log(s.app_name));
  }

}