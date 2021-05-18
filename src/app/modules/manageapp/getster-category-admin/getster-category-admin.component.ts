import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  username: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, username: 'Admin Apps'},
  {position: 2, username: 'Finance & Accounting Apps'},
  {position: 3, username: 'Human Resources Apps'},
  {position: 4, username: 'Developer Management Apps'},
  {position: 4, username: 'Consultant Management Apps'},
  {position: 4, username: 'Apps Under Alpha Trails Management Apps'},
  {position: 4, username: 'Apps Under Beta Trails'},
];

@Component({
  selector: 'app-getster-category-admin',
  templateUrl: './getster-category-admin.component.html',
  styleUrls: ['./getster-category-admin.component.css']
})
export class GetsterCategoryAdminComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select',  'username'];
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
    this.selection.selected.forEach(s => console.log(s.username));
  }
}
