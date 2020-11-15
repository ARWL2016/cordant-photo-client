import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@type/server';

/**
 *  Display a table of users
 *  Emit a selected user
 */

@Component({
  selector: 'cor-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent  {

  @Input() users: User[];
  @Input() selectedUser: User;

  @Output() selectUser = new EventEmitter<User>();

  readonly displayedColumns = ['name'];

  constructor() { }

  public selectRow(user: User)  {
    this.selectUser.emit(user);
  }

}
