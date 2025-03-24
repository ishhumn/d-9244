
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star as StarIcon } from "lucide-react";
import { Comment } from "@/types/recipe";

interface ReviewFormProps {
  onSubmitComment: (comment: Comment) => void;
}

export const ReviewForm = ({ onSubmitComment }: ReviewFormProps) => {
  const [comment, setComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

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

    onSubmitComment(newComment);
    setComment("");
    setAuthorName("");
    setRating(0);
  };

  return (
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
            className="w-full bg-mint hover:bg-mint/90 text-forest-light font-medium"
            disabled={!comment.trim() || !authorName.trim() || rating === 0}
          >
            Submit Review
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
