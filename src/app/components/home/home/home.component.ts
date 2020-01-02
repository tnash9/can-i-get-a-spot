import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';
import { Artist } from 'src/app/models/artist';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  topArtists: Array<Artist>;
  topTracks: Array<Track>;
  
  constructor(private spotifyService: SpotifyService) {}

  getUserInfo() {
    this.spotifyService.getUserInfo().subscribe(user => this.user = user);
  }

  getTopArtists() {
    this.spotifyService.getTopArtists().subscribe((artists: any) => this.topArtists = artists.items);
  }

  getTopTracks() {
    this.spotifyService.getTopTracks().subscribe((tracks: any) => this.topTracks = tracks.items);
  }

  getTrackTitle(track: Track): string {
    return track.name.toLowerCase().includes('feat') ? track.name.slice(0, track.name.indexOf('(')) : track.name;
  }

  concatArtistList(artists: Array<Artist>): string {
    let artistsList: string = '';

    for (let i = 0; i < artists.length - 1; i++) {
      artistsList += !artists[i].name.toLowerCase().includes('record') ? `${artists[i].name} | ` : '';
    }

    artistsList += artists[artists.length - 1].name;

    return artistsList;
  }

  ngOnInit() {
    this.spotifyService.getAccessToken();
    this.getUserInfo();
    this.getTopArtists();
    this.getTopTracks();
  }
}
