import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlashcardsRoutingModule } from './flashcards-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ButtonsComponent,
    HeaderComponent,
    CardComponent
  ],
  exports:[LayoutPageComponent],
  imports: [
    FlashcardsRoutingModule,
    CommonModule,
  ],
})
export class FlashcardsModule { }
