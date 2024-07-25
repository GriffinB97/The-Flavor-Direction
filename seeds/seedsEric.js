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
    { ingredient_name: "Sugar" },
    { ingredient_name: "Salt" },
    { ingredient_name: "Butter" },
    { ingredient_name: "Egg" },
    { ingredient_name: "Lemon" },
    { ingredient_name: "Flour" },
    { ingredient_name: "Instant Yeast" },
    { ingredient_name: "Buttermilk" },
    { ingredient_name: "Cinamon" },
    { ingredient_name: "Brown Sugar" },
    { ingredient_name: "Cream Cheese" },
    { ingredient_name: "Powdered Sugar" },
    { ingredient_name: "Cocoa Powder" },
    { ingredient_name: "Espresso Powder" },
    { ingredient_name: "Unsweetened Chocolate" },
    { ingredient_name: "Boiling Water" },
    { ingredient_name: "Vegetable Oil" },
    { ingredient_name: "Egg Yolks" },
    { ingredient_name: "Vanilla Extract" },
    { ingredient_name: "Bittersweet Chocolate" },
    { ingredient_name: "Baking Soda" },
    { ingredient_name: "Carrots" },
    { ingredient_name: "Pecans" },
    { ingredient_name: "Raisins" },
    { ingredient_name: "Heavy Whipping Cream" },
    { ingredient_name: "Whole Milk" },
    { ingredient_name: "Graham Crackers" },
    { ingredient_name: "Sour Cream" },
    { ingredient_name: "Brandy" },

];



const recipes = [
    {
        title: "Cinamon Rolls",
        description : "Cinamon Rolls.  What else is there to say?",
        intructions : ["In a stand mixer combine 3 ¼ ounces of granulated sugar, ½ tsp of salt, and 3 ounces of soft butter. Mix slowly at first, but increase to medium high speed. Mix for about 1 minute or until fluffy",
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
        ingredient: [
            "Sugar", "Salt" , "Butter", "Lemon", "Flour", "Instant Yeast", "Buttermilk", "Cinamon", "Brown Sugar", "Cream Cheese", "Powdered Sugar"
        ],
        user_id : 1,
        foodType : "breakfast"
    },
    {
        title: "Brownies",
        description: "Chewy, fudgy brownies",
        intructions : ["Prepare your baking dish by lining with aluminum foil or parchment paper and greasing with cooking spray.",
            "In a large bowl, combine cocoa powder, espresso powder, chopped unsweetened chocolate, and boiling water. Stir to combine and get everything melted.",
            "While still warm, add butter and stir until melted. Add vegetable oil and stir again.",
            "Once the mixture has cooled, add the eggs and egg yolks and stir to combine.",
            "Add vanilla extract and whisk, then add granulated sugar and stir to combine.",
            "Next, add flour. Mix it thoroughly and then add the chopped bittersweet chocolate. Stir to combine one last time.",
            "Pour batter into prepared pan. Bake at 350°F for 30-35 minutes, until a tester comes out clean-ish."
        ],
        user_id : 1,
        foodType : "dessert"
    },
    {
        title: "Carrot Cake",
        description: "Carrot cake with cream cheese frosting",
        intructions: ["Position a rack in the middle of the oven. Grease two 9-inch round cake pans, line the bottom with parchment paper and then grease the top. Or grease and flour the bottom and sides of both pans",
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
        user_id : 1,
        foodType : "dessert"
    },
    {
        title : "Sally lunn bun",
        description : "A dinner roll the size of your hand",
        intructions : [
            "Warm the milk over low heat. Add the sugar and dissolve. Once warm, add the butter and melt in. If you are using saffron for color, add the threads to the milk and set mixture aside to cool to 110° or cooler before adding it to the other ingredients.",
            "Sift flour into a large bowl or a stand mixer. If using instant yeast, whisk in to flour. Once milk mixture is cooled to 110° add to flour and mix (remove saffron threads with a strainer). Add lemon zest, eggs and salt and mix. If you are using active dry yeast, add that last. Work dough until it comes together and forms a smooth sticky dough. (About 8 minutes on medium speed) It will not form into a ball.",
            "Cover and let rise for 60 - 90 minutes or until doubled in size.",
            "Once doubled, punch down dough and put out onto a lightly floured surface and separate into 3 or 6 pieces, depending on the size bun you would like. Form dough into balls and place on lined baking sheet, slightly flattening into a cake. Cover and let rise for another 45 - 60 minutes.",
            "Preheat oven to 400°F / 200°C and make an egg wash with either a whole egg or egg white (if you used the saffron for color).",
            "Bake buns for 15 minutes, tenting them if they begin to brown too much. An instant read thermometer should read 190°F-200°F (approx.90°C). Cool on a wire rack and serve warm with butter, jam or clotted cream."
        ],
        user_id : 1,
        foodType : "breakfast"
    },
    {
        title: "Cheescake",
        description : "A New York style cheescake with a graham cracker crust",
        intructions : [
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
        user_id : 1,
        foodType : "dessert"
    }

];