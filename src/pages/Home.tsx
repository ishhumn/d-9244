
import { useState } from "react";
import { Button } from "@/components/ui/button";
import RecipeList from "@/components/recipe/RecipeList";
import SearchFilters from "@/components/recipe/SearchFilters";
import { ChefHat, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Recipe, FilterOptions } from "@/types/recipe";
import { mockRecipes } from "@/data/mockRecipes";

const Home = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>(mockRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(mockRecipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    prepTime: [],
    difficulty: []
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    applyFilters(term, filters);
  };

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    applyFilters(searchTerm, newFilters);
  };

  const applyFilters = (term: string, filterOptions: FilterOptions) => {
    let filtered = [...recipes];
    
    // Apply search term
    if (term) {
      const lowercaseTerm = term.toLowerCase();
      filtered = filtered.filter(
        recipe => 
          recipe.name.toLowerCase().includes(lowercaseTerm) || 
          recipe.ingredients.some(ing => ing.toLowerCase().includes(lowercaseTerm)) ||
          recipe.category.toLowerCase().includes(lowercaseTerm)
      );
    }
    
    // Apply category filter
    if (filterOptions.category.length > 0) {
      filtered = filtered.filter(recipe => 
        filterOptions.category.includes(recipe.category)
      );
    }
    
    // Apply prep time filter
    if (filterOptions.prepTime.length > 0) {
      filtered = filtered.filter(recipe => {
        if (filterOptions.prepTime.includes("under10") && recipe.prepTimeMinutes < 10) return true;
        if (filterOptions.prepTime.includes("10to30") && recipe.prepTimeMinutes >= 10 && recipe.prepTimeMinutes <= 30) return true;
        if (filterOptions.prepTime.includes("over30") && recipe.prepTimeMinutes > 30) return true;
        return false;
      });
    }
    
    // Apply difficulty filter
    if (filterOptions.difficulty.length > 0) {
      filtered = filtered.filter(recipe => 
        filterOptions.difficulty.includes(recipe.difficulty)
      );
    }
    
    setFilteredRecipes(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center text-white">
            <ChefHat className="mr-2 h-8 w-8 text-mint" />
            TastyHome
          </h1>
          <p className="text-white/80 mt-2">Discover and share delicious homemade recipes</p>
        </div>
        <Button 
          onClick={() => navigate("/submit-recipe")}
          className="bg-mint hover:bg-mint/90 text-forest font-medium px-6 py-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Submit Recipe
        </Button>
      </div>
      
      <SearchFilters 
        onSearch={handleSearch} 
        onFilterChange={handleFilterChange}
      />
      
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
};

export default Home;
