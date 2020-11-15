import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Album, User } from '../types/server';

/**
 *  Data requests on route: /users
 */

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  readonly BASE_URL = `/users`;

  constructor(
    private http: HttpClient
  ) { }

  public async getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.BASE_URL).toPromise();
  }

  public async getAlbumsByUser(id: number): Promise<Album[]> {
    const url = `${this.BASE_URL}/${id}/albums`;

    return this.http.get<Album[]>(url).toPromise();
  }

}
