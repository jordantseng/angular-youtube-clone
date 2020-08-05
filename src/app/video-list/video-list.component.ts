import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  @Output() videoSelected = new EventEmitter();

  @Input() videos;

  ngOnInit(): void {}

  onVideoClick(video) {
    this.videoSelected.emit(video);
  }
}
