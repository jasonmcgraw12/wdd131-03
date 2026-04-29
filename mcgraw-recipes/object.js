const recipes = [
    {
        title: "Snickerdoodle",
        description: "A classic snickerdoodle recipe with amazing mouth feel!",
        difficulty: "☠️☠️☠️⬛️⬛️",
        time: "1hr/10min",
        yummyness: "5/5",
        img: "images/plated-snickerdoodles.jpg",
        imgalt: "Giant pile of snickerdoodles.",
        sections: [
            {
                sectionName: "Dry Ingredients",
                ingredients: [
                    "Flour: 2 2/3 cups",
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
            "Put cookies in the oven for 9-11 minutes."
        ]
    },
    {
        title: "Pie Crust",
        description: "A classic pie crust recipe.",
        difficulty: "☠️☠️☠️⬛️⬛️",
        time: "15min/40min",
        yummyness: "3/5",
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
        yummyness: "4/5",
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
    }
];

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
                           "Salt"
]
