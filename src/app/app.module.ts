/*********************************************************************************
 * WEB422 – Assignment 06
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students. *
 * Name: Samina Rahman Purba Student ID: 101855203 Date: 26/03/2022
 * Netlify Link:  https://sambutan.netlify.app/new-releases
 * ********************************************************************************/
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NewReleasesComponent } from "./new-releases/new-releases.component";
import { AlbumComponent } from "./album/album.component";
import { ArtistDiscographyComponent } from "./artist-discography/artist-discography.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { InterceptTokenService } from "../app/intercept-token.service";


 @NgModule({
   declarations: [
     AppComponent,
     AboutComponent,
     NotFoundComponent,
     NewReleasesComponent,
     AlbumComponent,
     ArtistDiscographyComponent,
     SearchResultComponent,
     FavoritesComponent,
     RegisterComponent,
     LoginComponent,
   ],
   imports: [
     BrowserModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     MatIconModule,
     MatSidenavModule,
     MatProgressBarModule,
     MatMenuModule,
     MatToolbarModule,
     MatListModule,
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatCardModule,
     MatChipsModule,
     FlexLayoutModule,
     HttpClientModule,
     FormsModule,
     MatSnackBarModule,
   ],
   providers: [
     {
       provide: HTTP_INTERCEPTORS,
       useClass: InterceptTokenService,
       multi: true,
     },
   ],
   bootstrap: [AppComponent],
 })
 export class AppModule {}
 