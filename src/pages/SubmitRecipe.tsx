
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Plus, X, Upload } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const SubmitRecipe = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "Vegetarian",
    prepTimeMinutes: "",
    difficulty: "Easy",
    ingredients: [""],
    instructions: [""],
    image: null as File | null
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (value: string) => {
    setFormData({ ...formData, category: value });
  };

  const handleDifficultyChange = (value: string) => {
    setFormData({ ...formData, difficulty: value as "Easy" | "Medium" | "Hard" });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ""]
    });
  };

  const removeIngredient = (index: number) => {
    const newIngredients = [...formData.ingredients];
    newIngredients.splice(index, 1);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addInstruction = () => {
    setFormData({
      ...formData,
      instructions: [...formData.instructions, ""]
    });
  };

  const removeInstruction = (index: number) => {
    const newInstructions = [...formData.instructions];
    newInstructions.splice(index, 1);
    setFormData({ ...formData, instructions: newInstructions });
  };

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...formData.instructions];
    newInstructions[index] = value;
    setFormData({ ...formData, instructions: newInstructions });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData({ ...formData, image: null });
    setImagePreview(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.prepTimeMinutes.trim() || isNaN(Number(formData.prepTimeMinutes))) return false;
    if (formData.ingredients.some(ing => !ing.trim())) return false;
    if (formData.instructions.some(inst => !inst.trim())) return false;
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill all required fields correctly");
      return;
    }
    
    // In a real app, this would send data to the backend
    // For demo purposes, we'll just show a success message and navigate back
    toast.success("Recipe submitted successfully! It will be reviewed shortly.");
    
    // Delay navigation to allow the toast to be seen
    setTimeout(() => {
      navigate("/");
    }, 2000);
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

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Submit a Recipe</h1>
        
        <Card className="bg-forest-light border border-mint/10">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-white">Recipe Name*</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., Homemade Chocolate Chip Cookies"
                  className="bg-forest border-mint/10 focus:border-mint/50 text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-white">Category*</Label>
                  <RadioGroup 
                    value={formData.category} 
                    onValueChange={handleCategoryChange}
                    className="space-y-2"
                  >
                    {["Vegetarian", "Quick Meals", "Desserts", "Spicy", "Other"].map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <RadioGroupItem 
                          value={category} 
                          id={`category-${category}`}
                          className="border-mint/30 text-mint"
                        />
                        <Label 
                          htmlFor={`category-${category}`} 
                          className="text-white cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <div className="space-y-3 mb-6">
                    <Label htmlFor="prepTimeMinutes" className="text-white">Prep Time (minutes)*</Label>
                    <Input
                      id="prepTimeMinutes"
                      name="prepTimeMinutes"
                      type="number"
                      value={formData.prepTimeMinutes}
                      onChange={handleInputChange}
                      min="1"
                      placeholder="e.g., 30"
                      className="bg-forest border-mint/10 focus:border-mint/50 text-white"
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-white">Difficulty Level*</Label>
                    <RadioGroup 
                      value={formData.difficulty} 
                      onValueChange={handleDifficultyChange}
                      className="flex space-x-4"
                    >
                      {["Easy", "Medium", "Hard"].map(level => (
                        <div key={level} className="flex items-center space-x-2">
                          <RadioGroupItem 
                            value={level} 
                            id={`difficulty-${level}`}
                            className="border-mint/30 text-mint"
                          />
                          <Label 
                            htmlFor={`difficulty-${level}`} 
                            className="text-white cursor-pointer"
                          >
                            {level}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-white">Ingredients*</Label>
                  <Button 
                    type="button" 
                    onClick={addIngredient}
                    variant="outline"
                    size="sm"
                    className="border-mint/20 text-mint hover:bg-mint/10"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add Ingredient
                  </Button>
                </div>
                <div className="space-y-3">
                  {formData.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={ingredient}
                        onChange={(e) => updateIngredient(index, e.target.value)}
                        placeholder={`Ingredient ${index + 1}`}
                        className="bg-forest border-mint/10 focus:border-mint/50 text-white"
                        required
                      />
                      {formData.ingredients.length > 1 && (
                        <Button 
                          type="button" 
                          onClick={() => removeIngredient(index)}
                          variant="outline"
                          size="icon"
                          className="border-mint/20 text-mint hover:bg-mint/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-white">Instructions*</Label>
                  <Button 
                    type="button" 
                    onClick={addInstruction}
                    variant="outline"
                    size="sm"
                    className="border-mint/20 text-mint hover:bg-mint/10"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add Step
                  </Button>
                </div>
                <div className="space-y-3">
                  {formData.instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="flex-grow">
                        <div className="flex items-start gap-2">
                          <div className="bg-mint/10 text-mint font-medium rounded-full h-6 w-6 flex items-center justify-center shrink-0 mt-2">
                            {index + 1}
                          </div>
                          <Textarea
                            value={instruction}
                            onChange={(e) => updateInstruction(index, e.target.value)}
                            placeholder={`Step ${index + 1}`}
                            className="bg-forest border-mint/10 focus:border-mint/50 text-white resize-none"
                            required
                          />
                        </div>
                      </div>
                      {formData.instructions.length > 1 && (
                        <Button 
                          type="button" 
                          onClick={() => removeInstruction(index)}
                          variant="outline"
                          size="icon"
                          className="border-mint/20 text-mint hover:bg-mint/10 mt-2"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-white">Recipe Image (Optional)</Label>
                {!imagePreview ? (
                  <div className="border-2 border-dashed border-mint/20 rounded-lg p-6 text-center">
                    <Upload className="h-10 w-10 text-mint/50 mx-auto mb-4" />
                    <p className="text-white/70 mb-4">Upload a photo of your recipe</p>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <Label 
                      htmlFor="image" 
                      className="bg-mint/10 text-mint px-4 py-2 rounded cursor-pointer hover:bg-mint/20 transition-colors inline-block"
                    >
                      Select Image
                    </Label>
                  </div>
                ) : (
                  <div className="relative">
                    <img 
                      src={imagePreview} 
                      alt="Recipe preview" 
                      className="w-full h-auto rounded-lg max-h-[300px] object-cover" 
                    />
                    <Button
                      type="button"
                      onClick={removeImage}
                      variant="outline"
                      size="icon"
                      className="absolute top-2 right-2 bg-forest/80 text-mint border-mint/20 hover:bg-forest"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              <div className="border-t border-mint/10 pt-6 flex justify-end">
                <Button
                  type="submit"
                  className="bg-mint hover:bg-mint/90 text-forest font-medium px-6"
                >
                  Submit Recipe
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubmitRecipe;
