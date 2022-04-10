/*********************************************************************************
 * WEB422 – Assignment 06
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students. *
 * Name: Samina Rahman Purba Student ID: 101855203 Date: 26/03/2022
 * Netlify Link:  https://sambutan.netlify.app/new-releases
 * ********************************************************************************/

 import { Component, OnInit } from "@angular/core";
 import { NavigationStart, Router, Event } from "@angular/router";
 import { AuthService } from "../app/auth.service";
 @Component({
   selector: "app-root",
   templateUrl: "./app.component.html",
   styleUrls: ["./app.component.css"],
 })
 export class AppComponent implements OnInit {
   constructor(private router: Router, private auth: AuthService) {}
 
   title = "web422-a6";
   searchString: string = "";
   token: any;
 
   ngOnInit(): void {
     this.router.events.subscribe((event: Event) => {
       if (event instanceof NavigationStart) {
         this.token = this.auth.readToken();
       }
     });
   }
 
   handleSearch() {
     this.router.navigate(["/search"], {
       queryParams: { q: this.searchString },
     });
     this.searchString = "";
   }
 
   logout(): void {
     localStorage.clear();
     this.router.navigate(["/login"]);
   }
 }
 