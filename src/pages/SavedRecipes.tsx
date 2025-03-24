
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import RecipeList from "@/components/recipe/RecipeList";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Recipe } from "@/types/recipe";
import { mockRecipes } from "@/data/mockRecipes";
import { useSavedRecipes } from "@/context/SavedRecipesContext";

const SavedRecipes = () => {
  const navigate = useNavigate();
  const { savedRecipes } = useSavedRecipes();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Filter recipes to only show saved ones
    const saved = mockRecipes.filter(recipe => savedRecipes.includes(recipe.id));
    setRecipes(saved);
  }, [savedRecipes]);

  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        onClick={() => navigate("/")}
        variant="outline"
        className="mb-8 border-mint/20 text-mint hover:bg-mint/10"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Explore
      </Button>
      
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white font-display mb-4">Your Saved Recipes</h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Your personal collection of culinary masterpieces that you've saved for future cooking adventures.
        </p>
      </div>
      
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default SavedRecipes;
