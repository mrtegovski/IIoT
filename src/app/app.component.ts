import { Component } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hiddeLoader: boolean = false;

  constructor(private router: Router) {

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    debugger;
    if (event instanceof NavigationStart) {
      this.hiddeLoader = false;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => this.hiddeLoader = true, 100);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.hiddeLoader = false;
    }
    if (event instanceof NavigationError) {
      this.hiddeLoader = false;
    }

  }
}
