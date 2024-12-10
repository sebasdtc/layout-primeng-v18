import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { Button } from 'primeng/button';
import { Drawer } from 'primeng/drawer';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { StyleClass } from 'primeng/styleclass';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    Button,
    Toolbar,
    IconField,
    InputIcon,
    Menu,
    Badge,
    Avatar,
    InputText,
    Drawer,
    StyleClass
  ],
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e:any): void {
        this.drawerRef.close(e);
    }
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
              label: 'Messages',
              icon: 'pi pi-inbox',
              badge: '2'
          },
          {
              label: 'Logout',
              icon: 'pi pi-sign-out',
          },
          {
            separator:true
          }
        ];
    }

    visible: boolean = false;

    toggleDarkMode() {
      const element = document.querySelector('html');
      console.log(element);
      element?.classList.toggle('dark');
    }
}
