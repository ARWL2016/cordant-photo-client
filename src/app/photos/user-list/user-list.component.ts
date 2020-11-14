import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/_core/types/server';

@Component({
  selector: 'cor-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  @Input() selectedUser: User;

  @Output() selectUser = new EventEmitter<User>()

  readonly displayedColumns = ['name'];

  constructor() { }

  ngOnInit() {
  }

  public selectRow(user: User)  {
    this.selectUser.emit(user);
  }

}
