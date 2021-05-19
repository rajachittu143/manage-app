import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  username: string;
  userid: string;
  bizid:string;
  bizname:string;
  appid:string;
  appname:string;
  logindata:string;
  logintime:string;
  logouttime:string;
  logoutdate:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {username: 'RamSundar',userid:'u2021051',bizid:'',bizname:'',appid:'',appname:'',logindata:'',logintime:'',logouttime:'',logoutdate:''},
  {username: 'RamSundar',userid:'u2021051',bizid:'',bizname:'',appid:'',appname:'',logindata:'',logintime:'',logouttime:'',logoutdate:''},
  {username: 'RamSundar',userid:'u2021051',bizid:'',bizname:'',appid:'',appname:'',logindata:'',logintime:'',logouttime:'',logoutdate:''},
  {username: 'RamSundar',userid:'u2021051',bizid:'',bizname:'',appid:'',appname:'',logindata:'',logintime:'',logouttime:'',logoutdate:''},
  {username: 'RamSundar',userid:'u2021051',bizid:'',bizname:'',appid:'',appname:'',logindata:'',logintime:'',logouttime:'',logoutdate:''},
  {username: 'RamSundar',userid:'u2021051',bizid:'',bizname:'',appid:'',appname:'',logindata:'',logintime:'',logouttime:'',logoutdate:''},
  {username: 'RamSundar',userid:'u2021051',bizid:'',bizname:'',appid:'',appname:'',logindata:'',logintime:'',logouttime:'',logoutdate:''},
  {username: 'RamSundar',userid:'u2021051',bizid:'',bizname:'',appid:'',appname:'',logindata:'',logintime:'',logouttime:'',logoutdate:''},
  {username: 'RamSundar',userid:'u2021051',bizid:'',bizname:'',appid:'',appname:'',logindata:'',logintime:'',logouttime:'',logoutdate:''},
  ];
@Component({
  selector: 'app-user-login-session-data',
  templateUrl: './user-login-session-data.component.html',
  styleUrls: ['./user-login-session-data.component.css']
})
export class UserLoginSessionDataComponent implements OnInit {

  selected_users = 'alluser';
  selected_business = 'All Businesses';
  selected_apps = 'All Apps';
  selected_login_session = 'Login Session Date/Time';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select',  'username', 'userid', 'bizid','bizname','appid','appname','logindata','logintime','logouttime','logoutdate'];
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
