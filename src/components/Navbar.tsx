
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UtensilsCrossed } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <UtensilsCrossed className="h-6 w-6 text-mint mr-2" />
          <span className="font-display">CulinaryCanvas</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/90 hover:text-mint transition-colors">
            Explore
          </Link>
          <Link to="/submit-recipe" className="text-white/90 hover:text-mint transition-colors">
            Submit Recipe
          </Link>
          <Link to="/" className="text-white/90 hover:text-mint transition-colors">
            Popular
          </Link>
          <Link to="/saved-recipes" className="text-white/90 hover:text-mint transition-colors">
            Saved Recipes
          </Link>
        </div>
        <Button className="bg-mint hover:bg-mint/90 text-forest-light font-medium">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
