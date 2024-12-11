import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.menuitem.component.html',
})
export class MenuitemComponent {

  item = input.required<MenuItem>();

  toggleVisibility = false;

  toggleMenu() {
    this.toggleVisibility = !this.toggleVisibility;
  }
}
