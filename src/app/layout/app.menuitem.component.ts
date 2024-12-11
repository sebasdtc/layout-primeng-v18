import { CommonModule } from '@angular/common';
import { Component, inject, input, model } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuStateService } from './services/menu.service';
import { Subscription } from 'rxjs';

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

  active = false;

  // signal
  item = input.required<MenuItem>();
  index = input.required<number>();
  key = model<string>();
  parentKey = input();

  // suscribciones
  menuSourceSubscription: Subscription |undefined;
  menuResetSubscription: Subscription | undefined;
  _menuService = inject(MenuStateService)

  constructor() {
    this.menuSourceSubscription = this._menuService.menuSource$.subscribe(value => {
        Promise.resolve(null).then(() => {
            if (value.routeEvent) {
                this.active = (value.key === this.key() || value.key.startsWith(this.key + '-')) ? true : false;
            }
            else {
                if (value.key !== this.key() && !value.key.startsWith(this.key + '-')) {
                    this.active = false;
                }
            }
        });
    });

    this.menuResetSubscription = this._menuService.resetSource$.subscribe(() => {
        this.active = false;
    });

    // this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    //     .subscribe(params => {
    //         if (this.item.routerLink) {
    //             this.updateActiveStateFromRoute();
    //         }
    //     });
  }

  ngOnInit() {
      const k = this.parentKey() ? this.parentKey() + '-' + this.index() : String(this.index);
      this.key.set(k);
      // if (this.item.routerLink) {
      //     this.updateActiveStateFromRoute();
      // }
  }

  itemClick(event: Event) {
    // avoid processing disabled items
    if (this.item().disabled) {
        event.preventDefault();
        return;
    }

    // execute command
    if (this.item().command) {
        // this.item().command({ originalEvent: event, item: this.item });
    }

    // toggle active state
    if (this.item().items) {
        this.active = !this.active;
    }

    this._menuService.onMenuStateChange({ key: this.key()! });
  }

  ngOnDestroy() {
    if (this.menuSourceSubscription) {
        this.menuSourceSubscription.unsubscribe();
    }

    if (this.menuResetSubscription) {
        this.menuResetSubscription.unsubscribe();
    }
  }

}
