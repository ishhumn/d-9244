
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { FilterOptions } from "@/types/recipe";

interface SearchFiltersProps {
  onSearch: (term: string) => void;
  onFilterChange: (filters: FilterOptions) => void;
}

const categoryOptions = ["Vegetarian", "Quick Meals", "Desserts", "Spicy"];
const prepTimeOptions = [
  { value: "under10", label: "Under 10 mins" },
  { value: "10to30", label: "10-30 mins" },
  { value: "over30", label: "30+ mins" }
];
const difficultyOptions = ["Easy", "Medium", "Hard"];

const SearchFilters = ({ onSearch, onFilterChange }: SearchFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    prepTime: [],
    difficulty: []
  });

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleFilterChange = (type: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters };
    
    if (newFilters[type].includes(value)) {
      newFilters[type] = newFilters[type].filter(item => item !== value);
    } else {
      newFilters[type] = [...newFilters[type], value];
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
          <Input
            placeholder="Search recipes, ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-10 bg-forest-light border-mint/10 focus:border-mint/50 text-white"
          />
        </div>
        <Button 
          onClick={handleSearch}
          className="bg-mint hover:bg-mint/90 text-forest"
        >
          Search
        </Button>
        <Button
          variant="outline"
          className="border-mint/20 text-mint hover:bg-mint/10"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
          {showFilters ? (
            <ChevronUp className="h-4 w-4 ml-2" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-2" />
          )}
        </Button>
      </div>

      {showFilters && (
        <Card className="bg-forest-light border border-mint/10">
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-white font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  {categoryOptions.map(category => (
                    <div key={category} className="flex items-center">
                      <Checkbox 
                        id={`category-${category}`} 
                        checked={filters.category.includes(category)}
                        onCheckedChange={() => handleFilterChange("category", category)}
                        className="border-mint/30 data-[state=checked]:bg-mint data-[state=checked]:text-forest"
                      />
                      <label 
                        htmlFor={`category-${category}`} 
                        className="ml-2 text-sm text-white"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-3">Prep Time</h3>
                <div className="space-y-2">
                  {prepTimeOptions.map(option => (
                    <div key={option.value} className="flex items-center">
                      <Checkbox 
                        id={`prep-${option.value}`} 
                        checked={filters.prepTime.includes(option.value)}
                        onCheckedChange={() => handleFilterChange("prepTime", option.value)}
                        className="border-mint/30 data-[state=checked]:bg-mint data-[state=checked]:text-forest"
                      />
                      <label 
                        htmlFor={`prep-${option.value}`} 
                        className="ml-2 text-sm text-white"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-medium mb-3">Difficulty</h3>
                <div className="space-y-2">
                  {difficultyOptions.map(difficulty => (
                    <div key={difficulty} className="flex items-center">
                      <Checkbox 
                        id={`difficulty-${difficulty}`} 
                        checked={filters.difficulty.includes(difficulty)}
                        onCheckedChange={() => handleFilterChange("difficulty", difficulty)}
                        className="border-mint/30 data-[state=checked]:bg-mint data-[state=checked]:text-forest"
                      />
                      <label 
                        htmlFor={`difficulty-${difficulty}`} 
                        className="ml-2 text-sm text-white"
                      >
                        {difficulty}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchFilters;
