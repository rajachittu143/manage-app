import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  username: string;
  position: number;
  userid: string;
  mobileno: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, username: 'Kirshna Kumar', userid: 'u20121503', mobileno: '+91 8587216578'},
  {position: 2, username: 'Manigandan J', userid: 'u20112312', mobileno: '+91 9387452198'},
  {position: 3, username: 'Kirshna Kumar', userid: 'u20121503', mobileno: '+91 8587216578'},
  {position: 4, username: 'Kirshna Kumar', userid: 'u20121503', mobileno: '+91 8587216578'},
  
];


@Component({
  selector: 'app-consoleuser',
  templateUrl: './consoleuser.component.html',
  styleUrls: ['./consoleuser.component.css']
})
export class ConsoleuserComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'position', 'username', 'userid', 'mobileno'];
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
