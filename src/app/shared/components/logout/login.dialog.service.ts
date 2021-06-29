import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogoutComponent } from './logout.component';

@Injectable({
  providedIn: 'root'
})
export class LogoutDialogService {

  constructor(public dialog: MatDialog) { }

  openModal(title:string, message:string, yes:Function, no:Function) {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        title: title,
        message:message
    };
    dialogConfig.minWidth = 300;

    const dialogRef = this.dialog.open(LogoutComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        if(yes){
          yes();
        }
      }else{
        if(no){
          no();
        }
      }
        
    });
  }


}