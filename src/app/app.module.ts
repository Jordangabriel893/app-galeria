import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavComponent } from './components/nav/nav.component';
import { AlbumComponent } from './components/album/album.component';
import { HomeComponent } from './components/home/home.component';

import { AlbunsService } from './services/albuns/albuns.service';
import { PhotosService } from './services/photos/photos.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    SidenavComponent,
    NavComponent,
    AlbumComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlbunsService, PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
