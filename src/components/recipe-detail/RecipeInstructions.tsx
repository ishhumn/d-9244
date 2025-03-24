
interface RecipeInstructionsProps {
  instructions: string[];
}

export const RecipeInstructions = ({ instructions }: RecipeInstructionsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4 font-display">Preparation</h2>
      <ol className="space-y-5">
        {instructions.map((step, index) => (
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
  );
};
