import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category, Flashcard, Quiz } from '../interfaces/flashcard.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {


  private apiUrl = 'http://localhost:3000';  // URL del backend
  constructor(private http: HttpClient) { }

  createFlashcard(flashcard: Flashcard): Observable<Flashcard> {
    return this.http.post<Flashcard>(`${this.apiUrl}/flashcard`, flashcard);
  }

  getFlashcards(): Observable<Flashcard[]> {
    return this.http.get<Flashcard[]>(`${this.apiUrl}/flashcard`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/category`, category);
  }

  //console.log('**********************QUIZES *******************')
  // Crear un nuevo quiz
  createQuiz(flashcardIds: string[]): Observable<Quiz> {
    const quizData = { flashcardIds }; // Crea el objeto con los flashcards seleccionados
    return this.http.post<Quiz>(`${this.apiUrl}/quiz/create`, quizData);
  }
  // Obtener un quiz por ID
  getQuizById(quizId: string): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/quiz/${quizId}`);
  }

  // Enviar las respuestas del quiz
  submitQuiz(quizId: string, answers: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/quiz/${quizId}/submit`, answers);
  }

  // Obtener todos los quizzes
  generateStory(flashcardIds: string[]): Observable<any> {
    const requestData = { flashcardIds };  // Crea el objeto con los flashcards seleccionados
    return this.http.post<any>(`${this.apiUrl}/flashcard/generate`, requestData);
  }
  getAllStories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/flashcard/list-stories`);
  }

  getStoryById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/flashcard/story/${id}`);
  }
  // getallcategories
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/category`);
  }
}
