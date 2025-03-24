
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
  },
  {
    id: "5",
    name: "Homemade Margherita Pizza",
    ingredients: [
      "1 pound pizza dough",
      "1/2 cup tomato sauce",
      "8 oz fresh mozzarella, sliced",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "1 clove garlic, minced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 475°F (245°C) with a pizza stone if available.",
      "Stretch the dough into a 12-inch circle on parchment paper.",
      "Mix olive oil with minced garlic and brush over the dough.",
      "Spread tomato sauce evenly over the dough, leaving a small border.",
      "Arrange mozzarella slices on top of the sauce.",
      "Season with salt and pepper.",
      "Bake for 10-12 minutes until crust is golden and cheese is bubbly.",
      "Top with fresh basil leaves before serving."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    prepTimeMinutes: 25,
    difficulty: "Medium",
    ratings: [5, 4, 5, 5, 5],
    comments: [
      {
        id: "c5",
        text: "So much better than delivery pizza! The fresh basil makes all the difference.",
        author: "PizzaFanatic",
        createdAt: new Date("2023-06-25")
      }
    ],
    createdAt: new Date("2023-06-20")
  },
  {
    id: "6",
    name: "Classic French Onion Soup",
    ingredients: [
      "4 large onions, thinly sliced",
      "3 tbsp butter",
      "2 tbsp olive oil",
      "1 tsp sugar",
      "2 cloves garlic, minced",
      "1/4 cup dry white wine",
      "6 cups beef broth",
      "1 bay leaf",
      "2 sprigs fresh thyme",
      "Salt and pepper to taste",
      "4 slices French bread",
      "1 1/2 cups grated Gruyère cheese"
    ],
    instructions: [
      "In a large pot, melt butter with olive oil over medium heat.",
      "Add sliced onions and sugar, cook slowly for 25-30 minutes until deeply caramelized.",
      "Add garlic and cook for another minute.",
      "Pour in wine to deglaze the pot, scraping up browned bits.",
      "Add beef broth, bay leaf, and thyme. Bring to a simmer.",
      "Cover and simmer for 30 minutes, then season with salt and pepper.",
      "Preheat broiler. Ladle soup into oven-safe bowls.",
      "Top each bowl with a slice of bread and sprinkled cheese.",
      "Broil until cheese is melted and bubbly, about 2-3 minutes."
    ],
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1605908580413-695722219f55",
    prepTimeMinutes: 70,
    difficulty: "Medium",
    ratings: [5, 5, 5, 4, 5],
    comments: [
      {
        id: "c6",
        text: "The key is definitely in caramelizing those onions properly. Worth the wait!",
        author: "SoupLover",
        createdAt: new Date("2023-09-15")
      }
    ],
    createdAt: new Date("2023-09-10")
  },
  {
    id: "7",
    name: "Honey Garlic Salmon",
    ingredients: [
      "4 salmon fillets",
      "4 cloves garlic, minced",
      "3 tbsp honey",
      "2 tbsp soy sauce",
      "1 tbsp lemon juice",
      "1 tsp red pepper flakes (optional)",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "Chopped parsley for garnish"
    ],
    instructions: [
      "In a small bowl, mix garlic, honey, soy sauce, lemon juice, and red pepper flakes.",
      "Season salmon fillets with salt and pepper.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Add salmon fillets skin-side down and cook for 3-4 minutes.",
      "Flip salmon and pour the sauce over it.",
      "Cook for another 3-4 minutes, basting with the sauce occasionally.",
      "Remove from heat when salmon is cooked through and sauce has thickened.",
      "Garnish with chopped parsley and serve."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    prepTimeMinutes: 15,
    difficulty: "Easy",
    ratings: [5, 4, 5, 5, 4],
    comments: [
      {
        id: "c7",
        text: "Made this last night and it was amazing! Even my kids who don't like fish loved it.",
        author: "FishFan",
        createdAt: new Date("2023-09-05")
      }
    ],
    createdAt: new Date("2023-09-01")
  },
  {
    id: "8",
    name: "Homemade Guacamole",
    ingredients: [
      "3 ripe avocados",
      "1 lime, juiced",
      "1/2 red onion, finely diced",
      "2 Roma tomatoes, diced",
      "1/4 cup cilantro, chopped",
      "1 jalapeño, minced (seeds removed for less heat)",
      "2 cloves garlic, minced",
      "1/2 tsp cumin",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cut avocados in half, remove pits, and scoop flesh into a bowl.",
      "Add lime juice and mash avocados to desired consistency.",
      "Fold in red onion, tomatoes, cilantro, jalapeño, and garlic.",
      "Season with cumin, salt, and pepper.",
      "Taste and adjust seasoning if needed.",
      "Serve immediately or cover with plastic wrap (pressed directly onto surface) and refrigerate."
    ],
    category: "Spicy",
    imageUrl: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62",
    prepTimeMinutes: 10,
    difficulty: "Easy",
    ratings: [5, 5, 5, 5, 4],
    comments: [
      {
        id: "c8",
        text: "Best guacamole recipe I've tried! The cumin adds a nice depth of flavor.",
        author: "AvocadoAddict",
        createdAt: new Date("2023-07-18")
      }
    ],
    createdAt: new Date("2023-07-15")
  },
  {
    id: "9",
    name: "Thai Green Curry",
    ingredients: [
      "2 tbsp green curry paste",
      "1 can (14 oz) coconut milk",
      "1 lb chicken breast, sliced",
      "1 red bell pepper, sliced",
      "1 green bell pepper, sliced",
      "1 cup snap peas",
      "1 small eggplant, cubed",
      "2 tbsp fish sauce",
      "1 tbsp brown sugar",
      "1/4 cup Thai basil leaves",
      "Lime wedges for serving",
      "Jasmine rice for serving"
    ],
    instructions: [
      "In a large pan or wok, heat 2 tbsp of coconut milk over medium-high heat.",
      "Add green curry paste and stir for 1 minute until fragrant.",
      "Add chicken and cook for 3-4 minutes until no longer pink.",
      "Pour in remaining coconut milk, fish sauce, and brown sugar.",
      "Bring to a simmer and add bell peppers, snap peas, and eggplant.",
      "Cook for 5-7 minutes until vegetables are tender but still crisp.",
      "Stir in Thai basil leaves just before serving.",
      "Serve over jasmine rice with lime wedges on the side."
    ],
    category: "Spicy",
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd",
    prepTimeMinutes: 30,
    difficulty: "Medium",
    ratings: [5, 4, 5, 5, 5],
    comments: [
      {
        id: "c9",
        text: "Incredibly flavorful! I added some bamboo shoots which worked well.",
        author: "CurryKing",
        createdAt: new Date("2023-08-22")
      }
    ],
    createdAt: new Date("2023-08-20")
  },
  {
    id: "10",
    name: "Classic Tiramisu",
    ingredients: [
      "6 egg yolks",
      "3/4 cup sugar",
      "2/3 cup milk",
      "1 1/4 cups heavy cream",
      "1 lb mascarpone cheese",
      "1/2 tsp vanilla extract",
      "1 cup strong coffee, cooled",
      "2 tbsp rum (optional)",
      "24 ladyfinger cookies",
      "2 tbsp cocoa powder",
      "Dark chocolate shavings for garnish"
    ],
    instructions: [
      "In a medium saucepan, whisk together egg yolks and sugar until well blended.",
      "Whisk in milk and cook over medium heat, stirring constantly, until mixture boils.",
      "Boil gently for 1 minute, then remove from heat and allow to cool slightly.",
      "Cover and chill in refrigerator for 1 hour.",
      "In a medium bowl, beat cream with vanilla until stiff peaks form.",
      "Whisk mascarpone into the yolk mixture until smooth.",
      "Fold in whipped cream.",
      "Mix coffee and rum in a shallow dish.",
      "Dip ladyfingers quickly into coffee mixture and arrange in the bottom of a 9x13 inch dish.",
      "Spread half the mascarpone mixture over the ladyfingers.",
      "Repeat with remaining ladyfingers and mascarpone mixture.",
      "Dust with cocoa powder and garnish with chocolate shavings.",
      "Cover and refrigerate for at least 6 hours before serving."
    ],
    category: "Desserts",
    imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    prepTimeMinutes: 40,
    difficulty: "Medium",
    ratings: [5, 5, 5, 5, 5],
    comments: [
      {
        id: "c10",
        text: "Absolutely divine! I've made this three times now and it's perfect every time.",
        author: "DessertQueen",
        createdAt: new Date("2023-07-30")
      }
    ],
    createdAt: new Date("2023-07-28")
  },
  {
    id: "11",
    name: "Vegetable Lasagna",
    ingredients: [
      "9 lasagna noodles",
      "2 tbsp olive oil",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 zucchini, diced",
      "1 bell pepper, diced",
      "2 cups spinach",
      "1 jar (24 oz) marinara sauce",
      "15 oz ricotta cheese",
      "1 egg",
      "2 cups shredded mozzarella",
      "1/2 cup grated Parmesan",
      "1 tbsp Italian seasoning",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cook lasagna noodles according to package directions. Drain and set aside.",
      "Heat olive oil in a large skillet over medium heat.",
      "Add onion and garlic, sauté until soft.",
      "Add zucchini and bell pepper, cook for 5 minutes.",
      "Stir in spinach until wilted, then mix in marinara sauce.",
      "In a bowl, combine ricotta, egg, half the mozzarella, half the Parmesan, and Italian seasoning.",
      "In a 9x13 baking dish, spread a thin layer of vegetable sauce.",
      "Layer 3 lasagna noodles, 1/3 of the ricotta mixture, and 1/3 of the vegetable sauce.",
      "Repeat layers twice more.",
      "Top with remaining mozzarella and Parmesan.",
      "Cover with foil and bake for 25 minutes.",
      "Remove foil and bake for another 15 minutes until cheese is bubbly.",
      "Let stand for 10 minutes before serving."
    ],
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1619895092538-128341789043",
    prepTimeMinutes: 60,
    difficulty: "Medium",
    ratings: [4, 5, 4, 5, 5],
    comments: [
      {
        id: "c11",
        text: "This was delicious! I added mushrooms as well and it turned out great.",
        author: "VeggieQueen",
        createdAt: new Date("2023-08-05")
      }
    ],
    createdAt: new Date("2023-08-01")
  },
  {
    id: "12",
    name: "Homemade Hummus",
    ingredients: [
      "1 can (15 oz) chickpeas, drained and rinsed",
      "1/4 cup fresh lemon juice",
      "1/4 cup tahini",
      "2 cloves garlic, minced",
      "2 tbsp olive oil, plus more for serving",
      "1/2 tsp ground cumin",
      "Salt to taste",
      "2-3 tbsp water",
      "Paprika and chopped parsley for garnish"
    ],
    instructions: [
      "Combine chickpeas, lemon juice, tahini, garlic, olive oil, and cumin in a food processor.",
      "Process until smooth, adding water as needed to reach desired consistency.",
      "Season with salt to taste.",
      "Transfer to a serving bowl, drizzle with olive oil, and sprinkle with paprika and parsley.",
      "Serve with pita bread, crackers, or fresh vegetables."
    ],
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1593001872095-7d5b3868dd20",
    prepTimeMinutes: 10,
    difficulty: "Easy",
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        id: "c12",
        text: "So much better than store-bought! The fresh lemon juice makes a huge difference.",
        author: "MedFoodFan",
        createdAt: new Date("2023-09-20")
      }
    ],
    createdAt: new Date("2023-09-18")
  },
  {
    id: "13",
    name: "Korean Bibimbap",
    ingredients: [
      "2 cups cooked white rice",
      "1/2 lb beef sirloin, thinly sliced",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tbsp brown sugar",
      "2 cloves garlic, minced",
      "1 carrot, julienned",
      "1 zucchini, julienned",
      "2 cups spinach",
      "1 cup bean sprouts",
      "4 eggs",
      "4 tbsp gochujang (Korean chili paste)",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "Marinate beef in soy sauce, 1 tsp sesame oil, brown sugar, and garlic for 30 minutes.",
      "Sauté carrots in a pan with a little oil until tender. Set aside.",
      "Sauté zucchini until tender. Set aside.",
      "Blanch spinach, drain, and season with a pinch of salt and 1 tsp sesame oil.",
      "Blanch bean sprouts, drain, and season with a pinch of salt and 1 tsp sesame oil.",
      "Cook marinated beef in a pan until browned. Set aside.",
      "Fry eggs sunny-side up in the same pan.",
      "To serve, place rice in bowls and arrange vegetables and beef on top.",
      "Place a fried egg on each bowl.",
      "Serve with gochujang on the side, to be mixed in before eating.",
      "Sprinkle with sesame seeds."
    ],
    category: "Spicy",
    imageUrl: "https://images.unsplash.com/photo-1553163147-622ab57be1c7",
    prepTimeMinutes: 45,
    difficulty: "Medium",
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        id: "c13",
        text: "This brings me back to Korea! The gochujang makes this dish special.",
        author: "KFoodLover",
        createdAt: new Date("2023-06-15")
      }
    ],
    createdAt: new Date("2023-06-10")
  },
  {
    id: "14",
    name: "Banana Bread",
    ingredients: [
      "3 ripe bananas, mashed",
      "1/3 cup melted butter",
      "1 tsp baking soda",
      "Pinch of salt",
      "3/4 cup sugar",
      "1 large egg, beaten",
      "1 tsp vanilla extract",
      "1 1/2 cups all-purpose flour",
      "1/2 cup chopped walnuts (optional)"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease a 4x8-inch loaf pan.",
      "In a mixing bowl, mix mashed bananas with melted butter.",
      "Mix in baking soda and salt, then stir in sugar, beaten egg, and vanilla.",
      "Fold in flour and walnuts (if using).",
      "Pour batter into the prepared loaf pan.",
      "Bake for 55-60 minutes, or until a toothpick inserted into the center comes out clean.",
      "Let cool in the pan for 10 minutes, then remove to a wire rack to cool completely."
    ],
    category: "Desserts",
    imageUrl: "https://images.unsplash.com/photo-1621994153189-6223b41f7a37",
    prepTimeMinutes: 15,
    difficulty: "Easy",
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        id: "c14",
        text: "My kids love this! I add chocolate chips sometimes for extra sweetness.",
        author: "BakingMom",
        createdAt: new Date("2023-05-25")
      }
    ],
    createdAt: new Date("2023-05-20")
  },
  {
    id: "15",
    name: "Fresh Spring Rolls",
    ingredients: [
      "12 rice paper wrappers",
      "1 cucumber, julienned",
      "1 carrot, julienned",
      "1 red bell pepper, julienned",
      "1 cup purple cabbage, thinly sliced",
      "1 avocado, sliced",
      "1 cup fresh mint leaves",
      "1 cup fresh cilantro leaves",
      "1 cup fresh basil leaves",
      "12 large shrimp, cooked, peeled and halved (optional)",
      "For the peanut sauce:",
      "1/2 cup peanut butter",
      "2 tbsp hoisin sauce",
      "1 tbsp soy sauce",
      "1 tbsp lime juice",
      "1 clove garlic, minced",
      "1-2 tbsp water to thin"
    ],
    instructions: [
      "Fill a large bowl with warm water.",
      "Working one at a time, dip rice paper in warm water for 10-15 seconds until softened.",
      "Place on a work surface and arrange vegetables, herbs, and shrimp (if using) in the center.",
      "Fold in sides, then roll tightly from the bottom up, like a burrito.",
      "Repeat with remaining ingredients.",
      "For the sauce, whisk together all sauce ingredients until smooth.",
      "Serve spring rolls with peanut dipping sauce."
    ],
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1581184953963-d15972933db1",
    prepTimeMinutes: 30,
    difficulty: "Medium",
    ratings: [5, 4, 5, 5, 4],
    comments: [
      {
        id: "c15",
        text: "So fresh and healthy! The peanut sauce is to die for.",
        author: "HealthNut",
        createdAt: new Date("2023-07-10")
      }
    ],
    createdAt: new Date("2023-07-08")
  },
  {
    id: "16",
    name: "Classic Beef Stew",
    ingredients: [
      "2 lbs beef chuck, cubed",
      "3 tbsp vegetable oil",
      "2 onions, diced",
      "3 cloves garlic, minced",
      "3 tbsp all-purpose flour",
      "1 cup red wine",
      "4 cups beef broth",
      "2 bay leaves",
      "1 tsp dried thyme",
      "3 carrots, chopped",
      "3 potatoes, cubed",
      "2 celery stalks, chopped",
      "1 cup frozen peas",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season beef with salt and pepper.",
      "Heat oil in a large pot over medium-high heat.",
      "Working in batches, brown beef on all sides. Transfer to a plate.",
      "Add onions to the pot and cook until soft.",
      "Add garlic and cook for another minute.",
      "Sprinkle flour over the onions and stir to coat.",
      "Slowly add red wine, scraping up browned bits from the bottom.",
      "Add beef broth, bay leaves, and thyme. Return beef to the pot.",
      "Bring to a boil, then reduce heat to low. Cover and simmer for 1.5 hours.",
      "Add carrots, potatoes, and celery. Simmer for 45 minutes more.",
      "Add peas and cook for 5 more minutes.",
      "Adjust seasoning with salt and pepper.",
      "Remove bay leaves before serving."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1618229456776-8c9e357a2d82",
    prepTimeMinutes: 150,
    difficulty: "Medium",
    ratings: [5, 4, 5, 5, 5],
    comments: [
      {
        id: "c16",
        text: "Perfect comfort food for cold days! I add a bit of Worcestershire sauce for extra flavor.",
        author: "ComfortFoodie",
        createdAt: new Date("2023-10-05")
      }
    ],
    createdAt: new Date("2023-10-01")
  },
  {
    id: "17",
    name: "Caprese Salad",
    ingredients: [
      "3 large tomatoes, sliced",
      "1 lb fresh mozzarella, sliced",
      "1 bunch fresh basil leaves",
      "3 tbsp extra virgin olive oil",
      "2 tbsp balsamic glaze",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Arrange tomato and mozzarella slices alternately on a serving platter.",
      "Tuck basil leaves between the tomato and cheese slices.",
      "Drizzle with olive oil and balsamic glaze.",
      "Season with salt and pepper.",
      "Serve immediately."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5",
    prepTimeMinutes: 10,
    difficulty: "Easy",
    ratings: [5, 5, 5, 4, 5],
    comments: [
      {
        id: "c17",
        text: "So simple yet so delicious! Use the best quality ingredients you can find.",
        author: "ItalianChef",
        createdAt: new Date("2023-08-15")
      }
    ],
    createdAt: new Date("2023-08-12")
  },
  {
    id: "18",
    name: "Chicken Tikka Masala",
    ingredients: [
      "2 lbs chicken breast, cut into chunks",
      "1 cup plain yogurt",
      "2 tbsp lemon juice",
      "6 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tsp cumin",
      "2 tsp garam masala",
      "2 tsp turmeric",
      "1 tsp coriander",
      "1 tsp paprika",
      "1 tsp cayenne pepper",
      "2 tbsp vegetable oil",
      "1 large onion, diced",
      "1 can (14 oz) tomato sauce",
      "1 cup heavy cream",
      "Fresh cilantro for garnish",
      "Cooked rice for serving"
    ],
    instructions: [
      "In a bowl, mix yogurt, lemon juice, half the garlic, half the ginger, 1 tsp cumin, 1 tsp garam masala, 1 tsp turmeric, salt, and pepper.",
      "Add chicken to the marinade, mix well, cover, and refrigerate for at least 1 hour.",
      "Heat oil in a large skillet over medium-high heat.",
      "Add marinated chicken and cook until browned, about 5 minutes per side.",
      "Remove chicken and set aside.",
      "In the same skillet, add onion and cook until soft.",
      "Add remaining garlic, ginger, and spices. Cook for 1 minute until fragrant.",
      "Stir in tomato sauce and bring to a simmer.",
      "Return chicken to the skillet, cover, and simmer for 10-15 minutes.",
      "Stir in heavy cream and simmer for another 5 minutes.",
      "Garnish with cilantro and serve with rice."
    ],
    category: "Spicy",
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    prepTimeMinutes: 90,
    difficulty: "Medium",
    ratings: [5, 5, 5, 5, 4],
    comments: [
      {
        id: "c18",
        text: "Restaurant quality right at home! The marinade is key to the flavor.",
        author: "CurryFan",
        createdAt: new Date("2023-09-25")
      }
    ],
    createdAt: new Date("2023-09-22")
  },
  {
    id: "19",
    name: "Vegetarian Pad Thai",
    ingredients: [
      "8 oz rice noodles",
      "3 tbsp vegetable oil",
      "3 cloves garlic, minced",
      "1 block (14 oz) firm tofu, cubed",
      "2 eggs, beaten",
      "1 cup bean sprouts",
      "1/4 cup chopped peanuts",
      "3 green onions, sliced",
      "1/4 cup cilantro, chopped",
      "Lime wedges for serving",
      "For the sauce:",
      "3 tbsp brown sugar",
      "3 tbsp fish sauce (or soy sauce for vegetarian)",
      "2 tbsp rice vinegar",
      "1 tbsp sriracha sauce",
      "1 tbsp tamarind paste"
    ],
    instructions: [
      "Soak rice noodles in hot water according to package instructions, then drain.",
      "Mix all sauce ingredients in a small bowl.",
      "Heat oil in a large wok or skillet over high heat.",
      "Add garlic and stir-fry for 30 seconds.",
      "Add tofu and cook until golden, about 3-4 minutes.",
      "Push ingredients to one side, add eggs, and scramble until cooked.",
      "Add drained noodles and sauce, toss to coat.",
      "Add bean sprouts and green onions, stir-fry for 1-2 minutes.",
      "Serve garnished with peanuts, cilantro, and lime wedges."
    ],
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e",
    prepTimeMinutes: 30,
    difficulty: "Medium",
    ratings: [4, 5, 4, 5, 4],
    comments: [
      {
        id: "c19",
        text: "This really satisfies my Thai food cravings! I add extra sriracha for more heat.",
        author: "AsianFoodFan",
        createdAt: new Date("2023-10-10")
      }
    ],
    createdAt: new Date("2023-10-08")
  },
  {
    id: "20",
    name: "Homemade Apple Pie",
    ingredients: [
      "For the crust:",
      "2 1/2 cups all-purpose flour",
      "1 tsp salt",
      "1 tbsp sugar",
      "1 cup unsalted butter, cold and cubed",
      "6-8 tbsp ice water",
      "For the filling:",
      "8 cups apples, peeled and sliced",
      "1/2 cup granulated sugar",
      "1/4 cup brown sugar",
      "3 tbsp all-purpose flour",
      "1 tbsp lemon juice",
      "1 tsp cinnamon",
      "1/4 tsp nutmeg",
      "1/4 tsp salt",
      "2 tbsp butter, cut into small pieces",
      "1 egg, beaten (for egg wash)",
      "1 tbsp sugar (for sprinkling)"
    ],
    instructions: [
      "For the crust: In a food processor, combine flour, salt, and sugar.",
      "Add cold butter and pulse until mixture resembles coarse crumbs.",
      "Gradually add ice water, pulsing until dough begins to form.",
      "Divide dough in half, shape into disks, wrap, and refrigerate for at least 1 hour.",
      "Preheat oven to 425°F (220°C).",
      "For the filling: In a large bowl, combine apples, sugars, flour, lemon juice, cinnamon, nutmeg, and salt.",
      "Roll out one disk of dough and place in a 9-inch pie dish.",
      "Add apple filling and dot with butter pieces.",
      "Roll out second disk of dough and place over filling. Crimp edges and cut vents.",
      "Brush top with beaten egg and sprinkle with sugar.",
      "Bake for 45-50 minutes, until crust is golden and filling is bubbly.",
      "Allow to cool before serving."
    ],
    category: "Desserts",
    imageUrl: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9",
    prepTimeMinutes: 120,
    difficulty: "Hard",
    ratings: [5, 5, 5, 5, 5],
    comments: [
      {
        id: "c20",
        text: "This pie was the star of our Thanksgiving dinner! Worth every minute of preparation.",
        author: "BakingQueen",
        createdAt: new Date("2023-11-25")
      }
    ],
    createdAt: new Date("2023-11-20")
  },
  {
    id: "21",
    name: "Lemon Garlic Butter Shrimp Pasta",
    ingredients: [
      "8 oz fettuccine pasta",
      "1 lb large shrimp, peeled and deveined",
      "4 tbsp butter",
      "4 cloves garlic, minced",
      "1 lemon, juiced and zested",
      "1/4 cup white wine",
      "1/4 cup fresh parsley, chopped",
      "1/4 cup grated Parmesan cheese",
      "Red pepper flakes to taste",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook pasta according to package instructions. Reserve 1/2 cup pasta water before draining.",
      "In a large skillet, melt 2 tbsp butter over medium-high heat.",
      "Add shrimp, season with salt and pepper, and cook for 1-2 minutes per side until pink. Remove from pan.",
      "In the same skillet, add remaining butter, garlic, and red pepper flakes. Cook for 1 minute.",
      "Add white wine and lemon juice, simmer for 2-3 minutes.",
      "Return shrimp to the skillet, add drained pasta, lemon zest, and Parmesan cheese.",
      "Toss to combine, adding reserved pasta water as needed to create a sauce.",
      "Garnish with parsley before serving."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    prepTimeMinutes: 20,
    difficulty: "Easy",
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        id: "c21",
        text: "Quick, easy, and so flavorful! I make this at least once a month.",
        author: "SeafoodLover",
        createdAt: new Date("2023-11-10")
      }
    ],
    createdAt: new Date("2023-11-05")
  },
  {
    id: "22",
    name: "Homemade Beef Burgers",
    ingredients: [
      "2 lbs ground beef (80/20)",
      "1 onion, finely diced",
      "2 cloves garlic, minced",
      "1 tbsp Worcestershire sauce",
      "1 tbsp dijon mustard",
      "1 egg",
      "1/2 cup breadcrumbs",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "6 burger buns",
      "6 slices cheese (cheddar or American)",
      "Lettuce, tomato, onion for serving",
      "Ketchup, mustard, mayo for serving"
    ],
    instructions: [
      "In a large bowl, combine ground beef, onion, garlic, Worcestershire sauce, mustard, egg, breadcrumbs, salt, and pepper.",
      "Mix gently with your hands until just combined. Do not overmix.",
      "Divide mixture into 6 equal portions and shape into patties, making a slight indentation in the center of each.",
      "Preheat grill or skillet to medium-high heat.",
      "Cook burgers for 4-5 minutes per side for medium doneness.",
      "Add cheese slices for the last minute of cooking to melt.",
      "Toast burger buns lightly if desired.",
      "Assemble burgers with your choice of toppings and condiments."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    prepTimeMinutes: 25,
    difficulty: "Easy",
    ratings: [5, 4, 5, 5, 4],
    comments: [
      {
        id: "c22",
        text: "These beat restaurant burgers any day! The Worcestershire sauce adds so much flavor.",
        author: "BurgerKing",
        createdAt: new Date("2023-05-30")
      }
    ],
    createdAt: new Date("2023-05-28")
  },
  {
    id: "23",
    name: "Vegetable Fried Rice",
    ingredients: [
      "3 cups cooked rice, cooled",
      "2 tbsp vegetable oil",
      "2 eggs, beaten",
      "1 onion, diced",
      "2 carrots, diced",
      "1 cup frozen peas",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "3 tbsp soy sauce",
      "1 tbsp sesame oil",
      "3 green onions, sliced",
      "1/4 cup cashews or peanuts (optional)"
    ],
    instructions: [
      "Heat 1 tbsp oil in a large wok or skillet over high heat.",
      "Add beaten eggs and cook, stirring, until set. Remove from pan and set aside.",
      "Add remaining oil to the wok. Add onion, carrots, and cook for 3-4 minutes.",
      "Add garlic and ginger, cook for 30 seconds until fragrant.",
      "Add rice, breaking up any clumps, and stir-fry for 2-3 minutes.",
      "Add peas and cook for 1-2 minutes until heated through.",
      "Return scrambled eggs to the wok, add soy sauce and sesame oil, and toss to combine.",
      "Garnish with green onions and nuts before serving."
    ],
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    prepTimeMinutes: 15,
    difficulty: "Easy",
    ratings: [4, 5, 4, 5, 4],
    comments: [
      {
        id: "c23",
        text: "Great way to use leftover rice! I add a bit of chili sauce for some heat.",
        author: "RiceLover",
        createdAt: new Date("2023-10-15")
      }
    ],
    createdAt: new Date("2023-10-12")
  },
  {
    id: "24",
    name: "Homemade Pizza Dough",
    ingredients: [
      "3 1/2 to 4 cups all-purpose flour",
      "1 tsp sugar",
      "1 envelope instant dry yeast",
      "2 tsp salt",
      "1 1/2 cups warm water",
      "2 tbsp olive oil, plus more for the bowl"
    ],
    instructions: [
      "In a large bowl, combine 3 1/2 cups flour, sugar, yeast, and salt.",
      "Add warm water and olive oil, stir until a soft dough forms.",
      "Turn dough onto a floured surface and knead for 5-7 minutes until smooth and elastic.",
      "Form dough into a ball and place in an oiled bowl, turning to coat.",
      "Cover with a damp cloth and let rise in a warm place for 1 hour, until doubled in size.",
      "Punch down dough and divide into 2 equal pieces for two 12-inch pizzas.",
      "Roll out each piece on a floured surface to desired thickness.",
      "Add your favorite toppings and bake at 475°F (245°C) for 10-15 minutes until crust is golden."
    ],
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3",
    prepTimeMinutes: 70,
    difficulty: "Medium",
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        id: "c24",
        text: "This is my go-to pizza dough recipe. Always turns out perfect and crispy!",
        author: "PizzaMaster",
        createdAt: new Date("2023-04-20")
      }
    ],
    createdAt: new Date("2023-04-15")
  },
  {
    id: "25",
    name: "Chocolate Lava Cake",
    ingredients: [
      "1/2 cup unsalted butter",
      "4 oz semi-sweet chocolate",
      "1 cup powdered sugar",
      "2 whole eggs",
      "2 egg yolks",
      "1 tsp vanilla extract",
      "6 tbsp all-purpose flour",
      "1/4 tsp salt",
      "Butter and cocoa powder for ramekins",
      "Vanilla ice cream for serving (optional)"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "Butter and dust four 6-oz ramekins with cocoa powder.",
      "In a microwave-safe bowl, melt butter and chocolate in 30-second intervals, stirring each time, until smooth.",
      "Whisk in powdered sugar until well blended.",
      "Add eggs, egg yolks, and vanilla, whisking until combined.",
      "Stir in flour and salt until just combined.",
      "Divide batter evenly among prepared ramekins.",
      "Place ramekins on a baking sheet and bake for 12-14 minutes until sides are firm but centers are soft.",
      "Let stand for 1 minute, then run a knife around the edges and invert onto serving plates.",
      "Serve immediately, with vanilla ice cream if desired."
    ],
    category: "Desserts",
    imageUrl: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b",
    prepTimeMinutes: 25,
    difficulty: "Medium",
    ratings: [5, 5, 5, 5, 5],
    comments: [
      {
        id: "c25",
        text: "Restaurant quality dessert at home! That chocolate center is absolutely divine.",
        author: "ChocoholicChef",
        createdAt: new Date("2023-02-14")
      }
    ],
    createdAt: new Date("2023-02-10")
  },
  {
    id: "26",
    name: "Creamy Mushroom Risotto",
    ingredients: [
      "6 cups vegetable or chicken broth",
      "3 tbsp olive oil",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "1 lb mushrooms, sliced",
      "1 1/2 cups Arborio rice",
      "1/2 cup dry white wine",
      "1/2 cup grated Parmesan cheese",
      "2 tbsp butter",
      "2 tbsp fresh parsley, chopped",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a saucepan, bring broth to a simmer, then keep warm over low heat.",
      "In a large skillet or pot, heat 2 tbsp olive oil over medium heat.",
      "Add onion and cook until soft, about 5 minutes.",
      "Add garlic and cook for 30 seconds until fragrant.",
      "In a separate pan, heat 1 tbsp olive oil and sauté mushrooms until golden. Set aside.",
      "Add rice to the onion mixture and stir for 1-2 minutes until translucent around the edges.",
      "Add wine and stir until absorbed.",
      "Begin adding warm broth, one ladle at a time, stirring constantly and allowing each addition to be absorbed before adding more.",
      "Continue this process for about 18-20 minutes, until rice is creamy and al dente.",
      "Stir in mushrooms, Parmesan, butter, and parsley. Season with salt and pepper.",
      "Let stand for 2 minutes before serving."
    ],
    category: "Vegetarian",
    imageUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371",
    prepTimeMinutes: 45,
    difficulty: "Medium",
    ratings: [5, 4, 5, 5, 5],
    comments: [
      {
        id: "c26",
        text: "The creamiest risotto I've ever made! The key is definitely in the slow addition of broth.",
        author: "ItalianFoodie",
        createdAt: new Date("2023-03-15")
      }
    ],
    createdAt: new Date("2023-03-10")
  },
  {
    id: "27",
    name: "Fish Tacos with Lime Crema",
    ingredients: [
      "1 lb white fish fillets (tilapia, cod, or mahi-mahi)",
      "2 tbsp olive oil",
      "1 tbsp chili powder",
      "1 tsp cumin",
      "1/2 tsp garlic powder",
      "1/2 tsp paprika",
      "Salt and pepper to taste",
      "8 small corn tortillas",
      "2 cups shredded cabbage",
      "1 avocado, sliced",
      "1/4 cup cilantro, chopped",
      "For the lime crema:",
      "1/2 cup sour cream",
      "2 tbsp lime juice",
      "1 tsp lime zest",
      "Lime wedges for serving"
    ],
    instructions: [
      "In a small bowl, mix chili powder, cumin, garlic powder, paprika, salt, and pepper.",
      "Rub fish with olive oil, then coat with spice mixture.",
      "Heat a skillet over medium-high heat, cook fish for 3-4 minutes per side until flaky.",
      "Break fish into smaller pieces.",
      "Warm tortillas in a dry skillet or microwave.",
      "Mix sour cream, lime juice, and zest to make the crema.",
      "Assemble tacos with fish, cabbage, avocado, and cilantro.",
      "Drizzle with lime crema and serve with lime wedges."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
    prepTimeMinutes: 20,
    difficulty: "Easy",
    ratings: [5, 5, 4, 5, 4],
    comments: [
      {
        id: "c27",
        text: "These tacos are amazing! The lime crema really makes the dish special.",
        author: "TacoTuesday",
        createdAt: new Date("2023-04-04")
      }
    ],
    createdAt: new Date("2023-04-01")
  },
  {
    id: "28",
    name: "Pumpkin Spice Latte",
    ingredients: [
      "2 cups milk",
      "2 tbsp pumpkin puree",
      "2 tbsp sugar",
      "1 tbsp vanilla extract",
      "1/2 tsp pumpkin pie spice",
      "1/2 cup strong brewed coffee",
      "Whipped cream for topping",
      "Extra pumpkin pie spice for garnish"
    ],
    instructions: [
      "In a saucepan, combine milk, pumpkin puree, sugar, vanilla, and pumpkin pie spice.",
      "Heat over medium, whisking constantly, until hot but not boiling.",
      "Remove from heat and use a frother or blender to create foam.",
      "Pour coffee into two mugs, then add the pumpkin milk mixture.",
      "Top with whipped cream and a sprinkle of pumpkin pie spice."
    ],
    category: "Desserts",
    imageUrl: "https://images.unsplash.com/photo-1502849394214-c4b6352145fe",
    prepTimeMinutes: 10,
    difficulty: "Easy",
    ratings: [5, 4, 5, 4, 5],
    comments: [
      {
        id: "c28",
        text: "Better than the coffee shop version! I make this every fall weekend.",
        author: "PSLFanatic",
        createdAt: new Date("2023-10-20")
      }
    ],
    createdAt: new Date("2023-10-15")
  },
  {
    id: "29",
    name: "Homemade Chicken Noodle Soup",
    ingredients: [
      "1 whole chicken (about 4 lbs)",
      "12 cups water",
      "1 onion, diced",
      "3 carrots, sliced",
      "3 celery stalks, sliced",
      "3 cloves garlic, minced",
      "2 bay leaves",
      "1 tsp dried thyme",
      "8 oz egg noodles",
      "1/4 cup fresh parsley, chopped",
      "Salt and pepper to taste",
      "1 tbsp olive oil"
    ],
    instructions: [
      "Place chicken in a large pot and cover with water.",
      "Bring to a boil, reduce heat, and simmer for 1 hour until chicken is cooked through.",
      "Remove chicken and let cool enough to handle. Strain broth and return to pot.",
      "Shred chicken meat, discarding skin and bones.",
      "In the same pot, heat olive oil and sauté onions, carrots, celery, and garlic until softened.",
      "Add strained broth, bay leaves, and thyme. Bring to a simmer.",
      "Cook for 10-15 minutes until vegetables are tender.",
      "Add egg noodles and cook until tender, about 6-8 minutes.",
      "Add shredded chicken and parsley, season with salt and pepper.",
      "Remove bay leaves before serving."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    prepTimeMinutes: 90,
    difficulty: "Medium",
    ratings: [5, 5, 5, 4, 5],
    comments: [
      {
        id: "c29",
        text: "The ultimate comfort food! I make a big batch and freeze portions for when I'm feeling under the weather.",
        author: "SoupMama",
        createdAt: new Date("2023-01-15")
      }
    ],
    createdAt: new Date("2023-01-10")
  },
  {
    id: "30",
    name: "Spinach and Feta Stuffed Chicken Breast",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "6 oz fresh spinach",
      "4 oz feta cheese, crumbled",
      "2 cloves garlic, minced",
      "2 tbsp olive oil",
      "1 tsp dried oregano",
      "1 lemon, zested and juiced",
      "Salt and pepper to taste",
      "Toothpicks for securing"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "In a skillet, heat 1 tbsp olive oil over medium heat.",
      "Add garlic and cook for 30 seconds until fragrant.",
      "Add spinach and cook until wilted. Transfer to a bowl and let cool slightly.",
      "Mix cooled spinach with feta, lemon zest, and oregano.",
      "Cut a pocket into each chicken breast, being careful not to cut all the way through.",
      "Stuff each chicken breast with the spinach and feta mixture.",
      "Secure with toothpicks if needed.",
      "Season chicken with salt and pepper.",
      "Heat remaining olive oil in an oven-safe skillet over medium-high heat.",
      "Sear chicken breasts for 3 minutes per side until golden.",
      "Transfer skillet to the oven and bake for 15-20 minutes until chicken is cooked through.",
      "Drizzle with fresh lemon juice before serving.",
      "Remove toothpicks before serving."
    ],
    category: "Quick Meals",
    imageUrl: "https://images.unsplash.com/photo-1518492104633-130d5b3143ba",
    prepTimeMinutes: 35,
    difficulty: "Medium",
    ratings: [5, 5, 4, 5, 5],
    comments: [
      {
        id: "c30",
        text: "This looks impressive but is actually quite easy! Great for dinner parties.",
        author: "GourmetHome",
        createdAt: new Date("2023-02-25")
      }
    ],
    createdAt: new Date("2023-02-20")
  }
];

