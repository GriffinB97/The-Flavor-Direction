const sequelize = require('../config/connection');
const { User, Recipe} = require('../models');

const users = [
    {
        name: 'Eric',
        email: 'eric@meMyself.com',
        password: 'theWord',
    },    
    {
        name: 'Chef Boyardee',
        email: 'cookingup@chefs.com',
        password: 'thecookingchef',
    }
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
             'Ground Pork 10 oz' ,
             'Jasmine Rice 1 cup' ,
             'Tomato 1 unit' ,
             'Lime 1 unit' ,
             'Green Pepper 1 unit' ,
             'Yellow Onion 1 unit' ,
             'Scallions 2 TBSP' ,
             'Smokey Red Pepper Crema 1/4 oz' ,
             'Cilantro 1/4 oz' ,
             'Fajita Spice Blend 1/2 tsp' 
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
             'Pork Chops 10 oz' ,
             'Green Beans 6 oz' ,
             'Garlic Herb Butter 1 unit' ,
             'Balsamic Vinegar 5 tsp' ,
             'Garlic 1 unit' ,
             'Rosemary 1/4 oz' ,
             'Carrots 2 TBSP' ,
             'Butter 2 TBSP' 
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
             'Chicken Cutlets 12 oz' ,
             'Broccoli 8 oz' ,
             'Potatoes 10 oz' ,
             'Garlic 1 unit' ,
             'Dill 2 TBSP' ,
             'Dijon Mustard 1/4 oz' ,
             'Sour Cream 1.5 TBSP' ,
             'Butter 1.5 TBSP' 
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
             'Chicken Cutlets 10 oz' ,
             'Jasmine Rice 1 cup' ,
             'Tomato 1 unit' ,
             'Lime 1 unit' ,
             'Green Pepper 1 unit' ,
             'Yellow Onion 1 unit' ,
             'Scallions 1 unit' ,
             'Cilantro 1 unit' ,
             'Mayonnaise 1/2 oz' ,
             'Fajita Spice Blend 1.5 TBSP' 
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
             'Chicken Breast Strips 12 oz' ,
             'Potatoes 10 oz' ,
             'Carrots 6 oz' ,
             'Scallions 1 unit' ,
             'Garlic 1 clove' ,
             'Sour Cream 1/2 cup' ,
             'Blue Cheese Dressing 1 oz' ,
             'Franks Seasoning Blend 2 tsp' ,
             'Hot Sauce 1 TBSP' ,
             'Butter 2 TBSP' 
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
             'Ground Pork 10 oz' ,
             'Yellow Onion 1 unit' ,
             'Cilantro 1 unit' ,
             'Fajita Spice Blend 1.5 TBSP' ,
             'Monterey Jack Cheese 1.5 oz' ,
             'Flour Tortillas 4 units' ,
             'Shredded Red Cabbage 6 oz' ,
             'Mayonnaise 2 TBSP' ,
             'Lime 1 unit' ,
             'Sugar 1 tsp' 
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
             'Ground Beef 12 oz' ,
             'Potatoes 10 oz' ,
             'Yellow Onion 1 unit' ,
             'Garlic 1 clove' ,
             'Monterey Jack Cheese 2 oz' ,
             'Potato Buns 2 units' ,
             'Mayonnaise 2 TBSP' ,
             'Vinegar 2 TBSP' ,
             'Sugar 1 tsp' ,
             'Salt 1/4 tsp' 
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
             'Penne Pasta 8 oz' ,
             'Zucchini 1 unit' ,
             'Lemon 1 unit' ,
             'Mushrooms 1 unit' ,
             'Grape Tomatoes 1 unit' ,
             'Italian Seasoning 1 TBSP' ,
             'Chicken Stock 1/4 cup' ,
             'Creme Fraiche 4 TBSP' ,
             'Parmesan Cheese 2 TBSP' ,
             'Butter 1 TBSP' 
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
             'Chicken Breast Strips 10 oz' ,
             'Jasmine Rice 1 cup' ,
             'Green Beans 6 oz' ,
             'Scallions 1 unit' ,
             'Ginger 1 unit' ,
             'Hoisin Sauce 2 TBSP' ,
             'Honey 1 TBSP' ,
             'Sriracha 1 TBSP' ,
             'Sesame Seeds 1 TBSP' 
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
             'Ground Pork 10 oz' ,
             'Jasmine Rice 1 cup' ,
             'Zucchini 1 unit' ,
             'Carrots 2 units' ,
             'Scallions 1 unit' ,
             'Garlic 2 units' ,
             'Soy Sauce 2 TBSP' ,
             'Vinegar 2 TBSP' ,
             'Sugar 1 TBSP' ,
             'Tomato 1 unit' 
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
             'Ground Pork 10 oz' ,
             'Jasmine Rice 1 cup' ,
             'Shredded Red Cabbage 6 oz' ,
             'Scallions 1 unit' ,
             'Hoisin Sauce 2 TBSP' ,
             'Chili Sauce 1 TBSP' ,
             'Sweet Soy Glaze 2 1/2 TBSP' ,
             'Sugar 1/2 tsp' ,
             'Lime 1 unit' ,
             'Sesame Seeds 1 TBSP' 
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
             'Ground Pork 10 oz' ,
             'Jasmine Rice 1 cup' ,
             'Bell Pepper 1 unit' ,
             'Scallions 1 unit' ,
             'Garlic 1 clove' ,
             'Soy Glaze 2 TBSP' ,
             'Sweet Thai Chili Sauce 1 TBSP' ,
             'Lime 1 unit' ,
             'Peanuts 1 oz' ,
             'Sugar 1 tsp' 
        ],
        user_id: 1,
        foodType: 'lunch'
    },{
        title: "Cinamon Rolls",
        description : "Cinamon Rolls.  What else is there to say?",
        instructions : ["In a stand mixer combine 3 ¼ ounces of granulated sugar, ½ tsp of salt, and 3 ounces of soft butter. Mix slowly at first, but increase to medium high speed. Mix for about 1 minute or until fluffy",
            "Scrape down the sides of the bowl before adding 1 whole egg and the zest of one lemon. Mix on medium high for about 2 minutes.",
            "Next, add 16 ounces of bread flour along with 1 packet of instant yeast and 8 ounces of buttermilk. Use the paddle attachment and mix on medium low speed until just combined. Clean off paddle attachment and affix dough hook. Mix with the dough hook for about 10 minutes on medium speed.",
            "Place dough into an oiled bowl and make sure it’s big enough for the dough to double in size. Cover with plastic wrap and let sit for 2 hours.",
            "Oil your work surface and your rolling pin, and then turn out the dough.",
            "Knead for a minute to get all the air out and then roll out the dough to about 14 x 18 inches.",
            "In a bowl combine ½ a cup of white sugar, 1 ½ tbsp cinnamon, and ¼ cup of brown sugar. Mix to combine and then generously sprinkle that over your rolled out dough. Once your dough is covered, roll it up.",
            "Place seam side down and trim off about 1 inch from either end, then slice the rest into 12 equal slices.",
            "Oil and add parchment paper to a large baking dish, and then add your cinnamon rolls. Make sure they have about ½ an inch of space between them",
            "Cover and proof them for 90 minutes.",
            "Remove plastic wrap and brush the tops of the rolls down with melted butter. Place in the oven at 375°F for about 20 minutes or until brown.",
            "Remove from oven, let cool for 5 minutes and top with frosting.",
            "For the Frosting",
            "In a mixer combine 2 cups of sifted powdered sugar, 8 ounces of room temperature cream cheese, and 4 ounces of room temperature butter. Mix to combine.",
            "If it’s too thick add some heavy cream or whole milk to the mixture to thin it out."
        ],
        ingredients: [
            "3 1/4 ounces of Sugar", "1/2 teaspoon of Salt" , "3 ounces of Butter", "Zest of 1 Lemon", "16 oz of Bread Flour", "1 packet of Instant Yeast", "8 ounces of Buttermilk", "1/2 cup of Sugar", 
            "1 1/2 tabelspoons of Cinamon", "1/4 cup of Brown Sugar", "8 ounces of Cream Cheese", "2 cups of Powdered Sugar", "4 ounces of Butter"
        ],
        user_id : 2,
        foodType : "breakfast"
    },
    {
        title: "Brownies",
        description: "Chewy, fudgy brownies",
        instructions : ["Prepare your baking dish by lining with aluminum foil or parchment paper and greasing with cooking spray.",
            "In a large bowl, combine cocoa powder, espresso powder, chopped unsweetened chocolate, and boiling water. Stir to combine and get everything melted.",
            "While still warm, add butter and stir until melted. Add vegetable oil and stir again.",
            "Once the mixture has cooled, add the eggs and egg yolks and stir to combine.",
            "Add vanilla extract and whisk, then add granulated sugar and stir to combine.",
            "Next, add flour. Mix it thoroughly and then add the chopped bittersweet chocolate. Stir to combine one last time.",
            "Pour batter into prepared pan. Bake at 350°F for 30-35 minutes, until a tester comes out clean-ish."
        ],
        ingredients : [
            "1/3 cup cocoa powder", "1 1/2 tsp espresso powder", "2 ounces unsweetened chocolate", "1/2 cup plus 2 Tbsp boiling water", "4 Tbsp butter", "1/2 cup plus 2 Tbsp vegetable oil",
            "2 large eggs plus 2 egg yolks", "1 1/2 tsp vanilla extract", "2 1/2 cups granulated sugar", "1 3/4 cup all purpose flour", "6 ounces bittersweet chocolate"
        ],
        user_id : 2,
        foodType : "dessert"
    },
    {
        title: "Carrot Cake",
        description: "Carrot cake with cream cheese frosting",
        instructions: ["Position a rack in the middle of the oven. Grease two 9-inch round cake pans, line the bottom with parchment paper and then grease the top. Or grease and flour the bottom and sides of both pans",
            "Heat the oven to 350 degrees Fahrenheit (176C).",
            "Whisk flour, baking soda, salt, and cinnamon in a medium bowl until very well blended.",
            "In a separate bowl, whisk the oil, granulated sugar, brown sugar, and vanilla.",
            "Add the eggs, one at a time, whisking after each one.",
            "Switch to a large rubber spatula. Scrape the sides and bottom of the bowl, then add the dry ingredients in three parts, gently stirring until they disappear and the batter is smooth.",
            "Stir in the shredded carrots, nuts, and raisins.",
            "Divide the cake batter between the prepared cake pans.",
            "Bake until the tops of the cake layers are springy when touched and when a toothpick inserted into the center of the cake comes out clean, 35 to 45 minutes.",
            "Cool cakes in the pans for 15 minutes, then carefully turn the cake layers out onto cooling racks. Remove the parchment paper and cool completely. If you find that a cake layer is sticking to the bottom of the pan, leave the cake pan upside down and allow gravity to do its thing.",
            "In a large bowl, beat the cream cheese with a handheld mixer on medium speed until creamy, about 1 minute.",
            "Beat in the powdered sugar, a 1/4 cup at a time, until fluffy.",
            "Pour in the whipping cream. Beat on medium speed for 2 to 3 minutes, or until the frosting is whipped and creamy. This frosting resembles the texture of whipped cream. Chill covered until ready to frost the cake.  Frost the cake and add chopped pecans to the top. "
        ],
        ingredients : [
            "2 cups (260 grams) all-purpose flour", "2 teaspoons baking soda", "1/2 teaspoon fine sea salt", "1 1/2 teaspoons ground cinnamon", "1 1/4 cups (295 ml) canola or other vegetable oil",
            "1 cup (200 grams) granulated sugar", "1 cup (190 grams) lightly packed brown sugar", "1 teaspoon vanilla extract", "4 large eggs, at room temperature", "3 cups (300 grams) grated peeled carrots, 5 to 6 medium carrots",
            "1 cup (100 grams) coarsely chopped pecans", "1/2 cup (65 grams) raisins", "16 ounces cream cheese, at room temperature", "2 1/2  cups (280 grams) powdered sugar", "2/3 cup (160 ml) cold heavy whipping cream", "1 cup coarsely chopped pecans, for topping cake"
        ],
        user_id : 2,
        foodType : "dessert"
    },
    {
        title : "Sally lunn bun",
        description : "A dinner roll the size of your hand",
        instructions : [
            "Warm the milk over low heat. Add the sugar and dissolve. Once warm, add the butter and melt in. If you are using saffron for color, add the threads to the milk and set mixture aside to cool to 110° or cooler before adding it to the other ingredients.",
            "Sift flour into a large bowl or a stand mixer. If using instant yeast, whisk in to flour. Once milk mixture is cooled to 110° add to flour and mix (remove saffron threads with a strainer). Add lemon zest, eggs and salt and mix. If you are using active dry yeast, add that last. Work dough until it comes together and forms a smooth sticky dough. (About 8 minutes on medium speed) It will not form into a ball.",
            "Cover and let rise for 60 - 90 minutes or until doubled in size.",
            "Once doubled, punch down dough and put out onto a lightly floured surface and separate into 3 or 6 pieces, depending on the size bun you would like. Form dough into balls and place on lined baking sheet, slightly flattening into a cake. Cover and let rise for another 45 - 60 minutes.",
            "Preheat oven to 400°F / 200°C and make an egg wash with either a whole egg or egg white (if you used the saffron for color).",
            "Bake buns for 15 minutes, tenting them if they begin to brown too much. An instant read thermometer should read 190°F-200°F (approx.90°C). Cool on a wire rack and serve warm with butter, jam or clotted cream."
        ],
        ingredients: [
            "1 1/4 cup (280ml) whole milk", "6 tablespoons (85g) of butter at room temperature", "1/4 cup (50g) sugar", "3 3/4 cup (450g) of bread flour (or all purpose)", "7g instant yeast or active dry yeast.",
            "2 eggs (Plus an extra egg for the egg wash)", "The zest of 1 lemon", "1 1/2 teaspoons of salt", "2-3 saffron threads (optional; for color only)"
        ],
        user_id : 2,
        foodType : "breakfast"
    },
    {
        title: "Cheescake",
        description : "A New York style cheescake with a graham cracker crust",
        instructions : [
            "In a food processor combine 6 whole graham crackers with 2 ⅓ ounces of brown sugar. Once fully combined, add 2 ½ ounces all purpose flour and a pinch of salt and mix to combine.",
            "Add 7 Tbsp of melted butter and pulse together until it reaches the consistency of wet sand.",
            "Butter down a spring form that is preferably 9 inches in diameter. Add graham cracker crust and tamp down until even and flat (use a ramekin!). Par-bake in 325°F oven for 12-15 minutes or until it starts turning brown.",
            "For the cheesecake filling, add 2 ½ pounds of full fat cream cheese cut into chunks into a stand mixer along with 5 ½ ounces of sugar along with 1 tsp of salt.",
            "Mix to combine for about a minute. Scrape down filling from the sides and add another 5 ½ ounces of sugar and mix on medium speed for another minute.",
            "Scrape down the sides again and add ⅓ of a cup of sour cream along with the juice of ½ a lemon, and a heaping tsp of vanilla extract. Blend to combine for about a minute on medium speed.",
            "Next add 2 large egg yolks and scrape down the sides. After that you’re going to add 6 whole eggs, two at a time, blending for a minute each, scraping down the sides each time.",
            "Once filling is fully mixed, pass it through a fine mesh sieve into another bowl.",
            "Butter down the sides of your spring form and then add your cheesecake mixture. Run a fork over the top and pop any bubbles that rise to the surface.",
            "Bake at 200°F for 45 minutes, remove from oven and pop any bubbles that have risen to the top. Place back in the oven and bake for up to 2 hours and 45 minutes or until its internal temperature reaches 165°F.",
            "Crank the oven to 500° and bake for an additional 6-12 minutes.",
            "Run a paring knife around the outside of the cake to help with the cake sticking to the sides and let cool for 3 hours. After it has cooled and you’ve removed the spring form, wrap in plastic wrap and place in the fridge for an additional 4 hours.",
            "Once it’s cooled, remove it from the fridge and remove the plastic wrap. Brush the top with some brandy before adding toasted crushed pecans."
        ],
        ingredients: [
            "6 whole graham crackers", "2 1/3 ounces brown sugar", "2 1/2 ounces all purpose flour", "Salt", "7 Tbsp melted butter", "2 1/2 pounds of full fat cream cheese, cut", "11 ounces of sugar, divided", "1/3 cup sour cream",
            "Juice of 1/2 a lemon", "1 tsp vanilla extract", "2 egg yolks", "6 whole eggs", "Brandy"
        ],
        user_id : 2,
        foodType : "dessert"
    }
];

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const userInstances = await User.bulkCreate(users, {
        individualHooks: true,
        returning: true,
    });


    const recipeInstances = await Recipe.bulkCreate(recipes, {
        returning: true,
    });


    process.exit(0);
};

seedDatabase();
