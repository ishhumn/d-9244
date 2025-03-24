
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NotFoundMessage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-bold text-white mb-4 font-display">Recipe not found</h2>
      <Button 
        onClick={() => navigate("/")}
        className="bg-mint hover:bg-mint/90 text-forest-light"
      >
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Recipes
      </Button>
    </div>
  );
};
