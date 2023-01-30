
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbunsService } from './../../services/albuns/albuns.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() openCloseSidenav = true;
  nameAlbuns = [];
  album;
  constructor(
    private albunsService: AlbunsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAlbuns()
  }
  getAlbuns() {
    this.nameAlbuns = this.albunsService.getAlbuns().map(album => album.name)
  }
  goAlbum(album: string) {
    this.album = album
    this.router.navigate(['/album', this.album]);
  }
}
