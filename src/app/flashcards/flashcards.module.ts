import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashcardsRoutingModule } from './flashcards-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListCardsComponent } from './pages/list-cards/list-cards.component';
import { StoryComponent } from './pages/story/story.component';
import { ListStoryComponent } from './pages/list-story/list-story.component';
import { DetailStoryComponent } from './pages/detail-story/detail-story.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ButtonsComponent,
    HeaderComponent,
    CardComponent,
    CreatePageComponent,
    ListCardsComponent,
    StoryComponent,
    ListStoryComponent,
    DetailStoryComponent
  ],
  exports:[LayoutPageComponent],
  imports: [
    FlashcardsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
})
export class FlashcardsModule { }
