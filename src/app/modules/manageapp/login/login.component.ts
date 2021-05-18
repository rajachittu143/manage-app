import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
//imported here just for type checking. Optional
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ForgetPasswordComponent } from 'src/app/shared/components/forget-password/forget-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      phone: new FormControl(undefined, [Validators.required]),
    });
  }

  signin() {
  }


  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }

  forgetPasswordDialog(): void {
    const dialogRef = this.dialog.open(ForgetPasswordComponent, {
      width: '666px',
      height: '353px',
      // data: { useCase: useCase },
      // position: {
      //   top: '72px',
      //   right: '21px'
      // }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "close") {
        // window.location.reload();
        // this.router.navigate(['/market-place/my-bag']);
      } else if (result === "checkout") {
        // this.router.navigate(['/market-place/payment']);
      } else {
        return;
      }
    });
  }

}
