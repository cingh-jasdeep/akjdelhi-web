import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { GurbaniTuksHeaderComponent } from './gurbani-tuks-header/gurbani-tuks-header.component';
import { LiveSectionComponent } from './live-section/live-section.component';
import { UpcomingSectionComponent } from './upcoming-section/upcoming-section.component';
import { RecordingsSectionComponent } from './recordings-section/recordings-section.component';
import { MatButtonModule } from '@angular/material/button';
import { MediaBoxComponent } from './media-box/media-box.component';


@NgModule({
  declarations: [
    AppComponent,
    GurbaniTuksHeaderComponent,
    LiveSectionComponent,
    UpcomingSectionComponent,
    RecordingsSectionComponent,
    MediaBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
