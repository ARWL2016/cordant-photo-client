import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Album, User } from 'src/app/_core/types/server';

@Component({
  selector: 'cor-album-picker',
  templateUrl: './album-picker.component.html',
  styleUrls: ['./album-picker.component.scss']
})
export class AlbumPickerComponent implements OnInit {

  @Input() user: User;
  @Input() albums: Album[];

  @Output() selectAlbum = new EventEmitter<number>();

  public albumId = new FormControl();
  public subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.listenToChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private listenToChanges() {
    this.subscription = this.albumId.valueChanges.subscribe((id: number) => {
      console.log(id);
      this.selectAlbum.emit(id);
    })
  }

}
