import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from "@angular/material";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public hideLoader: boolean = false;
  @ViewChild("sidenav") sidenav: MdSidenav

  constructor() {}
  ngOnInit() {}

}
