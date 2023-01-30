
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbunsService } from './../../services/albuns/albuns.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albuns = [];
  album;
  constructor(
    private albumService: AlbunsService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.getAlbuns();
  }
  getAlbuns() {
    this.albuns = this.albumService.getAlbuns();
  }
  goAlbum(album: string) {
    this.album = album
    this.router.navigate(['/album', this.album]);
  }

}
