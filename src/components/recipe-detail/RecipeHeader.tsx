
import { Recipe } from "@/types/recipe";
import { Clock, Star as StarIcon } from "lucide-react";

interface RecipeHeaderProps {
  recipe: Recipe;
  getAverageRating: () => string;
}

export const RecipeHeader = ({ recipe, getAverageRating }: RecipeHeaderProps) => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">{recipe.name}</h1>
      <div className="flex flex-wrap items-center gap-4">
        <span className="bg-mint/15 text-mint text-sm px-3 py-1 rounded-full">
          {recipe.category}
        </span>
        <div className="flex items-center text-white/70">
          <Clock className="h-4 w-4 mr-1" />
          <span>{recipe.prepTimeMinutes} min</span>
        </div>
        <div className="flex items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <StarIcon 
                key={star}
                className={`h-4 w-4 ${parseFloat(getAverageRating()) >= star ? 'text-mint fill-mint' : 'text-white/30'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-white">({recipe.ratings.length})</span>
        </div>
        <span className="text-white/70 text-sm">
          Difficulty: <span className="font-medium">{recipe.difficulty}</span>
        </span>
      </div>
    </div>
  );
};
