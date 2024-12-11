import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private isOpen = signal(false);
  // Método para alternar el estado

  get isOpen$() {
    return this.isOpen;
  }

  toggleDrawer(): void {
    this.isOpen.update((value) => !value);
  }

  constructor() { }

  drawerVisible = false;

  // toogleDrawer() {
  //   this.drawerVisible = !this.drawerVisible;
  // }

  toggleDarkMode() {
    const element = document.querySelector('html');
    console.log(element);
    element?.classList.toggle('dark');
  }
}
