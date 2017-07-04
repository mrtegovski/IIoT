import { Component, OnInit, ViewChild } from '@angular/core';
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
import { MdSidenav } from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MdSidenav;
  public hideLoader: boolean = false;

  constructor(private router: Router, private activRout: ActivatedRoute) {

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
    }
    if (event instanceof NavigationError) {
      this.hideLoader = false;
    }
  }

  toggleNav(){
    console.log(this.sidenav);
  }

  ngOnInit() {
  }

}
