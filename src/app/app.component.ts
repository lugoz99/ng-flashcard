import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
