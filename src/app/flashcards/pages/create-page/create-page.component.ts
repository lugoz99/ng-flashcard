import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.css'
})
export class CreatePageComponent {
  flashcardForm: FormGroup;
  complexityLevels = ['Easy', 'Medium', 'Hard'];
  categories = [
    { id: '1', name: 'Vocabulary' },
    { id: '2', name: 'Grammar' },
    { id: '3', name: 'Phrases' },
  ];
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.flashcardForm = this.fb.group({
      frontText: ['', [Validators.required]],
      backText: ['', [Validators.required]],
      complexity: [null],
      isActive: [true],
      priority: [null, [Validators.min(1), Validators.max(3)]],
      categoryId: [null],
    });
  }

  ngOnInit(): void { }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.selectedImage = reader.result);
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.flashcardForm.valid) {
      const flashcardData = { ...this.flashcardForm.value, image: this.selectedImage };
      console.log('Flashcard Data:', flashcardData);
      // Lógica para enviar al backend
    }
  }
}
