/*********************************************************************************
 * WEB422 – Assignment 04
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students. *
 * Name: Samina Rahman Purba Student ID: 101855203 Date: 26/03/2022
 * Netlify Link:  https://sambutan.netlify.app/new-releases
 * ********************************************************************************/

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  title = "Seneca Music";
  searchString: string = "";
  ngOnInit(): void {}
  handleSearch() {
    this.router.navigate(["/search"], {
      queryParams: { q: this.searchString },
    });
    this.searchString = "";
  }
}
