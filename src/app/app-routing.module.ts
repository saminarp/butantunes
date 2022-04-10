import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuardAuthService } from "../app/guard-auth.service";
import { NewReleasesComponent } from "./new-releases/new-releases.component";
import { ArtistDiscographyComponent } from "./artist-discography/artist-discography.component";
import { AlbumComponent } from "./album/album.component";
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "new-releases",
    component: NewReleasesComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: "artist/:id",
    component: ArtistDiscographyComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: "album/:id",
    component: AlbumComponent,
    canActivate: [GuardAuthService],
  },
  { path: "about", component: AboutComponent, canActivate: [GuardAuthService] },
  {
    path: "search",
    component: SearchResultComponent,
    canActivate: [GuardAuthService],
  },
  {
    path: "favourites",
    component: FavoritesComponent,
    canActivate: [GuardAuthService],
  },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/new-releases", pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
