import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  toggleMenu = false;

  constructor() {
  }

  ngOnInit(): void {
   
  }
  
  onToggle() {
    this.toggleMenu = !this.toggleMenu;
  }

  
}