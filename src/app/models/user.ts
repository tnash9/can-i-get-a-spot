import { ExplicitContent } from './explicit-content';
import { ExternalUrls } from './external-urls';
import { Followers } from './followers';
import { Image } from './image';

export class User {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Array<Image>;
  product: string;
  type: string;
  uri: string;

  constructor(json: JSON) {
    Object.assign(this, json);
  }
}