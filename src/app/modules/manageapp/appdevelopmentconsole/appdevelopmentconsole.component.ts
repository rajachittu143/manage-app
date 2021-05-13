import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appdevelopmentconsole',
  templateUrl: './appdevelopmentconsole.component.html',
  styleUrls: ['./appdevelopmentconsole.component.css']
})
export class AppdevelopmentconsoleComponent implements OnInit {

  appDevelopmentConsoleForm: FormGroup = new FormGroup({});
  tabName: string = "AppForUser";

  constructor() { }

  ngOnInit(): void {
  
  }

  onSubmit(event:any) {
    if (event.submitter.name == "AppForUser") {
      this.tabName = "AppForUser";
    }
    else if (event.submitter.name == "AppForGetsters") {
      this.tabName = "AppForGetsters";
    } else if (event.submitter.name == "LaunchScreenimages") {
      this.tabName = "LaunchScreenimages";
    } else if(event.submitter.name == "ConsoleUser"){
      this.tabName = "ConsoleUser";
    }

    // this.appDevelopmentConsoleForm = new FormGroup({
    // });

  }

  public getColor(status: string): string {
    if (this.tabName == status) {
      return "#9A9A9A"
    }else {
      return "#3366FF"
    }
    // return status != "FAIL" ? "green" : "red";
  }

}
