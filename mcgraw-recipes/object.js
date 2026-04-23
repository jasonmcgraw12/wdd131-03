const recipes = [
    {
        title: "Snickerdoodle",
        description: "A classic snickerdoodle recipe with amazing mouth feel!",
        img: "images/plated-snickerdoodles.jpg",
        imgalt: "Giant pile of snickerdoodles.",
        ingredients: [
            {
                section: "Dry Ingredients",
                items: [
                    "Flour: 2 2/3 cups",
                    "Baking Soda: 1/2 teaspoon",
                    "Salt: 3/4 teaspoon",
                    "Cream of Tartar: 1 teaspoon"
                ]
            },
            {
                section: "Wet Ingredients",
                items: [
                    "Margarine: 1 cup",
                    "Sugar: 1 1/2 cups",
                    "Eggs: 2 large",
                    "Vanilla: 2 teaspoons"
                ]
            }
            // {name: "flour", ammount: "2 3/4 cups"},
            //           {name: "creamOfTartar", ammount: "1 teaspoon"},
            //           {name: "bakingSoda", ammount: "1/2 teaspoon"},
            //           {name: "salt", ammount: "3/4 teaspoon"},
            //           {name: "unsaltedButter", ammount: "1 cup"},
            //           {name: "sugar", ammount: "1 1/2 cups"},
            //           {name: "eggs", ammount: "2 large"},
            //           {name: "vanilla", ammount: "2 teaspoons"}
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
        img: "images/pie-crust.jpg",
        imgalt: "Image of lemonade pie",
        ingredients: [
            {
                section: "Crust",
                items: [
                    "Flour: 2 1/4 cups",
                    "Salt: 1 teaspoon",
                    "Margarine: 3/4 cup",
                    "Water: 1/3 cup"
                ]
            }
            // {name: "flour", ammount: "2 1/4 cups"},
            //           {name: "salt", ammount: "1 teaspoon"},
            //           {name: "unsaltedButter", ammount: "3/4 cup"},
            //           {name: "water", ammount: "1/3 cup"}
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
        img: "images/hot-cocoa.jpg",
        imgalt: "Image of pan of hot cocoa with a straw sticking out",
        ingredients: [
            {
                section: "Cocoa Mix",
                items: [
                    "Almond Milk: 2 cups",
                    "Sugar: 1/4 cup",
                    "Cocoa Powder: 1/4 cup"
                ]
            }
            // }
            // {name: "milk", ammount: "2 cups"},
            //           {name: "sugar", ammount: "1/4 cup"},
            //           {name: "cocoa", ammount: "1/4 cup"}
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
// WARNING yumyness and other quick info is not included yet

console.log(recipes[0].ingredients.map(section => {return section.items.join(" ")}).join(" "))