import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';
@Component({
  selector: 'app-show-photo',
  templateUrl: './show-photo.component.html',
  styleUrls: ['./show-photo.component.css'],
})
export class ShowPhotoComponent {
  urlFromsite: string = '';
  constructor(private getpoto: PhotosService) {
    this.getpoto.getPhotos().subscribe((response) => {
      this.fetchPhotoFromSite();
    });
  }
  onClick() {
    this.getpoto.getPhotos().subscribe((response) => {
      this.fetchPhotoFromSite();
    });
  }
  fetchPhotoFromSite() {
    this.getpoto.getPhotos().subscribe((response) => {
      this.urlFromsite = response.urls.regular;
    });
  }
}
