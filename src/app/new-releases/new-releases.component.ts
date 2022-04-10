import { Component, OnInit, OnDestroy } from "@angular/core";
import { MusicDataService } from "../music-data.service";

@Component({
  selector: "app-new-releases",
  templateUrl: "./new-releases.component.html",
  styleUrls: ["./new-releases.component.css"],
})
export class NewReleasesComponent implements OnInit, OnDestroy {
  constructor(private data: MusicDataService) {}
  releases: Array<any> = [];
  private newReleasesSub: any;

  ngOnInit(): void {
    this.newReleasesSub = this.data
      .getNewReleases()
      .subscribe((result) => (this.releases = result.albums.items));
  }

  ngOnDestroy(): void {
    this.newReleasesSub?.unsubscribe();
  }
}
