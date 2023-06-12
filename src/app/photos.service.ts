import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface response {
  urls: {
    regular: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}
  getPhotos() {
    return this.http.get<response>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 0TK7YrISb8fx7A9zLF5go6eOpfDv1Jm9Km-zu5BgKLY',
      },
    });
  }
}
// https://api.unsplash.com/photos/?client_id=0TK7YrISb8fx7A9zLF5go6eOpfDv1Jm9Km-zu5BgKLY
