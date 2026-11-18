export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string|number; // index of option or translation
  explanation: string;
  // Optional English versions (bilingual support; only some modules have them)
  questionEn?: string;
  optionsEn?: string[];
  correctAnswerEn?: string|number;
  explanationEn?: string;
}

export interface ExampleSentence {
  syriac: string;
  translit: string;
  phonetic?: string;
  indonesian: string;
  // English meaning (bilingual support)
  english?: string;
}

export interface VocabularyWord {
  syriac: string;
  translit: string;
  meaning: string;
  category?: string;
  notes?: string;
  // English meaning (bilingual support)
  meaningEn?: string;
}

export interface Module {
  id: number;
  title: string;
  titleSyriac: string;
  category: "Level A1" | "Level A2" | "Level B1";
  summary: string;
  introduction: string;
  content: string; // Markdown or detailed explanation
  keyRules: string[];
  vocabulary: VocabularyWord[];
  examples: ExampleSentence[];
  quizzes: QuizQuestion[];
  embedCode?: string;
  // Optional English versions (bilingual support; only some modules have them)
  titleEn?: string;
  summaryEn?: string;
  introductionEn?: string;
  contentEn?: string;
  keyRulesEn?: string[];
}

export interface UserProgress {
  completedModules: number[]; // Array of module IDs
  quizHighScores: Record<number, number>; // moduleId -> score (out of 3)
  savedVocabulary: VocabularyWord[];
  streak: number;
  lastActive: string | null; // ISO Date
  completedLevelExams?: string[]; // A1, A2, B1
  levelExamHighScores?: Record<string, number>; // level -> score (out of 10)
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface UserFile {
  fileId: string;
  userId: string;
  moduleId?: string; // Optional indicator matching course module attachments
  fileName: string;
  fileSize: number;
  fileType: string;
  fileData: string; // Base64 encoded string representing the file
  uploadDate: string; // ISO 8601 formatting
}

