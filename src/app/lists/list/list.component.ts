import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  // @Input() public users: string[];
}