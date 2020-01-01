import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  topArtists: Array<Artist>;
  
  constructor(private spotifyService: SpotifyService) {}

  getUserInfo() {
    this.spotifyService.getUserInfo().subscribe(user => this.user = user);
  }

  getTopArtists() {
    this.spotifyService.getTopArtists().subscribe((artists: any) => {
      this.topArtists = artists.items;
      console.log(this.topArtists);
    });
  }

  ngOnInit() {
    this.spotifyService.getAccessToken();
    this.getUserInfo();
    this.getTopArtists();
  }
}
