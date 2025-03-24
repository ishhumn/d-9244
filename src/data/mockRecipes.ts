
import { Recipe } from "@/types/recipe";

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    name: "Classic Chocolate Chip Cookies",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups semi-sweet chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Combine flour, baking soda, and salt in a small bowl.",
      "Beat butter, granulated sugar, and brown sugar in a large mixer bowl.",
      "Add eggs one at a time, beating well after each addition. Beat in vanilla.",
      "Gradually beat in flour mixture. Stir in chocolate chips.",
      "Drop by rounded tablespoon onto ungreased baking sheets.",
      "Bake for 9 to 11 minutes or until golden brown.",
      "Cool on baking sheets for 2 minutes; remove to wire racks to cool completely."
    ],
    category: "Desserts",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    prepTimeMinutes: 15,
    difficulty: "Easy",
    ratings: [4, 5, 5, 4, 5],
    comments: [
      {
        id: "c1",
        text: "These turned out amazing! So chewy and delicious.",
        author: "CookieLover",
        createdAt: new Date("2023-05-15")
      }
    ],
    createdAt: new Date("2023-05-10")
  },
  {
    id: "2",
    name: "Quick Vegetable Stir Fry",
    ingredients: [
      "2 tbsp vegetable oil",
      "1 onion, sliced",
      "2 bell peppers, sliced",
      "2 cups broccoli florets",
      "1 carrot, julienned",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "3 tbsp soy sauce",
      "1 tbsp honey",
      "1 tsp sesame oil",
      "2 green onions, sliced",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "Heat oil in a large wok or skillet over high heat.",
      "Add onion and stir-fry for 1 minute.",
      "Add bell peppers, broccoli, and carrot. Stir-fry for 3-4 minutes.",
      "Add garlic and ginger, stir-fry for 30 seconds until fragrant.",
      "Mix soy sauce, honey, and sesame oil in a small bowl.",
      "Pour sauce over vegetables and toss to coat evenly.",
      "Cook for another 1-2 minutes until vegetables are crisp-tender.",
      "Garnish with green onions and sesame seeds before serving."
    ],
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    prepTimeMinutes: 10,
    difficulty: "Easy",
    ratings: [5, 4, 5, 5],
    comments: [
      {
        id: "c2",
        text: "So quick and healthy! I added tofu for protein.",
        author: "VeggieChef",
        createdAt: new Date("2023-06-02")
      }
    ],
    createdAt: new Date("2023-06-01")
  },
  {
    id: "3",
    name: "Spicy Buffalo Chicken Wings",
    ingredients: [
      "2 lbs chicken wings",
      "1 tbsp vegetable oil",
      "1 tsp garlic powder",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "1/2 cup hot sauce",
      "1/4 cup butter, melted",
      "1 tbsp honey",
      "Celery sticks",
      "Blue cheese or ranch dressing"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "Pat wings dry with paper towels.",
      "In a large bowl, toss wings with oil, garlic powder, salt, and pepper.",
      "Arrange wings on a baking rack over a baking sheet.",
      "Bake for 45-50 minutes until crispy and cooked through.",
      "In a bowl, whisk together hot sauce, melted butter, and honey.",
      "Toss cooked wings in the sauce until well coated.",
      "Serve with celery sticks and blue cheese or ranch dressing."
    ],
    category: "Spicy",
    imageUrl: "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
    prepTimeMinutes: 60,
    difficulty: "Medium",
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        id: "c3",
        text: "Perfect amount of heat! The honey adds a nice touch of sweetness.",
        author: "WingMaster",
        createdAt: new Date("2023-07-05")
      }
    ],
    createdAt: new Date("2023-07-01")
  },
  {
    id: "4",
    name: "Simple Avocado Toast",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "1/2 lemon, juiced",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "1 small tomato, sliced (optional)",
      "2 eggs (optional)"
    ],
    instructions: [
      "Toast bread slices until golden and crisp.",
      "Cut avocado in half, remove pit, and scoop flesh into a bowl.",
      "Add lemon juice, salt, and pepper. Mash with a fork to desired consistency.",
      "Spread avocado mixture evenly on toast slices.",
      "Top with optional toppings: red pepper flakes, sliced tomato, or fried eggs.",
      "Serve immediately."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1492086d1",
    prepTimeMinutes: 5,
    difficulty: "Easy",
    ratings: [4, 5, 4, 4],
    comments: [
      {
        id: "c4",
        text: "My go-to breakfast! I love adding a poached egg on top.",
        author: "AvocadoFan",
        createdAt: new Date("2023-08-12")
      }
    ],
    createdAt: new Date("2023-08-10")
  }
];
