import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { RegistrationService } from 'src/app/core/http/registration/registration.service';
import { AppLoaderService } from 'src/app/shared/services/app-loader/app-loader.service';

@Component({
  selector: 'app-registerface',
  templateUrl: './registerface.component.html',
  styleUrls: ['./registerface.component.css']
})
export class RegisterfaceComponent implements OnInit {

  errorMsg = '';
  hide: any;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  registrationForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private registrationService: RegistrationService,
    private loader: AppLoaderService,
    private snackBar: MatSnackBar,) { }

  firstName: any;
  lastName: any;
  ngOnInit(): void {
    this.firstName = this.route.snapshot.params['firstName'];
    this.lastName = this.route.snapshot.params['lastName']
    
    let password = new FormControl('', Validators.required);
    let confirmPassword = new FormControl('', Validators.required);
    this.registrationForm = new FormGroup({
      password: password,
      confirmPassword: confirmPassword,
      phone: new FormControl('', [
        Validators.required
      ]),
    });
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  bodyData: any;
  registerGetster() {
    // if (!this.signupForm.invalid) {
    this.loader.open();
    this.bodyData = {
      'firstName': this.firstName,
      'lastName': this.lastName,
      "mobileNo": this.registrationForm.value.phone.e164Number,
      "password": this.registrationForm.value.password,
      "faceRecognition": "",
      "categoryName": ""
    }

    this.registrationService.insertMaster(this.bodyData).subscribe(res => {
      this.snackBar.open('Registred Successfully!', 'OK', { duration: 4000 });
      this.router.navigate(['/manage-app/login'])
      .then(() => {
        // window.location.reload();
      });
      this.registrationForm.reset();
      this.loader.close();
    }, err => {
      this.loader.close();
      this.registrationForm.reset();
      this.snackBar.open(err.error.text, 'OK', { duration: 4000 });
    });

  }
}
