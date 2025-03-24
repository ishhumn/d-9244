
import { Recipe } from "@/types/recipe";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Star, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList = ({ recipes }: RecipeListProps) => {
  const navigate = useNavigate();

  const getAverageRating = (ratings: number[]) => {
    if (ratings.length === 0) return "0.0";
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return (sum / ratings.length).toFixed(1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {recipes.length === 0 ? (
        <div className="col-span-full text-center py-12">
          <BookOpen className="mx-auto h-14 w-14 text-mint opacity-50 mb-5" />
          <h3 className="text-2xl font-medium text-white font-display">No recipes found</h3>
          <p className="text-white/60 mt-3">Try adjusting your search or filters</p>
        </div>
      ) : (
        recipes.map(recipe => (
          <Card 
            key={recipe.id} 
            className="recipe-card bg-forest-light border border-mint/10 hover:border-mint/40 transition-all cursor-pointer overflow-hidden shadow-lg"
            onClick={() => navigate(`/recipe/${recipe.id}`)}
          >
            <div className="h-52 overflow-hidden">
              <img 
                src={recipe.imageUrl} 
                alt={recipe.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-white truncate mr-2 font-display">{recipe.name}</h3>
                <div className="flex items-center bg-mint/20 px-2 py-1 rounded">
                  <Star className="h-3 w-3 text-mint mr-1 fill-mint" />
                  <span className="text-xs font-medium text-mint">
                    {getAverageRating(recipe.ratings)}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex items-center text-white/70 text-sm">
                <span className="bg-mint/10 text-mint text-xs px-2 py-0.5 rounded-full">
                  {recipe.category}
                </span>
                <div className="ml-auto flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{recipe.prepTimeMinutes} min</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default RecipeList;
