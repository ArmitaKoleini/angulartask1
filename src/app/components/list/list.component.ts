import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public users: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  public movedUsers: string[] = [];
  public selectedUsers: string[] = [];
  // public isEditing: boolean = false;

  constructor() {}

  public moveAllRight() {
    this.movedUsers = this.movedUsers.concat(this.users);
    this.users = [];
  }

  public moveAllLeft() {
    this.users = this.users.concat(this.movedUsers);
    this.movedUsers = [];
  }

  // public moveRight() {
  //   if (this.selectedUsers) {
  //     this.users = this.users.filter((user) => user !== this.selectedUsers);
  //     this.movedUsers.push(this.selectedUsers);
  //     this.selectedUsers = null;
  //   }
  // }

  public moveRight() {
    if (this.selectedUsers.length > 0) {
      this.users = this.users.filter(
        (user) => !this.selectedUsers.includes(user)
      );
      this.movedUsers = this.movedUsers.concat(this.selectedUsers);
      this.selectedUsers = [];
    }
  }

  public moveLeft() {
    if (this.selectedUsers.length > 0) {
      this.movedUsers = this.movedUsers.filter(
        (user) => !this.selectedUsers.includes(user)
      );
      this.users = this.users.concat(this.selectedUsers);
      this.selectedUsers = [];
    }
  }

  public removeFromList() {
    if (this.selectedUsers) {
      this.users = this.users.filter(
        (user) => !this.selectedUsers.includes(user)
      );
    }
    if (this.selectedUsers) {
      this.movedUsers = this.movedUsers.filter(
        (user) => !this.selectedUsers.includes(user)
      );
    }
  }
}
