import { Component, ViewChild } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  ActivatedRoute
} from '@angular/router';
import { AppComponent } from "app/app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  public hideLoader: boolean = false;

  constructor(
    private router: Router,
    private activRout: ActivatedRoute,
    private ac: AppComponent) {

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.hideLoader = false;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => this.hideLoader = true, 100);
    }
    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.hideLoader = false;
      console.log(this.hideLoader);
    }
    if (event instanceof NavigationError) {
      this.hideLoader = false;
    }
  }
  toggleNav(){
    this.ac.sidenav.toggle();
  }
}
