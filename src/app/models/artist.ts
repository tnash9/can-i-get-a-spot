import { ExternalUrls } from './external-urls';
import { Followers } from './followers';
import { Image } from './image';

export class Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  popularity: number;
  type: string;
  uri: string;

  constructor(json: JSON) {
    Object.assign(this, json);
  }
}

export class SimplifiedArtist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;

  constructor(json: JSON) {
    Object.assign(this, json);
  }
}