import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoListComponent,
    VideoItemComponent,
    VideoDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
