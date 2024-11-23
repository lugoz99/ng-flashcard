import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  title = 'ng-flash-tech';
  isSidebarExpanded = true;
  menuItems = [
    { label: 'Inicio', icon: 'bx-home' },
    { label: 'Proyectos', icon: 'bx-briefcase' },
    { label: 'Tareas', icon: 'bx-check-circle' }
  ];

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
  menuOpen = false; toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
