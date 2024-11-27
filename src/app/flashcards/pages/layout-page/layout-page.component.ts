import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  title = 'ng-flash-tech';
  isSidebarExpanded = true;
  // menuItems = [
  //   { label: 'Inicio', icon: 'bx-home', url: '/list' },
  //   { label: 'create card', icon: 'bx-briefcase',url: '/create' },
  //   { label: 'list', icon: 'bx-check-circle' }
  // ];

  menuItems = [
    { label: 'Inicio', icon: 'bx-home', url: '/flashcard/list' },
    { label: 'Create Card', icon: 'bx-book-add', url: '/flashcard/create' },
    { label: 'Create Quiz', icon: 'bx-task', url: '/flashcard/quiz/create' },
    { label: 'List Quizzes', icon: 'bx-list-ul', url: '/flashcard/quiz/list' },
    { label: 'Writting', icon: 'bx-pencil', url: '/flashcard/writing' },
    { label: 'Create Story', icon: 'bx-message-square-add', url: '/flashcard/story/create' },
    { label: 'Create Stories', icon: 'bx-library', url: '/flashcard/story/create' },
    { label: 'List Stories', icon: 'bx-category', url: '/flashcard/story/list' },
  ];


  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
  menuOpen = false; toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
