import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
})
export class VideoDetailComponent implements OnInit {
  @Input() selectedVideo;

  constructor() {}

  ngOnInit(): void {
    // youtube-player
    // const tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';
    // document.body.appendChild(tag);
  }
}
