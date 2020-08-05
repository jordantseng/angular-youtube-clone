import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  videos = [];
  selectedVideo = null;

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit() {
    // default search
    this.searchVideos('javascript');
  }

  searchVideos(term: string) {
    this.youtubeService.searchVideos(term).subscribe(({ items }) => {
      this.videos = items;
      this.selectedVideo = items[0];
    });
  }

  onVideoSelect(video) {
    this.selectedVideo = video;
  }
}
