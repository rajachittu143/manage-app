import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleserviceService } from './core/http/title/titleservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  // title = 'market-place';

  appTitle = 'dltk';
  pageTitle = '';
  pageDescription = '';
  pagekeyWord = '';

  constructor(
    private meta: Meta,
    public title: Title,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private routePartsService: TitleserviceService,
    // private iconService: UILibIconService,
    //  private logger: NGXLogger
  ) {
    // this.logger.debug('api hits');
    // this.logger.debug('Multiple', 'Argument', 'support');
    // this.logger.error('Error message');
    // iconService.init()
  }

  ngOnInit() {
    this.changePageTitle();
    this.changePageDescription();
    this.changePagekeyWord();
  }

  ngAfterViewInit() {
  }

  changePageTitle() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange:any) => {
      const routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
      if (!routeParts.length) {
        return this.title.setTitle(this.appTitle);
      }
      // Extract title from parts;
      this.pageTitle = routeParts
      .reverse()
      .map((part) => part.title )
      .reduce((partA, partI) => {return `${partA}`});
      this.title.setTitle(this.pageTitle);

    });
  }

  changePageDescription() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange:any) => {
      const routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
      if (!routeParts.length) {
        return this.title.setTitle(this.appTitle);
      }

      this.pageDescription = routeParts
      .reverse()
      .map((part1) => part1.description )
      .reduce((partB, partI) => {return `${partB}`});
      this.meta.updateTag(
        { name: 'description', content: this.pageDescription }
      );

    });
  }

  changePagekeyWord() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange:any) => {
      const routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
      if (!routeParts.length) {
        return this.title.setTitle(this.appTitle);
      }
     
      this.pagekeyWord = routeParts
      .reverse()
      .map((part2) => part2.keywords)
      .reduce((partC, partI) => {return `${partC}`});
      this.meta.updateTag(
        { name: 'keywords', content: this.pagekeyWord }
      );

    });
  }
}


