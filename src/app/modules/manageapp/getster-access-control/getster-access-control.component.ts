import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-getster-access-control',
  templateUrl: './getster-access-control.component.html',
  styleUrls: ['./getster-access-control.component.css']
})
export class GetsterAccessControlComponent implements OnInit {

  getsterAccessControlForm: FormGroup = new FormGroup({});
  tabName: string = "NewGetster";

  constructor() { }

  ngOnInit(): void {
  
  }

  onSubmit(event:any) {
    if (event.submitter.name == "NewGetster") {
      this.tabName = "NewGetster";
    }
    else if (event.submitter.name == "ExistingGetster") {
      this.tabName = "ExistingGetster";
    } else if (event.submitter.name == "BlockedGetster") {
      this.tabName = "BlockedGetster";
    } else if(event.submitter.name == "GetsterProfile"){
      this.tabName = "GetsterProfile";
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