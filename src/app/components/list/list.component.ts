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
  @Input() editedUser: string = '';
  selectedUsers: string[] = [];

  onUserSelectionChange(e: string[]) {
    this.selectedUsers = e;
  }
  getItems(): string[] {
    return this.selectedUsers;
  }
  addItem(names: string[]) {
    this.users = [...this.users, ...names];
  }
  removeSelected() {
    this.users = this.users.filter(
      (user) => !this.selectedUsers.includes(user)
    );
    this.selectedUsers = [];
  }
  editItem() {
    if (this.editedUser.length > 0) {
      this.users = [
        ...this.users.filter((user) => !this.selectedUsers.includes(user)),
        this.editedUser,
      ];
    }
    this.editedUser = '';
  }
}
