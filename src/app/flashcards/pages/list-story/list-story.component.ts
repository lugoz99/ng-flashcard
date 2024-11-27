import { Component } from '@angular/core';
import { FlashcardService } from '../../services/flashcard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrl: './list-story.component.css'
})
export class ListStoryComponent {

  stories: any[] = [];

  constructor(private flashcardService: FlashcardService, private router: Router) { }

  ngOnInit() {
    this.flashcardService.getAllStories().subscribe((data) => {
      this.stories = data;
    });
  }

  onStoryClick(id: string) {
    this.router.navigate(['/flashcard/story-detail', id]);
  }
}
