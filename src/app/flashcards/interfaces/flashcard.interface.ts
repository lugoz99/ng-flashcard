export interface Flashcard {
  id: string;
  frontText: string;
  backText: string;
  image: string | null;
  complexity: string | null;
  isActive: boolean;
  priority: number;
}

export interface Quiz {
  id: string;
  name: string;
  flashcards: Flashcard[];
}

export interface Category{
  id?: string;
  name: string;
}


export interface Option {
  optionId: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  questionId: string;
  question: string;
  options: Option[];
}

export interface Quiz {
  id: string;
  name: string;
  questions: Question[];
}
