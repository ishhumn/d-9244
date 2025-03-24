
import { Comment } from "@/types/recipe";
import { Card, CardContent } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

interface ReviewListProps {
  comments: Comment[];
}

export const ReviewList = ({ comments }: ReviewListProps) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
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
  );
};
