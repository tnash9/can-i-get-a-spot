import { SimplifiedAlbum } from './album';
import { SimplifiedArtist } from './artist';
import { ExternalId } from './external_id';
import { ExternalUrls } from './external-urls';

export class Track {
  album: SimplifiedAlbum;
  artists: Array<SimplifiedArtist>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalId;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: TrackLink;
  restrictions: { "reason" : string };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;

  constructor(json: JSON) {
    Object.assign(this, json);
  }
}

export class SimplifiedTrack {
  artists: Array<SimplifiedArtist>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: TrackLink;
  restrictions: { "reason" : string };
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;

  constructor(json: JSON) {
    Object.assign(this, json);
  }
}

export class TrackLink {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;

  constructor(json: JSON) {
    Object.assign(this, json);
  }
}