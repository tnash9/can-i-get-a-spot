import { SimplifiedArtist } from './artist';
import { Copyright } from './copyright';
import { ExternalId } from './external_id';
import { ExternalUrls } from './external-urls';
import { Image } from './image';
import { SimplifiedTrack } from './track';
import { Paging } from './paging';

export class Album {
  album_type: string;
  artists: Array<SimplifiedArtist>;
  available_markets: Array<string>;
  copyrights: Array<Copyright>;
  external_ids: ExternalId;
  external_urls: ExternalUrls;
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<Image>;
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  restrictions: { "reason": string };
  tracks: Paging<SimplifiedTrack>;
  type: string;
  uri: string;

  constructor(json: JSON) {
    Object.assign(this, json);
  }
}

export class SimplifiedAlbum {
  album_group: string;
  album_type: string;
  artists: Array<SimplifiedArtist>;
  available_markets: Array<string>;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: { "reason": string };
  type: string;
  uri: string;

  constructor(json: JSON) {
    Object.assign(this, json);
  }
}