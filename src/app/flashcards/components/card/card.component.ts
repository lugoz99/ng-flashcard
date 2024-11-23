import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: ``,
  styleUrl:'./card.css'
})
export class CardComponent {
  isButtonsVisible = true;
  isFlipped = false;

  @Input('') term: string = 'BOOK';
  @Input() priority: string = "E";
  @Input() complexity!: string;
  @Input() pronunciation!: string;
 //@Input() imageUrl: string;
  @Input() definition: string = "Libro";
  @Input() category:string = "backend"
  toggleButtons() {
    this.isButtonsVisible = !this.isButtonsVisible;
  }



  flipCard() {
    console.log(this.isFlipped)
    this.isFlipped = !this.isFlipped;
  }

  toggleCard() {
    this.isFlipped = !this.isFlipped;
  }
}
