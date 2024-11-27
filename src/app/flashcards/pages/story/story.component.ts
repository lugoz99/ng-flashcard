import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent implements OnInit {

  flashcards: any[] = [];  // Lista de todas las flashcards
  selectedFlashcards: string[] = [];  // IDs de las flashcards seleccionadas
  story: any;
  isLoading: boolean = false;  // Indicador de carga
  isStoryGenerated: boolean = false;  // Controla si se ha generado la historia

  constructor(private flashcardService: FlashcardService) { }

  ngOnInit(): void {
    // Obtenemos todas las flashcards del backend
    this.flashcardService.getFlashcards().subscribe((response) => {
      this.flashcards = response;  // Guardamos las flashcards
    });
  }

  // Función que maneja la selección de las flashcards
  onFlashcardSelected(id: string, event: any) {
    if (event.target.checked) {
      this.selectedFlashcards.push(id);  // Agrega el ID si está seleccionado
    } else {
      this.selectedFlashcards = this.selectedFlashcards.filter(i => i !== id);  // Elimina el ID si está desmarcado
    }
  }

  // Función que genera la historia
  generateStory() {
    if (this.selectedFlashcards.length === 0) {
      alert("Por favor selecciona al menos una flashcard");
      return;
    }

    this.isLoading = true;  // Empieza el proceso de carga
    this.flashcardService.generateStory(this.selectedFlashcards).subscribe((response) => {
      this.story = response;  // Recibe la historia generada
      this.isLoading = false;  // Finaliza el proceso de carga
      this.isStoryGenerated = true;  // Marca que la historia fue generada
    });
  }
}
