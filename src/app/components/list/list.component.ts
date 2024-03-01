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
  
  @Output() selectedUsersChange = new EventEmitter<string[]>();

  private _selectedUsers: string[] = [];

  get selectedUsers(): string[] {
    return this._selectedUsers;
  }

  onUserSelectionChange(selectedUsers: string[]) {
    this._selectedUsers = selectedUsers;
    this.selectedUsersChange.emit(selectedUsers); 
  }
}