export class Paging<T> {
  href: string;
  items: Array<T>;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;

  constructor(json: JSON) {
    Object.assign(this, json);
  }
}