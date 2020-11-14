import { Component, OnInit } from '@angular/core';
import { AlbumDataService } from '../_core/data/album-data.service';
import { UserDataService } from '../_core/data/user-data.service';
import { Album, Photo, User } from '../_core/types/server';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  public users: User[];
  public selectedUser: User;

  public albums: Album[];
  public selectedAlbum: Album;

  public photos: Photo[];

  public loading = true;

  constructor(
    private userData: UserDataService,
    private albumData: AlbumDataService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  private async loadUsers() {
    try {
      this.users = await this.userData.getUsers();
      console.log(this.users);
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  public selectUser(user: User) {
    this.selectedUser = user;
    this.loadUserAlbums(user.id);
  }

  public selectAlbum(id) {
    this.selectedAlbum = this.albums.find(a => a.id === id);

    this.loadPhotos(id);
  }

  public async loadPhotos(id: number) {
    this.loading = true;
    try {
      this.photos = await this.albumData.getPhotosByAlbum(id);
      console.log(this.photos);
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  private async loadUserAlbums(userId: number) {
    this.loading = true;
    try {
      this.albums = await this.userData.getAlbumsByUser(userId);
      console.log(this.albums);
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

}
