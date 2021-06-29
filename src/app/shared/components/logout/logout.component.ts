import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogoutDialogService } from './login.dialog.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  signinForm!: FormGroup

  ngOnInit(): void {
  }

  modalTitle: string;
  modalMessage: string;
  modalType:ModalType = ModalType.INFO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
    this.modalType = data.type;
    
    console.log(data)
  }

}
export enum ModalType {
  INFO = 'info',
  WARN = 'warn'
}
