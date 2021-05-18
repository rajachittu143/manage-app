import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerface',
  templateUrl: './registerface.component.html',
  styleUrls: ['./registerface.component.css']
})
export class RegisterfaceComponent implements OnInit {

  registrationForm: FormGroup = new FormGroup({});
  errorMsg = '';
  hide: any;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repassword: new FormControl('', Validators.required)
    });
  }

  register() {
  }

}
