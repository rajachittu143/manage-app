import { Component, EventEmitter, OnInit, Output,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-menu-appdevelopment-console',
  templateUrl: './menu-appdevelopment-console.component.html',
  styleUrls: ['./menu-appdevelopment-console.component.css']
})
export class MenuAppdevelopmentConsoleComponent implements OnInit {
  
  ngOnInit() {
   
  }
 
  mobileQuery: MediaQueryList;

  fillerNav = Array(5).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array(2).fill(0).map(() =>
      `Open side nav, and click on any navigation to close the opened side nav.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
