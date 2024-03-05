import { NgFor, NgIf } from '@angular/common';
import { Component, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
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

  addRight() {
    this.secondList.addItem(this.firstList.getItems());
    this.firstList.removeSelected();
  }

  addLeft() {
    this.firstList.addItem(this.secondList.getItems());
    this.secondList.removeSelected();
  }

  removeFromList() {
    this.firstList.removeSelected();
    this.secondList.removeSelected();
  }
}
