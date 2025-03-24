
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  category: string;
  imageUrl: string;
  prepTimeMinutes: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ratings: number[];
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  text: string;
  author: string;
  createdAt: Date;
}

export interface FilterOptions {
  category: string[];
  prepTime: string[];
  difficulty: string[];
}
