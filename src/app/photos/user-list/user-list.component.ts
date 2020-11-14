import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/_core/types/server';

@Component({
  selector: 'cor-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  
})
export class UserListComponent implements OnInit {

  @Input() users: User[];

  @Output() selectUser = new EventEmitter<User>()

  readonly displayedColumns = ['name'];

  constructor() { }

  ngOnInit() {
  }

  selectRow(user: User)  {
    console.log(user);
    this.selectUser.emit(user);
  }

}
