import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { AlbumPickerComponent } from './album-picker/album-picker.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

const routes: Routes = [
  {
    path: '', component: PhotosComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PhotosComponent,
    UserListComponent,
    AlbumPickerComponent,
    PhotoGalleryComponent
  ]
})
export class PhotosModule { }
