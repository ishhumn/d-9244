
interface RecipeIngredientsProps {
  ingredients: string[];
}

export const RecipeIngredients = ({ ingredients }: RecipeIngredientsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4 font-display">Ingredients</h2>
      <ul className="space-y-3 text-white/90">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block h-2 w-2 rounded-full bg-mint mt-2 mr-3"></span>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};
