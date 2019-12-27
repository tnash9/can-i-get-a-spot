import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title: string = 'Can I Get A Spot';
  
  constructor(private spotifyService: SpotifyService) {}

  authorizeUser() {
    this.spotifyService.authorizeUser();
  }

  ngOnInit() {}
}
