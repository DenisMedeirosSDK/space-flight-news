import { randomUUID } from 'crypto';

export class Articles {
  _id: string;
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: [
    {
      id: string;
      provider: string;
    }
  ];
  events: [
    {
      id: string;
      provider: string;
    }
  ];

  constructor(_id?: string) {
    this._id = _id ?? randomUUID();
  }
}
