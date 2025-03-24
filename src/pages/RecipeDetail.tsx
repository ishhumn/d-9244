
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
        <h2 className="text-2xl font-bold text-white mb-4 font-display">Recipe not found</h2>
        <Button 
          onClick={() => navigate("/")}
          className="bg-mint hover:bg-mint/90 text-forest"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Recipes
        </Button>
      </div>
    );
  }

  const getAverageRating = (): string => {
    const allRatings = [...recipe.ratings];
    if (allRatings.length === 0) return "0.0";
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
    <div className="container mx-auto px-4 py-12">
      <Button 
        onClick={() => navigate("/")}
        variant="outline"
        className="mb-8 border-mint/20 text-mint hover:bg-mint/10"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Discoveries
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden mb-8 shadow-xl">
            <img 
              src={recipe.imageUrl} 
              alt={recipe.name} 
              className="w-full h-auto max-h-[450px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <div>
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

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4 font-display">Ingredients</h2>
              <ul className="space-y-3 text-white/90">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-2 w-2 rounded-full bg-mint mt-2 mr-3"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4 font-display">Preparation</h2>
              <ol className="space-y-5">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="text-white/90">
                    <div className="flex">
                      <span className="bg-mint/15 text-mint font-medium rounded-full h-7 w-7 flex items-center justify-center mr-4 shrink-0">
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
          <Card className="bg-forest-light border border-mint/15 mb-8 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-white mb-5 font-display">Share Your Experience</h2>
              
              <div className="mb-5">
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
              
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Your name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="bg-forest border-mint/15 focus:border-mint/50 text-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Share your culinary journey with this recipe..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="bg-forest border-mint/15 focus:border-mint/50 text-white resize-none min-h-[120px]"
                  />
                </div>
                <Button 
                  onClick={handleSubmitComment}
                  className="w-full bg-mint hover:bg-mint/90 text-forest font-medium"
                  disabled={!comment.trim() || !authorName.trim() || rating === 0}
                >
                  Submit Review
                </Button>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-semibold text-white mb-5 font-display">Reviews ({comments.length})</h2>
            
            {comments.length === 0 ? (
              <div className="text-white/60 text-center py-8 bg-forest-light/50 rounded-lg border border-mint/10">
                No reviews yet. Be the first to share your experience!
              </div>
            ) : (
              <div className="space-y-4">
                {comments.map(comment => (
                  <Card key={comment.id} className="bg-forest-light border border-mint/15 shadow-md">
                    <CardContent className="p-5">
                      <div className="flex items-center mb-3">
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
