import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';

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
  declarations: [PhotosComponent]
})
export class PhotosModule { }
