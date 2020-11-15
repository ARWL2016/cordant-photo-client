import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Album, User } from '@type/server';

/**
 * Display selected user and a select control of user's albums
 */

@Component({
  selector: 'cor-album-picker',
  templateUrl: './album-picker.component.html',
  styleUrls: ['./album-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumPickerComponent implements OnInit, OnDestroy {

  @Input() user: User;
  @Input() albums: Album[];

  @Output() selectAlbum = new EventEmitter<number>();

  public albumIdCtrl = new FormControl();
  public subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.listenToChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public resetControl() {
    this.albumIdCtrl.reset(null, {emitEvent: false});
  }

  private listenToChanges() {
    this.subscription = this.albumIdCtrl.valueChanges.subscribe((id: number) => {
      this.selectAlbum.emit(id);
    });
  }

}
