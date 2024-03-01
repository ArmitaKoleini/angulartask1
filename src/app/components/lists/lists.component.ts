import { NgFor, NgIf } from '@angular/common';
import { Component, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ListComponent],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css',
})
export class ListsComponent {
  public users: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  public movedUsers: string[] = [];
  public selectedUsers: string[] = [];
  public editedUser: string = '';

  @ViewChild('firstChild', { static: true }) firstList!: ListComponent;
  @ViewChild('secondChild', { static: true }) secondList!: ListComponent;

  constructor(private renderer: Renderer2) {}

  onSelectedUsersChange(selectedUsers: string[]) {
    this.selectedUsers = selectedUsers;
  }

  public closeModal() {
    const modalElement = document.querySelector('.modal');
    this.renderer.setStyle(modalElement, 'display', 'none');
    const backDropElement = document.querySelector('.backdrop');
    this.renderer.setStyle(backDropElement, 'display', 'none');
  }

  public openModal() {
    const modalElement = document.querySelector('.modal');
    this.renderer.setStyle(modalElement, 'display', 'block');
    const backDropElement = document.querySelector('.backdrop');
    this.renderer.setStyle(backDropElement, 'display', 'block');
  }

  public onSaveChanges(editedUser: string) {
    const isUsers = this.selectedUsers.some((user) =>
      this.users.includes(user)
    );
    const ismovedUsers = this.selectedUsers.some((user) =>
      this.movedUsers.includes(user)
    );
    if (isUsers) {
      this.users = this.users
        .filter((user) => !this.selectedUsers.includes(user))
        .concat([editedUser]);
    } else if (ismovedUsers) {
      this.movedUsers = this.movedUsers
        .filter((user) => !this.selectedUsers.includes(user))
        .concat([editedUser]);
    }
    this.selectedUsers = [];
    this.editedUser = '';
  }

  public moveAllRight() {
    this.movedUsers = this.movedUsers.concat(this.users);
    this.users = [];
  }

  public moveAllLeft() {
    this.users = this.users.concat(this.movedUsers);
    this.movedUsers = [];
  }

  public moveRight() {
    console.log(this.selectedUsers);

    if (this.selectedUsers.length > 0) {
      const uniqueSelectedUsers = new Set(this.selectedUsers);
      this.movedUsers = this.movedUsers.filter(
        (user) => !uniqueSelectedUsers.has(user)
      );
      this.movedUsers = this.movedUsers.concat([...uniqueSelectedUsers]);
      this.users = this.users.filter((user) => !uniqueSelectedUsers.has(user));
      this.selectedUsers = [];
    }
  }

  public moveLeft() {
    if (this.selectedUsers.length > 0) {
      const uniqueSelectedUsers = new Set(this.selectedUsers);
      this.users = this.users.filter((user) => !uniqueSelectedUsers.has(user));
      this.users = this.users.concat([...uniqueSelectedUsers]);
      this.movedUsers = this.movedUsers.filter(
        (user) => !uniqueSelectedUsers.has(user)
      );
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
