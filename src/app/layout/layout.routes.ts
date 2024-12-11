import { Routes } from "@angular/router";
import { LayoutComponent } from "./app.layout.component";

export const LAYOUT_ROUTES : Routes = [
  {
    path:'',
    component:LayoutComponent,
    loadChildren: () => import('../admin/admin.routes').then(m => m.ADMIN_ROUTES)
  }
]
