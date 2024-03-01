import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListsComponent } from './components/lists/lists.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 
}
