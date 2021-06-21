import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  appname: string;
  appid:string;
  bizcategory:string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, appname: 'Enquiry App',appid:'a20040531',bizcategory:'Corrugated Packaging' },
  { position: 1, appname: 'Enquiry App1',appid:'a20040532',bizcategory:'Corrugated Packaging' },
  { position: 1, appname: 'Enquiry App2',appid:'a20040533',bizcategory:'Corrugated Packaging' },
  { position: 1, appname: 'Enquiry App3',appid:'a20040534',bizcategory:'Corrugated Packaging' },
  { position: 1, appname: 'Enquiry App4',appid:'a20040535',bizcategory:'Corrugated Packaging' },
];

@Component({
  selector: 'app-reason-business-category',
  templateUrl: './reason-business-category.component.html',
  styleUrls: ['./reason-business-category.component.css']
})
export class ReasonBusinessCategoryComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select', 'appname','appid','bizcategory'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }

  ngOnInit(): void {
    
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
    this.selection.selected.forEach(s => console.log(s.appname));
  }
}
