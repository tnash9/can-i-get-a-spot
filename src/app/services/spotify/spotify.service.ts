import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/user';
import { Artist } from 'src/app/models/artist';
import { Track } from 'src/app/models/track';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private auth_token: string = null;
  private env = environment;
  public AUTH_API_ENDPOINT = this.env.auth_api;
  public SPOTIFY_API_ENDPOINT = this.env.base_api;

  constructor(private httpClient: HttpClient) {}

  authorizeUser() {
    // authorize user if no token
    if (!this.auth_token) {
      const scopes = ['user-read-private', 'user-read-email'];
      let auth = `${this.AUTH_API_ENDPOINT}?client_id=${this.env.client_id}&scope=${scopes.join('%20')}&response_type=token&redirect_uri=${this.env.base_url}/home`;
      window.location.href = auth;
    }
  }

  getAccessToken() {
    // get the hash of the url
    const hash: any = window.location.hash.substring(1).split('&').reduce((initial, item) => {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }

      return initial;
    }, {});
    window.location.hash = '';

    // set token
    this.auth_token = hash.access_token;
  }

  getUserInfo(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth_token}`
      })
    };

    return this.httpClient.get<User>(`${this.SPOTIFY_API_ENDPOINT}/me`, httpOptions);
  }

  getTopArtists(): Observable<Array<Artist>> {
    const httpOptions = {
      params: new HttpParams().set('limit', '10'),
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth_token}`
      })
    };

    return this.httpClient.get<Array<Artist>>(`${this.SPOTIFY_API_ENDPOINT}/me/top/artists`, httpOptions);
  }

  getTopTracks(): Observable<Array<Track>> {
    const httpOptions = {
      params: new HttpParams().set('limit', '10'),
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth_token}`
      })
    };

    return this.httpClient.get<Array<Track>>(`${this.SPOTIFY_API_ENDPOINT}/me/top/tracks`, httpOptions);
  }
}
