const recipes = [
    {
        title: "Snickerdoodles",
        description: "A classic snickerdoodle recipe with amazing mouth feel!",
        difficulty: "☠️☠️⬛️⬛️⬛️",
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
                    "Sugar: 1 1/2 cups",
                    "Margarine: 1 cup",
                    "Eggs: 2 large",
                    "Vanilla: 2 teaspoons"
                ]
            }
        ],
        instructions: [
            "Whisk flour, cream of tartar, baking soda, and salt in a medium mixing bowl.",
            "In a larger bowl cream butter and sugar together.",
            "Add eggs and vanilla to creamed mixture.",
            "Combine flour and your creamed mixture together.",
            "Preheat oven to 350 degrees Fahrenheit.",
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
        description: "A yummy yummy brownie recipe.",
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
    },
    {
        title: "Soft Pretzels",
        description: "A prezel recipe that will make you feel German in no time.",
        difficulty: "☠️☠️☠️⬛️⬛️",
        time: "1hr/20min",
        yummyness: "⭐⭐⭐☆☆",
        img: "images/pretzels.jpg",
        imgalt: "A tray of pretzels",
        sections: [
            {
                sectionName: "Yeast Mix",
                ingredients: [
                    "Active Dry Yeast: 2 1/4 teaspoon",
                    "Brown Sugar: 1 tablespoon",
                    "Water: 1 1/2 cups"
                ]
            },
            {
                sectionName: "Dry Ingredients",
                ingredients: [
                    "Margarine: 1 tablespoon",
                    "Salt: 1 teaspoon",
                    "Flour: 3 3/4 cups"
                ]
            },
            {
                sectionName: "Baking Soda Bath",
                ingredients: [
                    "Baking Soda: 1/2 cups",
                    "Water: 5 cups"
                ]
            }
        ],
        instructions: [
            "Whisk the yeast, sugar, and water together, then let it sit for 1 minute.",
            "Whisk in margarine and salt.",
            "Add in only 3 cups of flour and mix until combined.",
            "Add in 3/4 cups of flour and mix the dough. If the dough still sticks to your bowl add flour in small increments (you shouldn't need more than 1/4 cup extra flour).",
            "Knead the dough until you can pull off a piece of dough, stretch it, and see light through it without the dough tearing (this is known as the windowpane test).",
            "Cover the top with a towel and let the dough rest for 30 minutes.",
            "Preheat oven to 400 degrees Fahrenheit.",
            "Add baking soda and water to a pot.",
            "Cut dough into 1/3 cup sized balls.",
            "Roll out the balls until they're about 2 feet in length.",
            "Then take the dough and form the breast cancer awareness symbol and fold the twisted part towards yourself. Press the shape together so it stickes to itself",
            "Get the baking soda bath boiling and drop 1-2 pretzels in, wait for 20-30 seconds, then take them out and put them on a tray.",
            "Sprinkle coarse salt on top of your prezels or use any other seasoning of choice (you can also make a pretzel dip).",
            "Bake for 12-15 minutes."
        ]
    },
    {
        title: "Bannana Bread",
        description: "Bannana bread to get milage out of those old bannanas.",
        difficulty: "☠️☠️⬛️⬛️⬛️",
        time: "25min/60min",
        yummyness: "⭐⭐⭐☆☆",
        img: "images/one-bannana-bread.jpg",
        imgalt: "Image of old bannanas that have reincarnated into bannana bread.",
        sections: [
            {
                sectionName: "Batter",
                ingredients: [
                    "Margarine: 1/2 cup", 
                    "Sugar: 3/4 cup",
                ]
            },
            {
                sectionName: "Bannana Guts",
                ingredients: [
                    "Old Bannanas: 3 count",
                    "Eggs: 2 large",
                    "Vanilla: 1/2 teaspoon"
                ]
            },
            {
                sectionName: "Dry Ingredients",
                ingredients: [
                    "Flour: 1 1/2 cup",
                    "Baking Soda: 1 teaspoon",
                    "Salt: 1/2 teaspoon"
                ]
            },
            {
                sectionName: "Optional Ingredients",
                ingredients: [
                    // "Chocolate Chips: 1/2 cup",
                    "raisins: 1/2 cup",
                    "Chopped Walnuts: 1 cup"
                ]
            }
        ],
        instructions: [
            "Preheat oven to 350 degrees Fahrenheit.",
            "Grease and flour a bread pan.",
            "Cream together margarine and sugar.",
            "In a seperate bowl, Mash bannanas, eggs, and vanilla together, until you get a chunky bannana paste.",
            "Mix bannana guts into the batter",
            "In a seperate bowl, whisk flour, baking soda, and salt together.",
            "Mix the dry ingredients into the batter.",
            "Mix in optional ingredients as desired.",
            "Bake for 60 minutes. (Test the center with a toothpick)"
        ]
    },
    {
        title: "French Toast",
        description: "A french toast recipe to repurpose your hardened bread.",
        difficulty: "☠️⬛️⬛️⬛️⬛️",
        time: "5min/5min", // I don't know if this is the actual length of french toast
        yummyness: "⭐⭐⭐⭐⭐",
        img: "images/french-toast.jpg",
        imgalt: "Image of french toast decorated with powdered sugar and syrup",
        sections: [
            {
                sectionName: "Egg Wash",
                ingredients: [
                    "Almond Milk: 1/2 cup",
                    "Sugar: 1/4 cup",
                    "Cinnamon: 1 teaspoon", // these ingredients are a test, I haven't confirmed that this leads to good french toast.
                    "Egg: 1 large"
                ]
            },
            {
                sectionName: "Optional Decoration", // CHANGE every section name with optional at the start, should hide it's ingredients from the weird ingredient list on the card
                ingredients: [
                    "Powdered Sugar: 1 tablespoon"
                ]
            }
        ],
        instructions: [
            "Grab a frying pan and turn your stovetop to medium heat.",
            "In a bowl whisk together an egg and the milk.",
            "Add sugar and cinnamon to the mix.",
            "Soak both sides of your bread in the Egg Wash. (If you're using a small pan, you can cut the bread into strips)",
            "Pan fry the bread until it stops sizzling.",
            "If desired, use a fine-mesh sieve to sift powdered sugar onto your toast."
        ]
    }
   /*
    , // change this comma
    {
        title: "Brownies",
        description: "A yummy yummy brownie recipe.",
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
// churros, prezzels, Madeleines, turnovers, dessert bars, Danish, ginger bread, lemon bread, doughnut, pancakes, cream puffs, angel cake, french toast
// With logo, could incorperate letters of my name
// could make the whole logo in one line
// make a notes section and a story section for each recipe incase people want to understand baking better and be entertained
// make a way for me to link words in instruction/description sections so that they can easily see how much of an ingredient to add
// or if they want they can click on a link to take them to a page that tells them the technique in detail (like how to fold a pretzel)

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
