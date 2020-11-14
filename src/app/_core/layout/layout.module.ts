import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/_shared/shared.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'photos',
        loadChildren: () => import('../../photos/photos.module').then(m => m.PhotosModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
