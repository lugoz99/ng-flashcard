import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ListCardsComponent } from './pages/list-cards/list-cards.component';
import { StoryComponent } from './pages/story/story.component';
import { ListStoryComponent } from './pages/list-story/list-story.component';
import { DetailStoryComponent } from './pages/detail-story/detail-story.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full', // Importante para redirección exacta
  },
  { path: 'create', component: CreatePageComponent },
  { path: 'list', component: ListCardsComponent },
  { path: 'story/list', component: ListStoryComponent },
  { path: 'story-detail/:id', component: DetailStoryComponent },
  { path: 'story/create', component: StoryComponent },
  { path: '**', redirectTo: 'list' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlashcardsRoutingModule { }
