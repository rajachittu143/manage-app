import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-registerface',
  templateUrl: './registerface.component.html',
  styleUrls: ['./registerface.component.css']
})
export class RegisterfaceComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({});
  errorMsg = '';
  hide: any;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  signinForm!: FormGroup;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required),
      phone: new FormControl(undefined, [Validators.required]),
    });
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }


  register() {
  }

}
