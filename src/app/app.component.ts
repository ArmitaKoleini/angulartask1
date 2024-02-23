import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];
  public movedUsers: string[] = [];
  public selectedUser: string | null = null;
  public selectedUser2: string | null = null;
  // public isEditing: boolean = false;

  constructor() {}

  public moveRight() {
    if (this.selectedUser) {
      this.users = this.users.filter((user) => user !== this.selectedUser);
      this.movedUsers.push(this.selectedUser);
      this.selectedUser = null;
    }
  }

  public moveLeft() {
    if (this.selectedUser2) {
      this.movedUsers = this.movedUsers.filter(
        (user) => user !== this.selectedUser2
      );
      this.users.push(this.selectedUser2);
      this.selectedUser2 = null;
    }
  }
  public removeFromList() {
    if (this.selectedUser) {
      this.users = this.users.filter((user) => user !== this.selectedUser);
    }
    if (this.selectedUser2) {
      this.movedUsers = this.movedUsers.filter(
        (user) => user !== this.selectedUser2
      );
    }
  }
}
