import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
//imported here just for type checking. Optional
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { LoginService } from 'src/app/core/http/login/login.service';
import { ForgetPasswordComponent } from 'src/app/shared/components/forget-password/forget-password.component';
import { AppLoaderService } from 'src/app/shared/services/app-loader/app-loader.service';

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

  constructor(
    private router:Router,
    private dialog: MatDialog,
    private loginService: LoginService,
    private loader: AppLoaderService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    localStorage.setItem("page",'0');
    this.signinForm = new FormGroup({
      phone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  signin() {
    this.loader.open();
    let username = this.signinForm.value.phone.e164Number;
    let password = this.signinForm.value.password;

    let loginBody = {
      "mobileNo": username,
      "password": password
    }

    this.loginService.signin(loginBody).subscribe(res => {
      this.snackBar.open('Login Successfully!', 'OK', { duration: 4000 });
      localStorage.setItem("page","1");
      this.router.navigate(['/manage-app/manageapphome'])
      .then(() => {
        window.location.reload();
      });
      this.loader.close();
    }, err => {
      this.loader.close();
      this.snackBar.open(err.error.text, 'OK', { duration: 4000 });
    });
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
