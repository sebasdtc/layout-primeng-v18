import { Component } from '@angular/core';
import { TopbarComponent } from "./topbar/topbar.component";
import { Drawer } from 'primeng/drawer';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

}
