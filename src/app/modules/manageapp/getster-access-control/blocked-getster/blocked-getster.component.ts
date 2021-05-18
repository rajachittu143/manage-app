import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  username: string;
  position: number;
  userid:string;
  getster_category:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, username: 'RamSundar',userid:'u2021051',getster_category:'Customer'},
  {position: 2, username: 'Shyam S',userid:'u2021051',getster_category:'Employe'},
  {position: 3, username: 'Lal T',userid:'u2021051',getster_category:'Supplier'},
  {position: 4, username: 'Gopal',userid:'u2021051',getster_category:'Driver'},
];

@Component({
  selector: 'app-blocked-getster',
  templateUrl: './blocked-getster.component.html',
  styleUrls: ['./blocked-getster.component.css']
})
export class BlockedGetsterComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select',  'username', 'userid', 'getster_category'];
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
