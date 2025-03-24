
import { Button } from "@/components/ui/button";
import { ChevronLeft, BookmarkPlus, BookmarkCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSavedRecipes } from "@/context/SavedRecipesContext";
import { useState } from "react";

interface RecipeActionsProps {
  recipeId: string;
}

export const RecipeActions = ({ recipeId }: RecipeActionsProps) => {
  const navigate = useNavigate();
  const { saveRecipe, removeSavedRecipe, isSaved } = useSavedRecipes();
  const [saveAnimation, setSaveAnimation] = useState(false);

  const handleSaveRecipe = () => {
    if (isSaved(recipeId)) {
      removeSavedRecipe(recipeId);
    } else {
      saveRecipe(recipeId);
      setSaveAnimation(true);
      setTimeout(() => setSaveAnimation(false), 500);
    }
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <Button 
        onClick={() => navigate("/")}
        variant="outline"
        className="border-mint/20 text-mint hover:bg-mint/10"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Explorations
      </Button>
      <Button 
        onClick={handleSaveRecipe}
        variant="ghost" 
        className={`text-mint hover:bg-mint/10 ${saveAnimation ? 'saved-animation' : ''}`}
      >
        {isSaved(recipeId) ? (
          <BookmarkCheck className="h-6 w-6 fill-mint" />
        ) : (
          <BookmarkPlus className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};
