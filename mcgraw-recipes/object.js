const recipes = [
    {
        title: "Snickerdoodles",
        description: "A classic snickerdoodle recipe with amazing mouth feel!",
        difficulty: "☠️☠️☠️⬛️⬛️",
        time: "1hr/10min",
        yummyness: "⭐⭐⭐⭐⭐",
        img: "images/plated-snickerdoodles.jpg",
        imgalt: "Giant pile of snickerdoodles.",
        sections: [
            {
                sectionName: "Dry Ingredients",
                ingredients: [
                    "Flour: 2 1/2 cups", // was 2 and 2/3 cups
                    "Baking Soda: 1/2 teaspoon",
                    "Salt: 3/4 teaspoon",
                    "Cream of Tartar: 1 teaspoon"
                ]
            },
            {
                sectionName: "Wet Ingredients",
                ingredients: [
                    "Margarine: 1 cup",
                    "Sugar: 1 1/2 cups",
                    "Eggs: 2 large",
                    "Vanilla: 2 teaspoons"
                ]
            }
        ],
        instructions: [
            "Preheat oven to 350 degrees Fahrenheit.",
            "Whisk flour, cream of tartar, baking soda, and salt in a medium mixing bowl.",
            "In a larger bowl cream butter and sugar together.",
            "Add eggs and vanilla to creamed mixture.",
            "Combine flour and creamed mixtures together.",
            "Roll dough in cinnamon and sugar.",
            "Put cookies in the oven for 9-11 minutes.",
            "Snicker your doodle."
        ]
    },
    {
        title: "Pie Crust",
        description: "A classic pie crust recipe.",
        difficulty: "☠️☠️☠️⬛️⬛️",
        time: "15min/40min",
        yummyness: "⭐⭐⭐☆☆",
        img: "images/pie-crust.jpg",
        imgalt: "Image of lemonade pie",
        sections: [
            {
                sectionName: "Crust",
                ingredients: [
                    "Flour: 2 1/4 cups",
                    "Salt: 1 teaspoon",
                    "Margarine: 3/4 cup",
                    "Water: 1/3 cup"
                ]
            }
        ],
        instructions: [
            "Preheat oven to 350 degrees Fahrenheit.",
            "Mix flour and butter together",
            "Mix butter in until you get pea sized butter chuncks. Don't overmix!",
            "Mix in water a little bit at a time until the dough stops being crumbly.",
            "Shape dough into a puck shape with your hands.",
            "Flour a surface and roll your pie crust. Be sure to rotate it after each roll.",
            "When pie dough is flat enough fold it in half and then in half again to place it in your pie tin (or glass).",
            "Unfold the pie dough and bake for 20 minutes."
        ]
    },
    {
        title: "Hot Cocoa",
        description: "A simple hot cocoa recipe that will make you want more.",
        difficulty: "☠️⬛️⬛️⬛️⬛️",
        time: "10min/5min",
        yummyness: "⭐⭐⭐⭐☆",
        img: "images/hot-cocoa.jpg",
        imgalt: "Image of pan of hot cocoa with a straw sticking out",
        sections: [
            {
                sectionName: "Cocoa Mix",
                ingredients: [
                    "Almond Milk: 2 cups",
                    "Sugar: 1/4 cup",
                    "Cocoa Powder: 1/4 cup"
                ]
            }
        ],
        instructions: [
            "Turn stovetop to medium heat.",
            "Put a pot on the stove and whisk together milk, sugar, and cocoa. (use a rubber whisk or a wooden spoon so you don't scratch your pan!).",
            "Let it cool and enjoy."
        ]
    },
    {
        title: "Brownies",
        description: "A yummy yummy brownie recipe",
        difficulty: "☠️☠️⬛️⬛️⬛️",
        time: "30min/30min",
        yummyness: "⭐⭐⭐⭐⭐",
        img: "images/square-brownies.jpg",
        imgalt: "Image of delicious brownies that lived short lives",
        sections: [
            {
                sectionName: "Chocolate Mix",
                ingredients: [
                    "Margarine: 3/4 cup", // this is a test. the old recipe called for 10 tablespoons of butter. 
                    // I tried 1/2 cups instead and it turned out dry and grainy
                    "Sugar: 1 1/4 cup",
                    "Cocoa Powder: 3/4 cup",
                    "Salt: 1/2 teaspoon"
                ]
            },
            {
                sectionName: "Wet Ingredients",
                ingredients: [
                    "Vanilla Extract: 1 teaspoon",
                    "Eggs: 2 large"
                ]
            },
            {
                sectionName: "Dry Ingredients",
                ingredients: [
                    "Baking Powder: 1 teaspoon",
                    "Flour: 1/2 cup"
                ]
            },
            {
                sectionName: "Optional Ingredients",
                ingredients: [
                    "Chocolate Chips: 1/2 cup",
                    "Chopped Walnuts: 1/2 cup"
                ]
            }

        ],
        instructions: [
            "Preheat oven to 325 degrees Fahrenheit.",
            "Combine butter, sugar, cocoa powder, and salt in a large pan.",
            "Cook the chocolate mix you just made on low heat (just hot enough to melt the butter) and stir occasionally",
            "After mixture becomes a yummy chocolate paste, remove from heat and let the mixture cool for 5-10 minutes",
            "While it's cooling whisk baking powder and flower together in a small bowl",
            "When mixture is cool enough to not cook your eggs, stir in vanilla and eggs to the chocolate mix until combined",
            "Add Dry ingredients to the chocolate mix until combined.",
            "Fold in optional ingredients as desired.",
            "Bake for 30 to 35 minutes (you can cook your eggs now)."
        ]
    }
   /*
    , // change this comma
    {
        title: "Brownies",
        description: "A yummy yummy brownie recipe",
        difficulty: "☠️☠️⬛️⬛️⬛️",
        time: "30min/30min",
        yummyness: "5/5",
        img: "images/hot-cocoa.jpg", // change this 
        imgalt: "Image of pan of hot cocoa with a straw sticking out", // change this
        sections: [
            {
                sectionName: "Chocolate Mix",
                ingredients: [
                    "Margarine: 1/2 cup",
                    "Sugar: 1 1/4 cup",
                    "Cocoa Powder: 3/4 cup"
                    "Salt: 1/2 teaspoon"
                ]
            },
            {
                sectionName: "Dry Ingredients",
                ingredients: [
                    "Baking Powder: 1 teaspoon",
                    "Flour: 1/2 cup"
                ]
            },
            {
                sectionName: "Wet Ingredients",
                ingredients: [
                    "Vanilla Extract: 1 teaspoon",
                    "Eggs: 2 large"
                ]
            },
            {
                sectionName: "Optional Ingredients",
                ingredients: [
                    "Chocolate Chips: 1/2 cup",
                    "Chopped Walnuts: 1/2 cup"
                ]
            }

        ],
        instructions: [
            "Preheat oven to 325 degrees Fahrenheit.",
            "Combine butter, sugar, cocoa powder, and salt in a large pan.",
            "Cook the chocolate mix you just made on low heat (just hot enough to melt the butter) and stir occasionally",
            "After mixture becomes a yummy chocolate paste, remove from heat and let the mixture cool for 5-10 minutes",
            "While it's cooling whisk baking powder and flower together in a small bowl",
            "When mixture is cool enough to not cook your eggs, stir in vanilla and eggs to the chocolate mix until combined",
            "Add Dry ingredients to the chocolate mix until combined.",
            "Fold in optional ingredients as desired.",
            "Bake for 30 to 35 minutes (you can cook your eggs now)."
        ]
    }
    */
];


// Add Fudge, Brownies, oatmeal chocolate chip, oatmeal raisin, chocolate chip, slices or pielings(the dumpling pie recipe I want to make), biscuts, scones,
// churros, prezzels, Madeleines, turnovers, dessert bars, Danish, ginger bread, lemon bread
// With logo, could incorperate letters of my name
// could make the whole logo in one line

const commonIngredients = ["Flour",
                           "Eggs",
                           "Sugar",
                           "Brown Sugar",
                           "Powdered Sugar",
                           "Water",
                           "Vanilla",
                           "Milk",
                           "Butter",
                           "Margarine",
                           "Salt",
                           "Vanilla Extract", 
                           "Baking Powder",
                           "Baking Soda",
                           "Chocolate Chips"
]
