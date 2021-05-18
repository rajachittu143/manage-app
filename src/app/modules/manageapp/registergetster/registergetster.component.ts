import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registergetster',
  templateUrl: './registergetster.component.html',
  styleUrls: ['./registergetster.component.css']
})
export class RegistergetsterComponent implements OnInit {

  

  errorMsg = '';
  hide: any;
  registerGetsterForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerGetsterForm = new FormGroup({
      username: new FormControl('', Validators.required),
    });
  }

  registerGetster() {
  }

}
