import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-drawer',
  templateUrl: './header-drawer.component.html',
  styleUrls: ['./header-drawer.component.css']
})
export class HeaderDrawerComponent implements OnInit {

  
  @Output() sidenavClose = new EventEmitter();
 
 
  constructor() {
  }
 
  ngOnInit() {
  
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 
}
