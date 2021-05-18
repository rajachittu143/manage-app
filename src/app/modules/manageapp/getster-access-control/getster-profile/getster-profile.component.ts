import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';

export interface PeriodicElement {
  username: string;
  position: number;
  userid:string;
  getster_category:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, username: 'RamSundar',userid:'u2021051',getster_category:'Customer'},
];

@Component({
  selector: 'app-getster-profile',
  templateUrl: './getster-profile.component.html',
  styleUrls: ['./getster-profile.component.css']
})
export class GetsterProfileComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['select',  'username', 'userid', 'getster_category'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  userProfileForm!: FormGroup;

  constructor()
  {
    // this.paginator =  MatPaginator;
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.userProfileForm = new FormGroup({
      phone: new FormControl(undefined, [Validators.required]),
    });
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
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

