import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SearchVideosRes {
  items: {
    id: { videoId: string };
    snippet: {
      publishedAt: Date;
      title: string;
      description: string;
      thumbnails: {
        default: {};
        medium: {};
        hight: {};
      };
    };
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private baseUrl = 'https://www.googleapis.com/youtube/v3';
  private KEY = 'AIzaSyBgBtBLlU4Qa5wOK1rXcOq5cxgeh5ji5lY';

  constructor(private http: HttpClient) {}

  searchVideos(term: string) {
    return this.http.get<SearchVideosRes>(`${this.baseUrl}/search`, {
      params: {
        part: 'snippet',
        key: this.KEY,
        q: term,
      },
    });
  }
}
