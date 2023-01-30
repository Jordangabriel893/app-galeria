import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotosService } from '../../services/photos/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  album;
  photos = [];
  constructor(
    private photosService: PhotosService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.album = this.route.snapshot.params['id'];
    this.getPhotos()
  }

  getPhotos() {
    this.photos = this.photosService.getPhotos();
  }
  goHome() {
    this.router.navigate(['/home']);
  }
}
