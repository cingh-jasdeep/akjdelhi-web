import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { GurbaniTuksHeaderComponent } from './components/gurbani-tuks-header/gurbani-tuks-header.component';
import { UpcomingSectionComponent } from './components/upcoming-section/upcoming-section.component';
import { MatButtonModule } from '@angular/material/button';
import { MediaBoxComponent } from './components/media-box/media-box.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MediaSectionComponent } from './components/media-section/media-section.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    GurbaniTuksHeaderComponent,
    UpcomingSectionComponent,
    MediaBoxComponent,
    MediaSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
