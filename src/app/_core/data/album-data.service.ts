import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { environment } from 'src/environments/environment';
import { Photo } from '../types/server';

/**
 *  Data requests on route: /albums
 */

@Injectable({
  providedIn: 'root'
})
export class AlbumDataService {

  readonly BASE_URL = `/albums`;

  constructor(
    private http: HttpClient
  ) { }

  public async getPhotosByAlbum(id: number): Promise<Photo[]> {
    const url = `${this.BASE_URL}/${id}/photos`;

    return this.http.get<Photo[]>(url).toPromise();
  }

}
