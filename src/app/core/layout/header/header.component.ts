import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LogoutDialogService } from 'src/app/shared/components/logout/login.dialog.service';
import { LogoutComponent } from 'src/app/shared/components/logout/logout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  // form: FormGroup;
  @ViewChild('message') message!: ElementRef;

  toggleMenu = false;

  constructor(
    public dialogService:LogoutDialogService,
    public dialog: MatDialog,
    private translateService: TranslateService,
    private router: Router) {
    translateService.setDefaultLang('english');
  }

  loginPage: any;
  ngOnInit(): void {
    this.loginPage = localStorage.getItem("page");
  }

  onToggle() {
    this.toggleMenu = !this.toggleMenu;
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
    localStorage.setItem('language', language);
  }

  onShare() {
    if (navigator.share) {
      navigator.share({
        title: 'Share Via',
        text: 'This is the text which I will be sharing!',
        url: "http://getbiz.app"
      }).then(() => {
        console.log("Called!");
        (<HTMLElement>this.message.nativeElement).innerHTML = "Called!";
      }).catch(error => {
        console.log('Error sharing:', error);
        (<HTMLElement>this.message.nativeElement).innerHTML = "Error: " + error;
      });
    } else {
      console.error('navigator.share API not supported by the browser!');
      (<HTMLElement>this.message.nativeElement).innerHTML = "navigator.share API not supported by the browser!";
    }
  }

  logOut(){
    localStorage.setItem("page","0");
    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
  }


  onBackPress() {
    var data = null;//call api
    this.dialogService.openModal("Title1","Message Test", ()=>{
      //confirmed
      console.log('Yes');
    }, ()=>{
      //not confirmed
      console.log('No');
    });
    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = {
    //     id: 1,
    //     title: 'Angular For Beginners'
    // };

    // const dialogRef = this.dialog.open(DialogTemplateComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

}