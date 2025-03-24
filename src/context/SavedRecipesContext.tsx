
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Recipe } from '@/types/recipe';
import { useToast } from "@/components/ui/use-toast";

interface SavedRecipesContextType {
  savedRecipes: string[];
  saveRecipe: (recipeId: string) => void;
  removeSavedRecipe: (recipeId: string) => void;
  isSaved: (recipeId: string) => boolean;
}

const SavedRecipesContext = createContext<SavedRecipesContextType | undefined>(undefined);

export const SavedRecipesProvider = ({ children }: { children: ReactNode }) => {
  const [savedRecipes, setSavedRecipes] = useState<string[]>([]);
  const { toast } = useToast();

  // Load saved recipes from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedRecipes');
    if (saved) {
      setSavedRecipes(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever savedRecipes changes
  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const saveRecipe = (recipeId: string) => {
    if (!savedRecipes.includes(recipeId)) {
      setSavedRecipes([...savedRecipes, recipeId]);
      toast({
        title: "Recipe Saved",
        description: "This recipe has been added to your saved collection.",
      });
    }
  };

  const removeSavedRecipe = (recipeId: string) => {
    setSavedRecipes(savedRecipes.filter(id => id !== recipeId));
    toast({
      title: "Recipe Removed",
      description: "This recipe has been removed from your saved collection.",
    });
  };

  const isSaved = (recipeId: string) => {
    return savedRecipes.includes(recipeId);
  };

  return (
    <SavedRecipesContext.Provider value={{ savedRecipes, saveRecipe, removeSavedRecipe, isSaved }}>
      {children}
    </SavedRecipesContext.Provider>
  );
};

export const useSavedRecipes = () => {
  const context = useContext(SavedRecipesContext);
  if (context === undefined) {
    throw new Error('useSavedRecipes must be used within a SavedRecipesProvider');
  }
  return context;
};
