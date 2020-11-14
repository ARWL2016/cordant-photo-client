import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumDataService } from '../_core/data/album-data.service';
import { UserDataService } from '../_core/data/user-data.service';
import { Album, Photo, User } from '../_core/types/server';
import { AlbumPickerComponent } from './album-picker/album-picker.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @ViewChild('picker') albumPickerComponent: AlbumPickerComponent;

  // data sources
  public users: User[];
  public albums: Album[];
  public photos: Photo[];
  
  // UI state
  public selectedUser: User;
  public selectedAlbum: Album;
  public loading = true;

  constructor(
    private userData: UserDataService,
    private albumData: AlbumDataService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  public selectUser(user: User) {
    if (user) {
      if (this.photos) {
        this.resetPhotos();
      }

      this.selectedUser = user;
      this.loadUserAlbums(user.id);
    }
    
  }

  public selectAlbum(id: number) {
    if (id) {
      this.selectedAlbum = this.albums.find(a => a.id === id);
      this.loadPhotos(id);
    }
  }

  public back() {
    if (this.photos) {
      this.resetPhotos();
    } else if (this.selectedUser) {
      this.resetAlbums();
    }
  }

  private resetPhotos() {
    this.photos = null;
    this.selectedAlbum = null;
    this.albumPickerComponent.resetControl();
  }

  private resetAlbums() {
    this.albums = null;
    this.selectedUser = null;
  }

  private async loadUsers() {
    try {
      this.users = await this.userData.getUsers();
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  public async loadPhotos(id: number) {
    this.loading = true;
    try {
      this.photos = await this.albumData.getPhotosByAlbum(id);
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
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }

  

}
