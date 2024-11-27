import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flashcard',
    loadChildren: () =>
      import('./flashcards/flashcards.module').then((m) => m.FlashcardsModule),
  },
  {
    path: '**',
    redirectTo: 'flashcard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
