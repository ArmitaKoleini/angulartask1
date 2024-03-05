import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() users: string[] = [];
  @Input() movedUsers: string[] = [];
  selected: string[] = [];

  @Output() selectedUsersChange = new EventEmitter<string[]>();

  private _selectedUsers: string[] = [];

  get selectedUsers(): string[] {
    return this._selectedUsers;
  }

  // onUserSelectionChange(selectedUsers: string[]) {
  //   this._selectedUsers = selectedUsers;
  //   this.selectedUsersChange.emit(selectedUsers);
  // }
  onUserSelectionChange(e: any) {
    //debugger;
    console.log(e);
    this.selected = e;
  }
  getItems(): string[] {
    return this.selected;
  }
  addItem(names: string[]) {
    this.users = [...this.users, ...names];
  }
  removeSelected() {
    this.users = this.users.filter((user) => !this.selected.includes(user));
    this.selected = [];
  }
}
