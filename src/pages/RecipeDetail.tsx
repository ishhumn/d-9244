
import { useState } from "react";
import { useParams } from "react-router-dom";
import { mockRecipes } from "@/data/mockRecipes";
import { Comment } from "@/types/recipe";
import { RecipeActions } from "@/components/recipe-detail/RecipeActions";
import { RecipeHeader } from "@/components/recipe-detail/RecipeHeader";
import { RecipeImageDisplay } from "@/components/recipe-detail/RecipeImageDisplay";
import { RecipeIngredients } from "@/components/recipe-detail/RecipeIngredients";
import { RecipeInstructions } from "@/components/recipe-detail/RecipeInstructions";
import { ReviewForm } from "@/components/recipe-detail/ReviewForm";
import { ReviewList } from "@/components/recipe-detail/ReviewList";
import { NotFoundMessage } from "@/components/recipe-detail/NotFoundMessage";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = mockRecipes.find(r => r.id === id);
  
  const [comments, setComments] = useState<Comment[]>(recipe?.comments || []);

  if (!recipe) {
    return <NotFoundMessage />;
  }

  const getAverageRating = (): string => {
    const allRatings = [...recipe.ratings];
    if (allRatings.length === 0) return "0.0";
    const sum = allRatings.reduce((acc, rating) => acc + rating, 0);
    return (sum / allRatings.length).toFixed(1);
  };

  const handleSubmitComment = (newComment: Comment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <RecipeActions recipeId={recipe.id} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <RecipeImageDisplay imageUrl={recipe.imageUrl} alt={recipe.name} />

          <div className="space-y-8">
            <RecipeHeader recipe={recipe} getAverageRating={getAverageRating} />
            <RecipeIngredients ingredients={recipe.ingredients} />
            <RecipeInstructions instructions={recipe.instructions} />
          </div>
        </div>

        <div>
          <ReviewForm onSubmitComment={handleSubmitComment} />
          <ReviewList comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
