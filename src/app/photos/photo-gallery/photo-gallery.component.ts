import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/_core/types/server';

@Component({
  selector: 'cor-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryComponent implements OnInit {

  @Input() photos: Photo[];

  constructor() { }

  ngOnInit() {
  }

}
