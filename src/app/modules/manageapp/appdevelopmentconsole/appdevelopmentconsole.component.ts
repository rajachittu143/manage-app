import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from 'src/app/shared/components/logout/logout.component';

@Component({
  selector: 'app-appdevelopmentconsole',
  templateUrl: './appdevelopmentconsole.component.html',
  styleUrls: ['./appdevelopmentconsole.component.scss']
})
export class AppdevelopmentconsoleComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  toggleMenu = false;
  
  onToggle() {
    this.toggleMenu = !this.toggleMenu;
  }
  
  appDevelopmentConsoleForm: FormGroup = new FormGroup({});
  tabName: string = "AppForUser";

  constructor() { }

  ngOnInit(): void {

  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
    
  }

  tabNames: string = "PWA Apps for Users";
  btnAppForUser(){
    this.tabName = "AppForUser";
    this.tabNames = "PWA Apps for Users";
  }

  btnAppForGetster(){
    this.tabName = "AppForGetsters";
    this.tabNames = "Apps for GETSTERs";
  }

  btnLaunchScreenImage(){
    this.tabName = "LaunchScreenimages";
    this.tabNames = "Launch Screen Images";
  }

  btnConsoleUser(){
    this.tabName = "ConsoleUser";
    this.tabNames = "Console Users";
  }

  btnAuditTrail(){
    this.tabName = "AuditTrail";
    this.tabNames = "Audit Trail";
  }


  onSubmit(event: any) {
    if (event.submitter.name == "AppForUser") {
      this.tabName = "AppForUser";
    } else if (event.submitter.name == "AppForGetsters") {
      this.tabName = "AppForGetsters";
    } else if (event.submitter.name == "LaunchScreenimages") {
      this.tabName = "LaunchScreenimages";
    } else if (event.submitter.name == "ConsoleUser") {
      this.tabName = "ConsoleUser";
    } else if (event.submitter.name == "AuditTrail"){
      this.tabName = "AuditTrail";
    }

    // this.appDevelopmentConsoleForm = new FormGroup({
    // });

  }

  public getColor(status: string): string {
    if (this.tabName == status) {
      return "#9A9A9A"
    } else {
      return "#3366FF"
    }
    // return status != "FAIL" ? "green" : "red";
  }
  


}
