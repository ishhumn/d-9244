
interface RecipeImageDisplayProps {
  imageUrl: string;
  alt: string;
}

export const RecipeImageDisplay = ({ imageUrl, alt }: RecipeImageDisplayProps) => {
  return (
    <div className="rounded-xl overflow-hidden mb-8 shadow-xl">
      <img 
        src={imageUrl} 
        alt={alt} 
        className="w-full h-auto max-h-[450px] object-cover"
      />
    </div>
  );
};
