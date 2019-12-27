import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topArtists = [];
  
  constructor(private spotifyService: SpotifyService) {}

  getTopArtists() {
    this.spotifyService.getTopArtists().subscribe(data => this.topArtists = data.items);
  }

  ngOnInit() {
    this.spotifyService.getAccessToken();
  }
}
