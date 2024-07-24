const sequelize = require('../config/connection');
const { User, Recipe, Ingredient, RecipeIngredient } = require('../models');

const users= [
    {
        username: '',
        email: '',
        password: '',
    },
];

const ingredients = [
    { ingredient_name: 'Flour' },
    { ingredient_name: 'Sugar' },
    { ingredient_name: 'Eggs' },
    { ingredient_name: 'Salt' },
    { ingredient_name: 'Pepper' },
    { ingredient_name: 'Onion' },
    { ingredient_name: 'Yellow Onion' },
    { ingredient_name: 'Tomato' },
    { ingredient_name: 'Cilantro' },
    { ingredient_name: 'Lime' },
    { ingredient_name: 'Green Pepper' },
    { ingredient_name: 'Jasmine Rice' },
    { ingredient_name: 'Ground Pork' },
    { ingredient_name: 'Sour Cream' },
    { ingredient_name: 'Chicken Stock' },
    { ingredient_name: 'Chicken Cutlets' },
    { ingredient_name: 'Potatoes' },
    { ingredient_name: 'Broccoli' },
    { ingredient_name: 'Dill' },
    { ingredient_name: 'Dijon Mustard' },
    { ingredient_name: 'Garlic' },
    { ingredient_name: 'Scallions' },
    { ingredient_name: 'Jalapeno' },
    { ingredient_name: 'Fajita Spice Blend' },
    { ingredient_name: 'Mayonnaise' },
    { ingredient_name: 'Rosemary' },
    { ingredient_name: 'Green Beans' },
    { ingredient_name: 'Baguette' },
    { ingredient_name: 'Pork Chops' },
    { ingredient_name: 'Garlic Herb Butter' },
    { ingredient_name: 'Balsamic Vinegar' },
    { ingredient_name: 'Carrots' },
    { ingredient_name: 'Blue Cheese Dressing' },
    { ingredient_name: 'Franks Seasoning Blend' },
    { ingredient_name: 'Panko Breadcrumbs' },
    { ingredient_name: 'Hot Sauce' },
    { ingredient_name: 'Fry Seasoning' },
    { ingredient_name: 'Rice Wine Vinegar' },
    { ingredient_name: 'Southwest Spice Blend' },
    { ingredient_name: 'Monterey Jack Cheese' },
    { ingredient_name: 'Flour Tortillas' },
    { ingredient_name: 'Tex-Mex Paste' },
    { ingredient_name: 'Shredded Red Cabbage' },
    { ingredient_name: 'Chicken' },
    { ingredient_name: 'Ground Beef' },
    { ingredient_name: 'Potato Buns' },
    { ingredient_name: 'Ketchup' },
    { ingredient_name: 'Mustard' },
    { ingredient_name: 'Bell Pepper' },
    { ingredient_name: 'Peanuts' },
    { ingredient_name: 'Sweet Thai Chili Sauce' },
    { ingredient_name: 'Soy Glaze' },
    { ingredient_name: 'Sesame Seeds' },
    { ingredient_name: 'Hoisin Sauce' },
    { ingredient_name: 'Lemon' },
    { ingredient_name: 'Zucchini' },
    { ingredient_name: 'Mushrooms' },
    { ingredient_name: 'Grape Tomatoes' },
    { ingredient_name: 'Penne Pasta' },
    { ingredient_name: 'Creme Fraiche' },
    { ingredient_name: 'Parmesan Cheese' },
    { ingredient_name: 'Italian Seasoning' },
    { ingredient_name: 'Chives' },
    { ingredient_name: 'Chicken Breast Strips' },
    { ingredient_name: 'Siracha' },
    { ingredient_name: 'Honey' },
    { ingredient_name: 'Ginger' },
    { ingredient_name: 'Gochujang Sauce' },
    { ingredient_name: 'White Wine Vinegar' },
    { ingredient_name: 'Smokey Red Pepper Crema' },
];

const recipes = [
    {
        title: 'Saucy Pork Burrito Bowls',
        description: 'Pork buirrito bowl with cilantro lime, salsa fresca, and a smokey crema.',
        instructions: 'Wash and dry all produce. Halve, core, and dice green pepper into 1/2-inch pieces. Trim and thinly slice scallions, separating whites from greens. Mince garlic. Halve, peel, and thinly slice onion. Zest and quarter lime. In a small pot, combine rice, 3/4 cup water, and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve. Heat a drizzle of oil in a medium pan over medium-high heat. Add green pepper and onion wedges. Season with salt and pepper. Cook, stirring occasionally, until softened and lightly charred, 7-9 minutes. Transfer to a plate. Pat pork dry with paper towels. Season all over with salt, pepper, and the remaining Fajita Spice Blend. Heat a drizzle of oil in the same pan over medium-high heat. Add pork and cook until browned and cooked through, 4-6 minutes per side. Transfer to a cutting board to rest. In a small bowl, combine tomato, minced onion, half the lime juice, and a pinch of salt. Add smoky red pepper crema and 1 TBSP water. Stir until mixture reaches a drizzling consistency. Season with salt and pepper. Fluff rice with a fork and divide between bowls. Top with veggies, pork, and salsa. Garnish with remaining cilantro. Serve with any remaining lime wedges on the side.',
        user_id: 1,
        foodType: "dinner"
    },
    {
        title: 'Balsamic Rosemary Pork Chops',
        description: 'Pork chops with a balsamic rosemary drizzle, served with garlic toast and green beans.',
        instructions: 'Adjust racks to top and middle positions and preheat oven to 450 degrees. Wash and dry green beans; trim ends if necessary. Toss green beans on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack until browned and tender, 12-15 minutes. Meanwhile, pat pork dry with paper towels; season all over with salt and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add pork and cook until browned and cooked through, 4-6 minutes per side. Turn off heat; transfer pork to a cutting board. Wipe out pan. Heat a drizzle of oil in same pan over medium-high heat. Add chopped rosemary, cook until fragrant, 30 seconds. Stir in vinegar, ¼ cup water, and ½ tsp sugar; cook until slightly reduced, 1-2 minutes. Turn off heat, stir in half the garlic herb butter until melted. Divide pork, garlic bread, and green beans between plates. Top pork with balsamic rosemary pan sauce. Serve with remaining garlic herb butter.',
        user_id: 2,
        foodType: "dinner"
    },
    {
        title: 'Creamy Dijon Dill Chicken',
        description: 'Grilled chicken coated with a creamy dijon dill sauce, served with roasted potatoes and broccoli.',
        instructions: ' Adjust racks to top and middle positions and preheat oven to 450 degrees. Wash and dry all produce. Dice potatoes into 1/2-inch pieces. Trim and finely chop broccoli florets. Pick and finely chop fronds from dill. Roast Potatoes: Toss potatoes on a baking sheet with a drizzle of oil and a pinch of salt and pepper. Roast on top rack until lightly browned and tender, 20-25 minutes. Cook Chicken: Pat chicken dry with paper towels and season all over with salt and pepper. Heat a large drizzle of oil in a large pan over medium-high heat. Add chicken and cook until browned and cooked through, 3-5 minutes per side. Transfer chicken to a cutting board to rest. Roast Broccoli: While chicken cooks, toss broccoli on a second baking sheet with a drizzle of oil and a pinch of salt and pepper. Roast on middle rack until tender, 12-15 minutes. Make Sauce: Heat pan used for chicken over medium heat. Add stock concentrate and 1/4 cup water (1/3 cup for 4 servings). Stir in sour cream and 1 TBSP butter (2 TBSP for 4 servings) until melted and combined. Stir in chopped dill and season with salt and pepper. If sauce seems too thick, add a splash of water until desired consistency is reached. Finish & Serve: Slice chicken crosswise. Divide chicken, potatoes, and broccoli between plates. Garnish with any remaining chopped dill if desired and serve.',
        user_id: 3,
        foodType: "lunch"
    },
    {
        title: 'Spicy Peruvian Chicken',
        description: 'Spicy Chicken with loaded rice, pickled Jalapeno and Creamy salsa Verde.',
        instructions: 'Wash and dry produce. Zest and quarter the lime. Halve, core, and thinly slice poblano into strips. Trim and thinly slice scallions, separating whites from greens. Thinly slice jalapeño into rounds, removing ribs and seeds for less heat. Dice tomato into 1/4-inch pieces. Heat a drizzle of oil in a medium pot over medium-high heat. Add scallion whites and cook until softened, 1 minute. Add rice, 3/4 cup water, and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until tender, 15-18 minutes. Keep covered off heat until ready to serve. In a small bowl, combine juice from half the lime, 1 TBSP water, 1 tsp sugar, and a pinch of salt. Stir in jalapeño rounds to coat. Set aside to pickle, stirring occasionally until ready to use. Pat chicken dry with paper towels. Season all over with remaining Fajita Spice Blend, salt, and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add chicken and cook until browned and cooked through, 3-5 minutes per side. Transfer to a cutting board to rest. To a bowl with reserved scallion greens, add mayonnaise, remaining lime zest, a squeeze of lime juice, and a pinch of minced jalapeño. Add water 1 tsp at a time until mixture reaches drizzling consistency. Season with salt and pepper. Fluff rice with a fork. Stir in tomato and half the scallion greens, reserving remaining for garnish. Thinly slice chicken. Divide rice between bowls and top with chicken. Squeeze juice from remaining lime over top. Drizzle with creamy salsa verde and garnish with remaining pickled jalapeño rounds and reserved scallion greens.',
        user_id: 4,
        foodType: "dinner"
    },
    {
        title: 'Crispy Buffalo Spiced Chicken',
        description: 'Crispy Buffalo Chicken served with blue cheese, scallion mashed potatoes and carrots.',
        instructions: 'Adjust oven racks to top and middle positions and preheat to 425 degrees. Wash and dry produce. Dice potatoes into 1/2-inch pieces. Trim, peel, and cut carrots into 1/2-inch pieces. Thinly slice scallions, separating whites from greens. Mince garlic. Pat chicken dry with paper towels and season all over with salt and pepper. Spread 1 TBSP butter (2 TBSP for 4 servings) onto tops of chicken in an even layer; evenly sprinkle with a big pinch of scallion whites and paprika. Roast chicken on middle rack until browned and cooked through, 15-18 minutes. Transfer to a plate. Toss carrots on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack until browned and tender, 20-25 minutes. Drain and return potatoes to pot. Mash with sour cream, 2 TBSP butter (4 TBSP for 4 servings), and a splash of potato cooking liquid as needed until smooth and creamy. Stir in half the scallion greens and season with salt and pepper. Divide carrots, mashed potatoes, and chicken between plates. Top chicken with remaining scallion greens and hot sauce. Serve with remaining blue cheese sauce on the side.',
        user_id: 5,
        foodType: "dinner"
    },
    {
        title: 'One-Pan Santa Fe Pork Tacos',
        description: 'Santa Fe pork tacos topped with monterey jack cheese and cilantro lime slaw',
        instructions: 'Wash and dry produce. Halve, peel, and finely dice onion. Finely chop cilantro. Heat a drizzle of oil in a large pan over medium-high heat. Add onion and a pinch of salt and pepper. Cook, stirring, until softened, 4-5 minutes. Add pork and Southwest Spice Blend. Cook, breaking up meat into pieces, until cooked through, 4-6 minutes. Remove pan from heat and stir in half the chopped cilantro. In a medium bowl, combine cabbage, mayonnaise, lime juice, remaining cilantro, 1 tsp sugar (2 tsp for 4 servings), and a pinch of salt and pepper. Wrap tortillas in damp paper towels and microwave until warm and pliable, 30 seconds. Fill tortillas with pork filling. Top with Monterey Jack cheese, slaw, sour cream, and remaining cilantro.',
        user_id: 6,
        foodType: "lunch"
    },
    {
        title: 'Melty Monterey Jack Burgers',
        description: 'Burger with monterey jack cheese topped with onion jam, garlic mayo and crispy potato wedges.',
        instructions: 'Adjust racks to top and middle positions, and preheat oven to 450 degrees. Wash and dry produce. Cut potatoes into 1/2-inch-thick wedges. Halve, peel, and thinly slice onion. Mince garlic. Toss potatoes on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack until browned and tender, 20-25 minutes. Meanwhile, heat a drizzle of oil in a large pan over medium heat. Add onion and cook, stirring occasionally, until softened and lightly browned, 8-10 minutes. Stir in vinegar and 1 tsp sugar (2 tsp for 4 servings). Cook until caramelized and jammy, 2-3 minutes more. Season with salt and pepper. Transfer to a small bowl. In a second small bowl, combine mayonnaise with a pinch of garlic to taste. Season with salt and pepper. Form beef into two patties (four for 4 servings), each slightly wider than a burger bun. Season with salt and pepper. Heat a drizzle of oil in the same pan over medium-high heat. Add patties and cook until browned and cooked to desired doneness, 3-5 minutes per side. Top with Monterey Jack cheese; cover pan until cheese melts. Halve buns and toast until golden. Spread cut sides of buns with garlic mayo. Fill with patties and as much onion jam as you like. Serve with potato wedges on the side.',
        user_id: 7,
        foodType: "dinner"
    },
    {
        
    }
];