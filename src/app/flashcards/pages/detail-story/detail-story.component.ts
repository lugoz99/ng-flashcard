import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-detail-story',
  templateUrl: './detail-story.component.html',
  styleUrl: './detail-story.component.css'
})
export class DetailStoryComponent {
  storyId!: string;  // Usamos un string para el ID UUID
  story: any = null;  // Inicializamos como nulo
  data: any = null;
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la ruta
    private flashcardService: FlashcardService  // Servicio que maneja la obtención de historias
  ) { }

  ngOnInit(): void {
    // Leemos el ID desde los parámetros de la URL
    this.route.paramMap.subscribe(params => {
      this.storyId = params.get('id')!;
      this.loadStoryDetails();
    });
  }

  loadStoryDetails(): void {
    // Usamos el servicio para obtener los detalles de la historia
    this.flashcardService.getStoryById(this.storyId).subscribe((data:any) => {
      this.story = data;  // Asignamos la respuesta del backend a la variable story
      this.isLoading = false;  // Finalizamos el proceso de carga
    });
  }
}
