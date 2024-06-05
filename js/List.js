const products = [
  "Milk", "Bread", "Eggs", "Chicken", "Rice", "Bananas", "Apples", "Tomatoes", "Potatoes", "Onions",
  "Garlic", "Carrots", "Oranges", "Cheese", "Yogurt", "Butter", "Flour", "Sugar", "Salt", "Pepper",
  "Pasta", "Beef", "Fish", "Lettuce", "Cucumber", "Bell Peppers", "Strawberries", "Blueberries", "Grapes", "Spinach",
  "Cabbage", "Broccoli", "Cauliflower", "Zucchini", "Eggplant", "Mushrooms", "Green Beans", "Peas", "Corn", "Avocado",
  "Lemon", "Lime", "Pineapple", "Mango", "Watermelon", "Cantaloupe", "Peach", "Plum", "Apricot", "Kiwi",
  "Cherries", "Raspberries", "Blackberries", "Cranberries", "Grapefruit", "Papaya", "Coconut", "Almonds", "Walnuts", "Peanuts",
  "Cashews", "Hazelnuts", "Pistachios", "Macadamia Nuts", "Sunflower Seeds", "Pumpkin Seeds", "Chia Seeds", "Sesame Seeds", "Quinoa", "Oats",
  "Cereal", "Granola", "Maple Syrup", "Honey", "Jam", "Peanut Butter", "Ketchup", "Mustard", "Mayonnaise", "Soy Sauce",
  "Olive Oil", "Vegetable Oil", "Canola Oil", "Coconut Oil", "Butter", "Margarine", "Cream", "Sour Cream", "Cottage Cheese", "Cream Cheese",
  "Ice Cream", "Chocolate", "Candy", "Cookies", "Cake", "Brownies", "Pie", "Pastries", "Bread Rolls", "Bagels",
  "Croissants", "Muffins", "Doughnuts", "Pita Bread", "Tortillas", "Naan", "Pancakes", "Waffles", "Scones", "Biscotti",
  "Crackers", "Pretzels", "Chips", "Popcorn", "Nuts", "Trail Mix", "Dried Fruit", "Raisins", "Dates", "Prunes",
  "Figs", "Apricots", "Sultanas", "Canned Beans", "Canned Tomatoes", "Canned Tuna", "Canned Salmon", "Canned Soup", "Canned Vegetables", "Canned Fruit",
  "Frozen Vegetables", "Frozen Fruit", "Frozen Pizza", "Frozen Dinners", "Frozen Chicken Nuggets", "Frozen Fish Sticks", "Frozen Potatoes", "Frozen Peas", "Frozen Corn", "Frozen Spinach",
  "Frozen Broccoli", "Frozen Berries", "Frozen Yogurt", "Frozen Desserts", "Instant Noodles", "Instant Rice", "Instant Soup", "Instant Oatmeal", "Coffee", "Tea",
  "Hot Chocolate", "Soda", "Juice", "Water", "Sparkling Water", "Sports Drinks", "Energy Drinks", "Milkshakes", "Smoothies", "Wine",
  "Beer", "Spirits", "Liquor", "Cocktail Mixers", "Herbs", "Spices", "Vinegar", "Baking Soda", "Baking Powder", "Yeast",
  "Gelatin", "Pudding Mix", "Jello", "Marshmallows", "Graham Crackers", "Baking Chocolate", "Cocoa Powder", "Vanilla Extract", "Cinnamon", "Nutmeg",
  "Ginger", "Cloves", "Allspice", "Cardamom", "Coriander", "Cumin", "Paprika", "Turmeric", "Saffron", "Bay Leaves",
  "Oregano", "Thyme", "Rosemary", "Basil", "Mint", "Dill", "Parsley", "Cilantro", "Sage", "Tarragon",
  "Chives", "Red Pepper Flakes", "Hot Sauce", "BBQ Sauce", "Teriyaki Sauce", "Worcestershire Sauce", "Salad Dressing", "Salsa", "Hummus", "Guacamole",
  "Pesto", "Tzatziki", "Soy Milk", "Almond Milk", "Coconut Milk", "Rice Milk", "Oat Milk", "Tofu", "Tempeh", "Seitan",   "Pizza",
  "Burger",
  "Sushi",
  "Tacos",
  "Pasta",
  "Curry",
  "Noodles",
  "Burrito",
  "Sandwich",
  "Fried Chicken",
  "Salad",
  "Shrimp",
  "Steak",
  "Ramen",
  "Soup",
  "Hot Dog",
  "Dim Sum",
  "Fajitas",
  "Gyoza",
  "Dumplings",
  "Pho",
  "Kebab",
  "Pad Thai",
  "Tikka Masala",
  "Paella",
  "Fish and Chips",
  "Lasagna",
  "Risotto",
  "Tofu Stir Fry",
  "Stir Fry",
  "Meatballs",
  "Pierogi",
  "Gnocchi",
  "Ceviche",
  "Tamales",
  "Quesadilla",
  "Enchiladas",
  "Empanadas",
  "Biryani",
  "Ratatouille",
  "Gumbo",
  "Jambalaya",
  "Chili",
  "Frittata",
  "Quiche",
  "Hamburger",
  "Cheesesteak",
  "Meatloaf",
  "Brisket",
  "Roast Beef",
  "Pork Belly",
  "Sausage",
  "Kielbasa",
  "Pulled Pork",
  "BBQ Ribs",
  "Lobster",
  "Crab",
  "Clams",
  "Mussels",
  "Calamari",
  "Octopus",
  "Escargot",
  "Caviar",
  "Foie Gras",
  "Escabeche",
  "Gazpacho",
  "Couscous",
  "Tabbouleh",
  "Falafel",
  "Hummus",
  "Baba Ganoush",
  "Muhammara",
  "Dolma",
  "Ful Medames",
  "Koshari",
  "Moussaka",
  "Dolmades",
  "Spanakopita",
  "Baklava",
  "Loukoumades",
  "Galaktoboureko",
  "Tiramisu",
  "Cannoli",
  "Panna Cotta",
  "Gelato",
  "Tiramisu",
  "Macarons",
  "Crepes",
  "Croquettes",
  "Churros",
  "Flan",
  "Chimichanga",
  "Sopes",
  "Tamale Pie",
  "Navajo Taco",
  "Poutine",
  "BeaverTails",
  "Butter Tart",
  "Nanaimo Bar",
  "Pemmican",
  "Montreal-Style Bagel",
  "Ketchup Chips",
  "Maple Taffy",
  "Caesar Cocktail",
  "Beavertails",
  "Caesar Cocktail",
  "Nanaimo Bar",
  "Pemmican",
  "Montreal-Style Bagel",
  "Ketchup Chips",
  "Maple Taffy",
  "Poutine",
  "Timbits",
  "Kinder Surprise",
  "Smarties",
  "Coffee Crisp",
  "Crunchie",
  "Mars Bar",
  "Aero",
  "Caramilk",
  "Hickory Sticks",
  "Nanaimo Bar",
  "All Dressed Chips",
  "Poutine",
  "BeaverTails",
  "Caesar Cocktail",
  "Beavertails",
  "Nanaimo Bar",
  "Pemmican",
  "Montreal-Style Bagel",
  "Ketchup Chips",
  "Maple Taffy",
  "Poutine",
  "Timbits",
  "Kinder Surprise",
  "Smarties",
  "Coffee Crisp",
  "Crunchie",
  "Mars Bar",
  "Aero",
  "Caramilk",
  "Hickory Sticks",
  "All Dressed Chips",
  "Poutine",
  "BeaverTails",
  "Caesar Cocktail",
  "Beavertails",
  "Nanaimo Bar",
  "Pemmican",
  "Montreal-Style Bagel",
  "Ketchup Chips",
  "Maple Taffy",
  "Poutine",
  "Timbits",
  "Kinder Surprise",
  "Smarties",
  "Coffee Crisp",
  "Crunchie",
  "Mars Bar",
  "Aero",
  "Caramilk",
  "Hickory Sticks",
  "All Dressed Chips",
  "Poutine",
  "BeaverTails",
  "Caesar Cocktail",
  "Beavertails",
  "Nanaimo Bar",
  "Pemmican",
  "Montreal-Style Bagel",
  "Ketchup Chips",
  "Maple Taffy",
  "Poutine",
  "Timbits",
  "Kinder Surprise",
  "Smarties",
  "Coffee Crisp",
  "Crunchie",
  "Mars Bar",
  "Aero",
  "Caramilk",
  "Hickory Sticks",
  "All Dressed Chips",
  "Poutine",
  "BeaverTails",
  "Caesar Cocktail",
  "Beavertails",
  "Nanaimo Bar",
  "Pemmican",
  "Montreal-Style Bagel",
  "Ketchup Chips",
  "Maple Taffy",
  "Poutine",
  "Timbits",
  "Kinder Surprise",
  "Smarties",
  "Coffee Crisp",
  "Crunchie",
  "Mars Bar",
  "Aero",
  "Caramilk",
  "Hickory Sticks",
  "All Dressed Chips",
  "Poutine",
  "BeaverTails",
  "Caesar Cocktail",
  "Beavertails",
  "Nanaimo Bar",
  "Pemmican",
  "Montreal-Style Bagel",
  "Ketchup Chips",
  "Maple Taffy",
  "Poutine",
  "Timbits",
  "Kinder Surprise",
  "Smarties",
  "Coffee Crisp",
  "Crunchie",
  "Mars Bar",
  "Aero",
  "Caramilk",
  "Hickory Sticks",
  "All Dressed Chips",
  "Poutine",
  "BeaverTails",
  "Caesar Cocktail",
  "Beavertails",
  "Nanaimo Bar",
  "Pemmican",
  "Montreal-Style Bagel",
  "Ketchup Chips",
  "Maple Taffy",
  "Poutine",
  "Timbits",
  "Kinder Surprise",
  "Smarties",
  "Coffee Crisp",
  "Crunchie",
  "Mars Bar",
  "Aero",
  "Caramilk",
  "Hickory Sticks",
  "All Dressed Chips"
];

export default products;