const sequelize = require('../config/connection');
const { User, Recipe, Ingredient, RecipeIngredient } = require('../models');

const users = [
    {
        username: 'Chef Boyardee',
        email: 'cookingup@chefs.com',
        password: 'thecookingchef',
    },
];

const recipes = [
    {
        title: 'Saucy Pork Burrito Bowls',
        description: 'Pork burrito bowl with cilantro lime, salsa fresca, and a smokey crema.',
        instructions: [
            'Wash and dry all produce. Halve, core, and dice green pepper into 1/2-inch pieces. Trim and thinly slice scallions, separating whites from greens. Mince garlic. Halve, peel, and thinly slice onion. Zest and quarter lime. In a small pot, combine rice, 3/4 cup water, and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve.',
            'Heat a drizzle of oil in a medium pan over medium-high heat. Add green pepper and onion wedges. Season with salt and pepper. Cook, stirring occasionally, until softened and lightly charred, 7-9 minutes. Transfer to a plate.',
            'Pat pork dry with paper towels. Season all over with salt, pepper, and the remaining Fajita Spice Blend. Heat a drizzle of oil in the same pan over medium-high heat. Add pork and cook until browned and cooked through, 4-6 minutes per side. Transfer to a cutting board to rest.',
            'In a small bowl, combine tomato, minced onion, half the lime juice, and a pinch of salt. Add smoky red pepper crema and 1 TBSP water. Stir until mixture reaches a drizzling consistency. Season with salt and pepper.',
            'Fluff rice with a fork and divide between bowls. Top with veggies, pork, and salsa. Garnish with remaining cilantro. Serve with any remaining lime wedges on the side.'
        ],
        ingredients: [
            { ingredient: 'Ground Pork', quantity: '10 oz' },
            { ingredient: 'Jasmine Rice', quantity: '1 cup' },
            { ingredient: 'Tomato', quantity: '1 unit' },
            { ingredient: 'Lime', quantity: '1 unit' },
            { ingredient: 'Green Pepper', quantity: '1 unit' },
            { ingredient: 'Yellow Onion', quantity: '1 unit' },
            { ingredient: 'Scallions', quantity: '2 TBSP' },
            { ingredient: 'Smokey Red Pepper Crema', quantity: '1/4 oz' },
            { ingredient: 'Cilantro', quantity: '1/4 oz' },
            { ingredient: 'Fajita Spice Blend', quantity: '1/2 tsp' }
        ],
        user_id: 1,
        foodType: 'dinner'
    },
    {
        title: 'Balsamic Rosemary Pork Chops',
        description: 'Pork chops with a balsamic rosemary drizzle, served with garlic toast and green beans.',
        instructions: [
            'Adjust racks to top and middle positions and preheat oven to 450 degrees. Wash and dry green beans; trim ends if necessary. Toss green beans on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack until browned and tender, 12-15 minutes.',
            'Meanwhile, pat pork dry with paper towels; season all over with salt and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add pork and cook until browned and cooked through, 4-6 minutes per side. Turn off heat; transfer pork to a cutting board. Wipe out pan.',
            'Heat a drizzle of oil in same pan over medium-high heat. Add chopped rosemary, cook until fragrant, 30 seconds. Stir in vinegar, ¼ cup water, and ½ tsp sugar; cook until slightly reduced, 1-2 minutes. Turn off heat, stir in half the garlic herb butter until melted.',
            'Divide pork, garlic bread, and green beans between plates. Top pork with balsamic rosemary pan sauce. Serve with remaining garlic herb butter.'
        ],
        ingredients: [
            { ingredient: 'Pork Chops', quantity: '10 oz' },
            { ingredient: 'Green Beans', quantity: '6 oz' },
            { ingredient: 'Garlic Herb Butter', quantity: '1 unit' },
            { ingredient: 'Balsamic Vinegar', quantity: '5 tsp' },
            { ingredient: 'Garlic', quantity: '1 unit' },
            { ingredient: 'Rosemary', quantity: '1/4 oz' },
            { ingredient: 'Carrots', quantity: '2 TBSP' },
            { ingredient: 'Butter', quantity: '2 TBSP' }
        ],
        user_id: 1,
        foodType: 'dinner'
    },
    {
        title: 'Creamy Dijon Dill Chicken',
        description: 'Grilled chicken coated with a creamy dijon dill sauce, served with roasted potatoes and broccoli.',
        instructions: [
            'Adjust racks to top and middle positions and preheat oven to 450 degrees. Wash and dry all produce. Dice potatoes into 1/2-inch pieces. Trim and finely chop broccoli florets. Pick and finely chop fronds from dill.',
            'Roast Potatoes: Toss potatoes on a baking sheet with a drizzle of oil and a pinch of salt and pepper. Roast on top rack until lightly browned and tender, 20-25 minutes.',
            'Cook Chicken: Pat chicken dry with paper towels and season all over with salt and pepper. Heat a large drizzle of oil in a large pan over medium-high heat. Add chicken and cook until browned and cooked through, 3-5 minutes per side. Transfer chicken to a cutting board to rest.',
            'Roast Broccoli: While chicken cooks, toss broccoli on a second baking sheet with a drizzle of oil and a pinch of salt and pepper. Roast on middle rack until tender, 12-15 minutes.',
            'Make Sauce: Heat pan used for chicken over medium heat. Add stock concentrate and 1/4 cup water (1/3 cup for 4 servings). Stir in sour cream and 1 TBSP butter (2 TBSP for 4 servings) until melted and combined. Stir in chopped dill and season with salt and pepper. If sauce seems too thick, add a splash of water until desired consistency is reached.',
            'Finish & Serve: Slice chicken crosswise. Divide chicken, potatoes, and broccoli between plates. Garnish with any remaining chopped dill if desired and serve.'
        ],
        ingredients: [
            { ingredient: 'Chicken Cutlets', quantity: '12 oz' },
            { ingredient: 'Broccoli', quantity: '8 oz' },
            { ingredient: 'Potatoes', quantity: '10 oz' },
            { ingredient: 'Garlic', quantity: '1 unit' },
            { ingredient: 'Dill', quantity: '2 TBSP' },
            { ingredient: 'Dijon Mustard', quantity: '1/4 oz' },
            { ingredient: 'Sour Cream', quantity: '1.5 TBSP' },
            { ingredient: 'Butter', quantity: '1.5 TBSP' }
        ],
        user_id: 1,
        foodType: 'lunch'
    },
    {
        title: 'Spicy Peruvian Chicken',
        description: 'Spicy Chicken with loaded rice, pickled Jalapeno and Creamy salsa Verde.',
        instructions: [
            'Wash and dry produce. Zest and quarter the lime. Halve, core, and thinly slice poblano into strips. Trim and thinly slice scallions, separating whites from greens. Thinly slice jalapeño into rounds, removing ribs and seeds for less heat. Dice tomato into 1/4-inch pieces.',
            'Heat a drizzle of oil in a medium pot over medium-high heat. Add scallion whites and cook until softened, 1 minute. Add rice, 3/4 cup water, and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until tender, 15-18 minutes. Keep covered off heat until ready to serve.',
            'In a small bowl, combine juice from half the lime, 1 TBSP water, 1 tsp sugar, and a pinch of salt. Stir in jalapeño rounds to coat. Set aside to pickle, stirring occasionally until ready to use.',
            'Pat chicken dry with paper towels. Season all over with remaining Fajita Spice Blend, salt, and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add chicken and cook until browned and cooked through, 3-5 minutes per side. Transfer to a cutting board to rest.',
            'To a bowl with reserved scallion greens, add mayonnaise, remaining lime zest, a squeeze of lime juice, and a pinch of minced jalapeño. Add water 1 tsp at a time until mixture reaches drizzling consistency. Season with salt and pepper.',
            'Fluff rice with a fork. Stir in tomato and half the scallion greens, reserving remaining for garnish. Thinly slice chicken. Divide rice between bowls and top with chicken. Squeeze juice from remaining lime over top. Drizzle with creamy salsa verde and garnish with remaining pickled jalapeño rounds and reserved scallion greens.'
        ],
        ingredients: [
            { ingredient: 'Chicken Cutlets', quantity: '10 oz' },
            { ingredient: 'Jasmine Rice', quantity: '1 cup' },
            { ingredient: 'Tomato', quantity: '1 unit' },
            { ingredient: 'Lime', quantity: '1 unit' },
            { ingredient: 'Green Pepper', quantity: '1 unit' },
            { ingredient: 'Yellow Onion', quantity: '1 unit' },
            { ingredient: 'Scallions', quantity: '1 unit' },
            { ingredient: 'Cilantro', quantity: '1 unit' },
            { ingredient: 'Mayonnaise', quantity: '1/2 oz' },
            { ingredient: 'Fajita Spice Blend', quantity: '1.5 TBSP' }
        ],
        user_id: 1,
        foodType: 'dinner'
    },
    {
        title: 'Crispy Buffalo Spiced Chicken',
        description: 'Crispy Buffalo Chicken served with blue cheese, scallion mashed potatoes and carrots.',
        instructions: [
            'Adjust oven racks to top and middle positions and preheat to 425 degrees. Wash and dry produce. Dice potatoes into 1/2-inch pieces. Trim, peel, and cut carrots into 1/2-inch pieces. Thinly slice scallions, separating whites from greens. Mince garlic.',
            'Pat chicken dry with paper towels and season all over with salt and pepper. Spread 1 TBSP butter (2 TBSP for 4 servings) onto tops of chicken in an even layer; evenly sprinkle with a big pinch of scallion whites and paprika. Roast chicken on middle rack until browned and cooked through, 15-18 minutes. Transfer to a plate.',
            'Toss carrots on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack until browned and tender, 20-25 minutes.',
            'Drain and return potatoes to pot. Mash with sour cream, 2 TBSP butter (4 TBSP for 4 servings), and a splash of potato cooking liquid as needed until smooth and creamy. Stir in half the scallion greens and season with salt and pepper.',
            'Divide carrots, mashed potatoes, and chicken between plates. Top chicken with remaining scallion greens and hot sauce. Serve with remaining blue cheese sauce on the side.'
        ],
        ingredients: [
            { ingredient: 'Chicken Breast Strips', quantity: '12 oz' },
            { ingredient: 'Potatoes', quantity: '10 oz' },
            { ingredient: 'Carrots', quantity: '6 oz' },
            { ingredient: 'Scallions', quantity: '1 unit' },
            { ingredient: 'Garlic', quantity: '1 clove' },
            { ingredient: 'Sour Cream', quantity: '1/2 cup' },
            { ingredient: 'Blue Cheese Dressing', quantity: '1 oz' },
            { ingredient: 'Franks Seasoning Blend', quantity: '2 tsp' },
            { ingredient: 'Hot Sauce', quantity: '1 TBSP' },
            { ingredient: 'Butter', quantity: '2 TBSP' }
        ],
        user_id: 1,
        foodType: 'dinner'
    },
    {
        title: 'One-Pan Santa Fe Pork Tacos',
        description: 'Santa Fe pork tacos topped with monterey jack cheese and cilantro lime slaw',
        instructions: [
            'Wash and dry produce. Halve, peel, and finely dice onion. Finely chop cilantro. Heat a drizzle of oil in a large pan over medium-high heat. Add onion and a pinch of salt and pepper. Cook, stirring, until softened, 4-5 minutes.',
            'Add pork and Southwest Spice Blend. Cook, breaking up meat into pieces, until cooked through, 4-6 minutes. Remove pan from heat and stir in half the chopped cilantro.',
            'In a medium bowl, combine cabbage, mayonnaise, lime juice, remaining cilantro, 1 tsp sugar (2 tsp for 4 servings), and a pinch of salt and pepper. Wrap tortillas in damp paper towels and microwave until warm and pliable, 30 seconds.',
            'Fill tortillas with pork filling. Top with Monterey Jack cheese, slaw, sour cream, and remaining cilantro.'
        ],
        ingredients: [
            { ingredient: 'Ground Pork', quantity: '10 oz' },
            { ingredient: 'Yellow Onion', quantity: '1 unit' },
            { ingredient: 'Cilantro', quantity: '1 unit' },
            { ingredient: 'Fajita Spice Blend', quantity: '1.5 TBSP' },
            { ingredient: 'Monterey Jack Cheese', quantity: '1.5 oz' },
            { ingredient: 'Flour Tortillas', quantity: '4 units' },
            { ingredient: 'Shredded Red Cabbage', quantity: '6 oz' },
            { ingredient: 'Mayonnaise', quantity: '2 TBSP' },
            { ingredient: 'Lime', quantity: '1 unit' },
            { ingredient: 'Sugar', quantity: '1 tsp' }
        ],
        user_id: 1,
        foodType: 'lunch'
    },
    {
        title: 'Melty Monterey Jack Burgers',
        description: 'Burger with monterey jack cheese topped with onion jam, garlic mayo and crispy potato wedges.',
        instructions: [
            'Adjust racks to top and middle positions, and preheat oven to 450 degrees. Wash and dry produce. Cut potatoes into 1/2-inch-thick wedges. Halve, peel, and thinly slice onion. Mince garlic.',
            'Toss potatoes on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack until browned and tender, 20-25 minutes.',
            'Meanwhile, heat a drizzle of oil in a large pan over medium heat. Add onion and cook, stirring occasionally, until softened and lightly browned, 8-10 minutes. Stir in vinegar and 1 tsp sugar (2 tsp for 4 servings). Cook until caramelized and jammy, 2-3 minutes more. Season with salt and pepper. Transfer to a small bowl.',
            'In a second small bowl, combine mayonnaise with a pinch of garlic to taste. Season with salt and pepper.',
            'Form beef into two patties (four for 4 servings), each slightly wider than a burger bun. Season with salt and pepper. Heat a drizzle of oil in the same pan over medium-high heat. Add patties and cook until browned and cooked to desired doneness, 3-5 minutes per side. Top with Monterey Jack cheese; cover pan until cheese melts.',
            'Halve buns and toast until golden. Spread cut sides of buns with garlic mayo. Fill with patties and as much onion jam as you like. Serve with potato wedges on the side.'
        ],
        ingredients: [
            { ingredient: 'Ground Beef', quantity: '12 oz' },
            { ingredient: 'Potatoes', quantity: '10 oz' },
            { ingredient: 'Yellow Onion', quantity: '1 unit' },
            { ingredient: 'Garlic', quantity: '1 clove' },
            { ingredient: 'Monterey Jack Cheese', quantity: '2 oz' },
            { ingredient: 'Potato Buns', quantity: '2 units' },
            { ingredient: 'Mayonnaise', quantity: '2 TBSP' },
            { ingredient: 'Vinegar', quantity: '2 TBSP' },
            { ingredient: 'Sugar', quantity: '1 tsp' },
            { ingredient: 'Salt', quantity: '1/4 tsp' }
        ],
        user_id: 1,
        foodType: 'dinner'
    },
    {
        title: 'Silky Sicilian Penne',
        description: 'Penne pasta tossed with an italian seasoning, mushrooms, zucchini and tomatoes.',
        instructions: [
            'Bring a large pot of salted water to a boil. Wash and dry all produce. Trim and halve zucchini lengthwise; cut crosswise into 1/2-inch-thick half-moons. Quarter lemon. Trim and thinly slice mushrooms.',
            'Heat a drizzle of oil in a large pan over medium-high heat. Add zucchini and cook, stirring occasionally, until browned and tender, 3-5 minutes. Season with salt and pepper. Remove from pan and set aside.',
            'Heat a drizzle of oil in the same pan over medium-high heat. Add mushrooms and cook, stirring occasionally, until browned and tender, 5-7 minutes. Season with salt and pepper. Remove from pan and set aside with zucchini.',
            'Once water is boiling, add penne to pot. Cook, stirring occasionally, until al dente, 9-11 minutes. Reserve 1 cup pasta cooking water, then drain.',
            'Melt 1 TBSP butter in same pan over medium-high heat. Add tomatoes and cook, stirring, until softened, 1-2 minutes. Stir in Italian seasoning, 1/4 tsp salt, and a pinch of pepper. Cook until fragrant, 30 seconds. Stir in stock concentrate, reserved pasta cooking water, and crème fraîche. Season with salt and pepper. Cook until slightly thickened, 2-3 minutes. Remove pan from heat and stir in half the Parmesan.',
            'Add zucchini, mushrooms, drained penne, and juice from half the lemon. Stir to combine. Season with salt and pepper. Divide pasta between bowls. Serve with remaining Parmesan and lemon wedges on the side.'
        ],
        ingredients: [
            { ingredient: 'Penne Pasta', quantity: '8 oz' },
            { ingredient: 'Zucchini', quantity: '1 unit' },
            { ingredient: 'Lemon', quantity: '1 unit' },
            { ingredient: 'Mushrooms', quantity: '1 unit' },
            { ingredient: 'Grape Tomatoes', quantity: '1 unit' },
            { ingredient: 'Italian Seasoning', quantity: '1 TBSP' },
            { ingredient: 'Chicken Stock', quantity: '1/4 cup' },
            { ingredient: 'Creme Fraiche', quantity: '4 TBSP' },
            { ingredient: 'Parmesan Cheese', quantity: '2 TBSP' },
            { ingredient: 'Butter', quantity: '1 TBSP' }
        ],
        user_id: 1,
        foodType: 'dinner'
    },
    {
        title: 'Hoisin Honey Chicken',
        description: 'Chicken with a hoisin honey sauce topped with sesame seeds, served with green beans and jasmine rice.',
        instructions: [
            'Preheat oven to 425 degrees. Wash and dry all produce. Trim green beans if necessary. In a small pot, combine rice, 3/4 cup water (1 1/2 cups for 4 servings), and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat until ready to serve.',
            'Toss green beans on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack until browned and tender, 12-15 minutes.',
            'Meanwhile, thinly slice scallions, separating whites from greens. Peel and mince ginger. In a small bowl, combine hoisin, honey, 2 TBSP water (4 TBSP for 4 servings), and Sriracha to taste.',
            'Pat chicken dry with paper towels and season with salt and pepper. Heat a large drizzle of oil in a large pan over medium-high heat. Add chicken in a single layer and cook, stirring occasionally, until browned and almost cooked through, 3-5 minutes. Add scallion whites and ginger. Cook until fragrant, 1 minute.',
            'Pour in hoisin sauce and cook, stirring, until chicken is coated and cooked through, 2-3 minutes. Fluff rice with a fork and season with salt and pepper. Divide rice, green beans, and chicken between plates. Garnish with scallion greens and sesame seeds. Serve.'
        ],
        ingredients: [
            { ingredient: 'Chicken Breast Strips', quantity: '10 oz' },
            { ingredient: 'Jasmine Rice', quantity: '1 cup' },
            { ingredient: 'Green Beans', quantity: '6 oz' },
            { ingredient: 'Scallions', quantity: '1 unit' },
            { ingredient: 'Ginger', quantity: '1 unit' },
            { ingredient: 'Hoisin Sauce', quantity: '2 TBSP' },
            { ingredient: 'Honey', quantity: '1 TBSP' },
            { ingredient: 'Sriracha', quantity: '1 TBSP' },
            { ingredient: 'Sesame Seeds', quantity: '1 TBSP' }
        ],
        user_id: 1,
        foodType: 'lunch'
    },
    {
        title: 'Pork and Zucchini Bibimbap',
        description: 'Pork and Zucchini Bibimbap served with carrots and pickled scallions.',
        instructions: [
            'Wash and dry produce. Trim and thinly slice scallions, separating whites from greens. Peel and mince ginger. Trim and halve zucchini lengthwise, then cut crosswise into 1/2-inch-thick half-moons. Dice tomato.',
            'In a small bowl, combine vinegar, 1 TBSP sugar (2 TBSP for 4 servings), and a pinch of salt. Stir until sugar and salt are mostly dissolved. Add sliced scallion whites and set aside to pickle.',
            'In a small pot, combine rice, 3/4 cup water (1 1/2 cups for 4 servings), and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve.',
            'Heat a drizzle of oil in a large pan over medium-high heat. Add zucchini, season with salt and pepper. Cook, stirring occasionally, until browned and tender, 5-7 minutes. Transfer to a plate.',
            'Add another drizzle of oil to the same pan. Add pork, ginger, and garlic. Cook, breaking up meat into pieces, until browned and cooked through, 4-5 minutes. Stir in soy sauce and cook until slightly thickened, 1-2 minutes.',
            'Fluff rice with a fork and season with salt and pepper. Divide rice, pork, and veggies between plates. Top with pickled scallion whites and tomato. Sprinkle with scallion greens and serve.'
        ],
        ingredients: [
            { ingredient: 'Ground Pork', quantity: '10 oz' },
            { ingredient: 'Jasmine Rice', quantity: '1 cup' },
            { ingredient: 'Zucchini', quantity: '1 unit' },
            { ingredient: 'Carrots', quantity: '2 units' },
            { ingredient: 'Scallions', quantity: '1 unit' },
            { ingredient: 'Garlic', quantity: '2 units' },
            { ingredient: 'Soy Sauce', quantity: '2 TBSP' },
            { ingredient: 'Vinegar', quantity: '2 TBSP' },
            { ingredient: 'Sugar', quantity: '1 TBSP' },
            { ingredient: 'Tomato', quantity: '1 unit' }
        ],
        user_id: 1,
        foodType: 'dinner'
    },
    {
        title: 'Moo Shu Pork Bowls',
        description: 'Moo shu pork bowl served with cabbage, scallions, and buttery rice, topped with sesame seeds.',
        instructions: [
            'Wash and dry produce. Trim and thinly slice scallions, separating whites from greens. Quarter lime. In a small pot, combine rice, 3/4 cup water (1 1/2 cups for 4 servings), and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15-18 minutes. Keep covered off heat until ready to serve.',
            'Heat a drizzle of oil in a large pan over medium-high heat. Add pork and cook, breaking up meat into pieces, until browned and cooked through, 4-5 minutes. Stir in scallion whites and cabbage. Cook until softened, 1-2 minutes.',
            'Stir in hoisin, chili sauce, 2 1/2 TBSP sweet soy glaze (5 TBSP for 4 servings), 1/4 cup water (1/2 cup for 4 servings), and 1/2 tsp sugar. Cook until sauce is slightly thickened, 1-2 minutes. Taste and season with juice from half the lime (whole lime for 4 servings), salt, and pepper.',
            'Fluff rice with a fork and stir in 1 TBSP butter (2 TBSP for 4 servings) until melted. Season with salt and pepper. Divide rice between bowls and top with moo shu pork. Sprinkle with scallion greens and as many sesame seeds as you like. Serve with any remaining lime wedges on the side.'
        ],
        ingredients: [
            { ingredient: 'Ground Pork', quantity: '10 oz' },
            { ingredient: 'Jasmine Rice', quantity: '1 cup' },
            { ingredient: 'Shredded Red Cabbage', quantity: '6 oz' },
            { ingredient: 'Scallions', quantity: '1 unit' },
            { ingredient: 'Hoisin Sauce', quantity: '2 TBSP' },
            { ingredient: 'Chili Sauce', quantity: '1 TBSP' },
            { ingredient: 'Sweet Soy Glaze', quantity: '2 1/2 TBSP' },
            { ingredient: 'Sugar', quantity: '1/2 tsp' },
            { ingredient: 'Lime', quantity: '1 unit' },
            { ingredient: 'Sesame Seeds', quantity: '1 TBSP' }
        ],
        user_id: 1,
        foodType: 'dinner'
    },
    {
        title: 'Sweet Chili Pork Bowls',
        description: 'Pork Bowl with sweet chili sauce, bell pepper, candied peanuts, and jasmine rice.',
        instructions: [
            'Wash and dry produce. Halve, core, and thinly slice bell pepper into strips. Trim and thinly slice scallions, separating whites from greens. Peel and mince garlic. Quarter lime. Finely chop cilantro.',
            'In a small pot, combine rice, 3/4 cup water (1 1/2 cups for 4 servings), and a pinch of salt. Bring to a boil, then cover and reduce heat to low. Cook until rice is tender, 15 minutes. Keep covered off heat until ready to serve.',
            'Heat a large, dry pan over medium-high heat. Add peanuts and cook, stirring occasionally, until golden, 2-3 minutes. Add 1 tsp sugar (2 tsp for 4 servings) and cook until peanuts are coated and sugar is melted, 1-2 minutes. Turn off heat and transfer to a small bowl. Wipe out pan.',
            'Heat a large drizzle of oil in the same pan over medium-high heat. Add bell pepper and cook, stirring occasionally, until softened, 5-6 minutes. Add scallion whites and garlic. Cook until fragrant, 1 minute. Transfer veggies to a plate.',
            'Heat another drizzle of oil in the same pan over medium-high heat. Add pork and cook, breaking up meat into pieces, until browned and cooked through, 4-5 minutes. Stir in soy glaze, chili sauce, and 2 TBSP water (4 TBSP for 4 servings). Cook until sauce is thickened, 1-2 minutes. Return veggies to pan and toss with pork.',
            'Fluff rice with a fork and stir in 1 TBSP butter (2 TBSP for 4 servings), lime zest, and half the cilantro. Season with salt and pepper. Divide rice between bowls and top with pork and veggies. Sprinkle with candied peanuts, scallion greens, and remaining cilantro. Serve with lime wedges on the side.'
        ],
        ingredients: [
            { ingredient: 'Ground Pork', quantity: '10 oz' },
            { ingredient: 'Jasmine Rice', quantity: '1 cup' },
            { ingredient: 'Bell Pepper', quantity: '1 unit' },
            { ingredient: 'Scallions', quantity: '1 unit' },
            { ingredient: 'Garlic', quantity: '1 clove' },
            { ingredient: 'Soy Glaze', quantity: '2 TBSP' },
            { ingredient: 'Sweet Thai Chili Sauce', quantity: '1 TBSP' },
            { ingredient: 'Lime', quantity: '1 unit' },
            { ingredient: 'Peanuts', quantity: '1 oz' },
            { ingredient: 'Sugar', quantity: '1 tsp' }
        ],
        user_id: 1,
        foodType: 'lunch'
    }
];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const userInstances = await User.bulkCreate(users, {
        individualHooks: true,
        returning: true,
    });

    const ingredientInstances = await Ingredient.bulkCreate(
        recipes.flatMap(recipe => recipe.ingredients.map(ingredient => ({ ingredient_name: ingredient.ingredient }))),
        { returning: true }
    );

    const ingredientMap = ingredientInstances.reduce((map, ingredient) => {
        map[ingredient.ingredient_name] = ingredient.id;
        return map;
    }, {});

    const recipeInstances = await Recipe.bulkCreate(recipes, {
        returning: true,
    });

    const recipeIngredientInstances = recipes.flatMap((recipe, index) =>
        recipe.ingredients.map(ingredient => ({
            recipe_id: recipeInstances[index].id,
            ingredient_id: ingredientMap[ingredient.ingredient],
            quantity: ingredient.quantity,
        }))
    );

    await RecipeIngredient.bulkCreate(recipeIngredientInstances);

    process.exit(0);
};

seedDatabase();
