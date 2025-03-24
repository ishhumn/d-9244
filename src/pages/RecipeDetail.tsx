
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockRecipes } from "@/data/mockRecipes";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Clock, Star as StarIcon, UserCircle } from "lucide-react";
import { Comment } from "@/types/recipe";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = mockRecipes.find(r => r.id === id);
  
  const [comment, setComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comments, setComments] = useState<Comment[]>(recipe?.comments || []);

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Recipe not found</h2>
        <Button 
          onClick={() => navigate("/")}
          className="bg-mint hover:bg-mint/90 text-forest"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Recipes
        </Button>
      </div>
    );
  }

  const getAverageRating = () => {
    const allRatings = [...recipe.ratings];
    if (allRatings.length === 0) return 0;
    const sum = allRatings.reduce((acc, rating) => acc + rating, 0);
    return (sum / allRatings.length).toFixed(1);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  const handleSubmitComment = () => {
    if (comment.trim() === "" || authorName.trim() === "" || rating === 0) {
      return;
    }

    const newComment: Comment = {
      id: `c${Date.now()}`,
      text: comment,
      author: authorName,
      createdAt: new Date()
    };

    setComments([...comments, newComment]);
    setComment("");
    setAuthorName("");
    setRating(0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        onClick={() => navigate("/")}
        variant="outline"
        className="mb-6 border-mint/20 text-mint hover:bg-mint/10"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Recipes
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden mb-6">
            <img 
              src={recipe.imageUrl} 
              alt={recipe.name} 
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-3">{recipe.name}</h1>
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-mint/10 text-mint text-sm px-3 py-1 rounded-full">
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

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Ingredients</h2>
              <ul className="space-y-2 text-white/80">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint mt-2 mr-2"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="text-white/80">
                    <div className="flex">
                      <span className="bg-mint/10 text-mint font-medium rounded-full h-6 w-6 flex items-center justify-center mr-3 shrink-0">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div>
          <Card className="bg-forest-light border border-mint/10 mb-6">
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold text-white mb-4">Rate & Comment</h2>
              
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="focus:outline-none"
                    >
                      <StarIcon 
                        className={`h-7 w-7 ${
                          (hoveredRating || rating) >= star 
                            ? 'text-mint fill-mint' 
                            : 'text-white/30'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <Input
                    placeholder="Your name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="bg-forest border-mint/10 focus:border-mint/50 text-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Share your thoughts about this recipe..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="bg-forest border-mint/10 focus:border-mint/50 text-white resize-none min-h-[100px]"
                  />
                </div>
                <Button 
                  onClick={handleSubmitComment}
                  className="w-full bg-mint hover:bg-mint/90 text-forest font-medium"
                  disabled={!comment.trim() || !authorName.trim() || rating === 0}
                >
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Comments ({comments.length})</h2>
            
            {comments.length === 0 ? (
              <div className="text-white/60 text-center py-6">
                No comments yet. Be the first to share your thoughts!
              </div>
            ) : (
              <div className="space-y-4">
                {comments.map(comment => (
                  <Card key={comment.id} className="bg-forest-light border border-mint/10">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <UserCircle className="h-5 w-5 text-mint mr-2" />
                        <span className="font-medium text-white">{comment.author}</span>
                        <span className="text-white/50 text-xs ml-auto">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-white/80">{comment.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
