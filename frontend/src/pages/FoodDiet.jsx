

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FoodDiet.css";

import me1 from "../assets/file-00.jpg";
import me2 from "../assets/file-23.jpg";
import me3 from "../assets/file-28.jpg";
import me4 from "../assets/file-33.jpg";
import me5 from "../assets/file-45.jpg";
import me6 from "../assets/file-46.jpg";
import me7 from "../assets/file-61.jpg";
import me8 from "../assets/file-78.jpg";
import me9 from "../assets/file-92.jpg";
import me10 from "../assets/file-97.jpg";
import me11 from "../assets/file-30.jpg";
import me12 from "../assets/file.jpg";
import me13 from "../assets/file-00.jpg";
import me14 from "../assets/file-23.jpg";
import me15 from "../assets/file-45.jpg";
import me16 from "../assets/file.jpg";
import me17 from "../assets/file-97.jpg";
import me18 from "../assets/file-78.jpg";

const FoodDiet = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "ALL", color: "#007bff" },
    { name: "VEGETARIAN", color: "#4caf50" },
    { name: "NON-VEG", color: "#f44336" },
    { name: "SOUPS", color: "#ff9800" },
    { name: "DRINKS", color: "#03a9f4" },
    { name: "BREAKFAST", color: "#9c27b0" },
    { name: "SNACKS", color: "#009688" },
    { name: "LUNCH", color: "#3f51b5" },
    { name: "DINNER", color: "#795548" },
    { name: "DESSERTS", color: "#e91e63" },
  ];

  const allRecipes = [
    // PACK 1
    {
      name: "Spinach Dal Fry",
      img: me1,
      imgSrc: me1,
      type: "veg",
      calories: "120 Cal",
      category: "VEGETARIAN",
      mealOfDay: "Lunch",
      region: "Universal Dish",
      servings: 2,
      about:
        "Spinach Dal Fry is a protein-rich Indian curry made with moong dal and fresh spinach leaves. Light, nourishing and easy to digest — great during recovery or when you need a comforting wholesome meal.",
      nutrition: {
        Energy: "120 kcal",
        Carbohydrates: "18 g",
        Fat: "3 g",
        Sugar: "2 g",
        Sodium: "190 mg",
        Potassium: "340 mg",
        Calcium: "48 mg",
        Iron: "2.7 mg",
        VitaminA: "505 IU",
        VitaminC: "9 mg",
      },
      ingredients: [
        {
          title: "For dal:",
          list: [
            "½ cup moong dal (yellow lentils)",
            "1 cup chopped spinach (palak)",
            "½ teaspoon turmeric",
            "1 teaspoon salt",
            "2 cups water",
          ],
        },
        {
          title: "For tempering:",
          list: [
            "1 tablespoon ghee or oil",
            "1 teaspoon cumin seeds",
            "1 teaspoon chopped garlic",
            "1 chopped onion",
            "1 chopped tomato",
            "1 teaspoon ginger paste",
            "2 green chilies slit",
            "½ teaspoon red chili powder",
          ],
        },
      ],
      procedure: [
        "Wash and soak moong dal for 10 minutes.",
        "Cook dal with turmeric, salt and water until soft (10–12 minutes).",
        "Add chopped spinach and cook for 3–5 minutes until wilted.",
        "Heat ghee/oil, add cumin and allow to splutter.",
        "Add garlic, ginger, green chilies and sauté until fragrant.",
        "Add onion and cook until translucent.",
        "Add tomato, cook until soft and oil separates.",
        "Add red chili powder, mix and pour tempering over dal.",
        "Simmer dal for 3–4 minutes to blend flavors.",
        "Adjust seasoning and serve hot with rice or rotis.",
      ],
      allowed: ["Anemia", "Diabetes", "Jaundice", "Fever Recovery"],
    },

    {
      name: "Oats Idli",
      img: me2,
      imgSrc: me2,
      type: "veg",
      calories: "98 Cal",
      category: "BREAKFAST",
      mealOfDay: "Breakfast",
      region: "South India",
      servings: 3,
      about:
        "Oats Idli is a fiber-rich, low-calorie breakfast option ideal for weight management and digestion. It combines oats, semolina and yogurt to make steamed soft idlis.",
      nutrition: {
        Energy: "98 kcal",
        Carbohydrates: "15 g",
        Fat: "2 g",
        Sugar: "1 g",
        Sodium: "170 mg",
        Potassium: "110 mg",
        Calcium: "22 mg",
        Iron: "1.2 mg",
        VitaminA: "12 IU",
        VitaminC: "1 mg",
      },
      ingredients: [
        {
          title: "Main ingredients:",
          list: [
            "1 cup oats (powdered)",
            "½ cup rava (semolina)",
            "1 cup curd (yogurt)",
            "½ cup water",
            "1 teaspoon salt",
            "1 teaspoon oil",
          ],
        },
        {
          title: "Tempering:",
          list: [
            "1 teaspoon mustard seeds",
            "1 teaspoon urad dal",
            "1 teaspoon chana dal",
            "1 green chili chopped",
            "½ teaspoon grated ginger",
            "1 tablespoon grated carrot",
          ],
        },
      ],
      procedure: [
        "Dry roast oats lightly and grind to a coarse powder.",
        "Roast semolina until aromatic then mix with oats powder.",
        "Mix curd and water to make a batter; add salt.",
        "Prepare tempering with mustard, dals, chili and ginger.",
        "Fold tempering and grated carrot into the batter.",
        "Rest batter for 10–15 minutes.",
        "Pour batter into greased idli moulds and steam 10–12 minutes.",
        "Allow to cool slightly, unmould and serve with chutney or sambar.",
      ],
      allowed: ["Diabetes", "Obesity", "PCOS", "Constipation"],
    },

    {
      name: "Chicken Curry",
      img: me3,
      imgSrc: me3,
      type: "nonveg",
      calories: "240 Cal",
      category: "NON-VEG",
      mealOfDay: "Lunch",
      region: "North India",
      servings: 4,
      about:
        "Chicken Curry is a classic Indian preparation of tender chicken simmered in a spiced onion-tomato gravy. It supplies high-quality protein and essential minerals, and is a hearty family favorite.",
      nutrition: {
        Energy: "240 kcal",
        Carbohydrates: "10 g",
        Fat: "12 g",
        Sugar: "3 g",
        Sodium: "320 mg",
        Potassium: "410 mg",
        Calcium: "34 mg",
        Iron: "1.9 mg",
        VitaminA: "165 IU",
        VitaminC: "6 mg",
      },
      ingredients: [
        {
          title: "For marination:",
          list: [
            "500 g chicken pieces",
            "½ cup curd",
            "1 tsp ginger-garlic paste",
            "½ tsp turmeric",
            "1 tsp red chilli powder",
            "1 tsp salt",
          ],
        },
        {
          title: "For gravy:",
          list: [
            "2 tbsp oil",
            "1 large onion finely chopped",
            "2 tomatoes pureed",
            "1 tsp cumin seeds",
            "1 tsp garam masala",
            "1 tsp coriander powder",
            "½ tsp kasuri methi",
          ],
        },
      ],
      procedure: [
        "Marinate chicken with curd, ginger-garlic, turmeric, chilli and salt for 30 minutes.",
        "Heat oil, add cumin seeds and let splutter.",
        "Add onions and sauté until golden brown.",
        "Add tomato puree; cook until oil separates.",
        "Add spices and mix well.",
        "Add marinated chicken, mix and cook covered for 15 minutes.",
        "Add water to adjust consistency.",
        "Simmer until chicken is cooked through.",
        "Finish with kasuri methi and simmer 1–2 minutes.",
        "Garnish and serve with rice or rotis.",
      ],
      allowed: ["Anemia", "Low Immunity", "Post Surgery Recovery"],
    },

    // PACK 2
    {
      name: "Vegetable Upma",
      img: me4,
      imgSrc: me4,
      type: "veg",
      calories: "150 Cal",
      category: "BREAKFAST",
      mealOfDay: "Breakfast",
      region: "South India",
      servings: 2,
      about:
        "Vegetable Upma is a savory semolina-based breakfast loaded with vegetables and tempered spices. It's light, nutritious and provides complex carbs and fibre for sustained energy.",
      nutrition: {
        Energy: "150 kcal",
        Carbohydrates: "28 g",
        Fat: "3.5 g",
        Sugar: "3 g",
        Sodium: "210 mg",
        Potassium: "220 mg",
        Calcium: "20 mg",
        Iron: "1 mg",
        VitaminA: "220 IU",
        VitaminC: "8 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: [
            "1 cup semolina (rava)",
            "2 cups mixed vegetables (carrot, peas, beans)",
            "2 tbsp oil or ghee",
            "1 tsp mustard seeds",
            "8–10 curry leaves",
            "2 cups water",
            "Salt to taste",
          ],
        },
        {
          title: "Optional:",
          list: ["1 tbsp lemon juice", "Chopped coriander for garnish"],
        },
      ],
      procedure: [
        "Dry roast semolina until aromatic and keep aside.",
        "Heat oil; add mustard seeds and curry leaves.",
        "Add vegetables and sauté for 2–3 minutes.",
        "Add water and bring to a boil.",
        "Slowly add semolina while stirring to avoid lumps.",
        "Cook on low heat until water is absorbed.",
        "Add lemon juice and garnish with coriander.",
        "Serve hot with chutney or sambar.",
      ],
      allowed: ["Diabetes", "Weight Management", "Constipation"],
    },

    {
      name: "Grilled Paneer Tikka",
      img: me5,
      imgSrc: me5,
      type: "veg",
      calories: "180 Cal",
      category: "SNACKS",
      mealOfDay: "Snack",
      region: "North India",
      servings: 3,
      about:
        "Paneer Tikka is a popular Indian appetizer where paneer cubes are marinated in yogurt and spices, then grilled. It's a protein-rich vegetarian snack with a smoky char.",
      nutrition: {
        Energy: "180 kcal",
        Carbohydrates: "6 g",
        Fat: "12 g",
        Sugar: "3 g",
        Sodium: "320 mg",
        Potassium: "180 mg",
        Calcium: "210 mg",
        Iron: "0.6 mg",
        VitaminA: "140 IU",
        VitaminC: "2 mg",
      },
      ingredients: [
        {
          title: "Marination:",
          list: [
            "250 g paneer cubes",
            "½ cup hung curd",
            "1 tbsp ginger-garlic paste",
            "1 tsp red chilli powder",
            "1 tsp garam masala",
            "1 tsp chaat masala",
            "1 tbsp oil",
            "Salt to taste",
          ],
        },
        {
          title: "For grilling:",
          list: ["Onion & capsicum pieces", "Skewers", "Lemon wedges"],
        },
      ],
      procedure: [
        "Mix hung curd with spices to make the marinade.",
        "Coat paneer cubes and vegetables with marinade and rest for 30 minutes.",
        "Thread paneer and veggies onto skewers.",
        "Grill on tawa or oven until light char.",
        "Sprinkle chaat masala and serve with mint chutney.",
      ],
      allowed: ["Protein Deficiency", "Vegetarian Diet Plans"],
    },

    {
      name: "Masala Omelette",
      img: me6,
      imgSrc: me6,
      type: "nonveg",
      calories: "160 Cal",
      category: "BREAKFAST",
      mealOfDay: "Breakfast",
      region: "Universal",
      servings: 1,
      about:
        "Masala Omelette is a quick protein-rich breakfast prepared with eggs and spiced vegetables. Good for early morning protein boost and recovery meals.",
      nutrition: {
        Energy: "160 kcal",
        Carbohydrates: "2 g",
        Fat: "12 g",
        Sugar: "1 g",
        Sodium: "210 mg",
        Potassium: "90 mg",
        Calcium: "30 mg",
        Iron: "1.2 mg",
        VitaminA: "180 IU",
        VitaminC: "3 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: [
            "2 eggs",
            "1 small onion finely chopped",
            "1 green chili chopped",
            "1 tbsp coriander leaves",
            "Salt & pepper to taste",
            "1 tsp oil",
          ],
        },
      ],
      procedure: [
        "Beat eggs with salt and pepper.",
        "Heat oil in pan; sauté onions and green chili till soft.",
        "Pour egg mix into pan and cook both sides till done.",
        "Serve hot with bread or toast.",
      ],
      allowed: ["Protein Deficiency", "Post-workout"],
    },

    // PACK 3
    {
      name: "Mixed Veg Soup",
      img: me7,
      imgSrc: me7,
      type: "veg",
      calories: "80 Cal",
      category: "SOUPS",
      mealOfDay: "Dinner",
      region: "Universal",
      servings: 2,
      about:
        "Mixed Vegetable Soup is a light, hydrating soup made from seasonal vegetables. Ideal as a starter or during illness, it's rich in vitamins and easy to digest.",
      nutrition: {
        Energy: "80 kcal",
        Carbohydrates: "12 g",
        Fat: "2 g",
        Sugar: "4 g",
        Sodium: "160 mg",
        Potassium: "300 mg",
        Calcium: "20 mg",
        Iron: "1 mg",
        VitaminA: "240 IU",
        VitaminC: "6 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: [
            "1 cup mixed vegetables (carrot, beans, cabbage)",
            "1 onion, 1 tomato",
            "1 tsp oil",
            "4 cups vegetable stock or water",
            "Salt & pepper to taste",
          ],
        },
      ],
      procedure: [
        "Heat oil, sauté onions till translucent.",
        "Add chopped vegetables and tomatoes and sauté for 2–3 minutes.",
        "Add stock or water and simmer until vegetables are tender.",
        "Blend partially for a textured soup or leave chunky.",
        "Season and serve hot with a dash of lemon.",
      ],
      allowed: ["Fever Recovery", "Digestive Issues", "Light Diets"],
    },

    {
      name: "Fruit Smoothie",
      img: me8,
      imgSrc: me8,
      type: "veg",
      calories: "130 Cal",
      category: "DRINKS",
      mealOfDay: "Breakfast",
      region: "Universal",
      servings: 1,
      about:
        "Fruit Smoothie is a refreshing blend of seasonal fruits and yogurt or milk. It's nutrient-rich and gives quick energy, vitamins and hydration.",
      nutrition: {
        Energy: "130 kcal",
        Carbohydrates: "26 g",
        Fat: "2 g",
        Sugar: "18 g",
        Sodium: "35 mg",
        Potassium: "250 mg",
        Calcium: "100 mg",
        Iron: "0.4 mg",
        VitaminA: "40 IU",
        VitaminC: "25 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: [
            "1 cup mixed fruits (banana, berries, mango depending on season)",
            "½ cup plain yogurt or milk",
            "1 tsp honey (optional)",
            "Ice cubes",
          ],
        },
      ],
      procedure: [
        "Add fruits, yogurt/milk and honey in blender.",
        "Blend to smooth consistency.",
        "Add ice and serve chilled.",
      ],
      allowed: ["Recovery Diets", "Hydration", "Snack Substitute"],
    },

    {
      name: "Ragi Dosa",
      img: me9,
      imgSrc: me9,
      type: "veg",
      calories: "110 Cal",
      category: "BREAKFAST",
      mealOfDay: "Breakfast",
      region: "South India",
      servings: 2,
      about:
        "Ragi Dosa is a healthy millet-based dosa offering calcium and slow-release carbs — ideal for diabetics and weight management diets.",
      nutrition: {
        Energy: "110 kcal",
        Carbohydrates: "18 g",
        Fat: "2 g",
        Sugar: "1 g",
        Sodium: "140 mg",
        Potassium: "120 mg",
        Calcium: "35 mg",
        Iron: "0.8 mg",
        VitaminA: "10 IU",
        VitaminC: "0.5 mg",
      },
      ingredients: [
        {
          title: "Batter:",
          list: [
            "1 cup ragi flour",
            "½ cup rice flour",
            "Salt to taste",
            "Water to make batter",
            "Oil for cooking",
          ],
        },
      ],
      procedure: [
        "Make batter of ragi and rice flour with water to dosa consistency.",
        "Season batter with salt and rest 10–15 minutes.",
        "Spread thin on hot tawa, drizzle oil and cook till crisp.",
        "Serve with chutney or sambar.",
      ],
      allowed: ["Diabetes", "Weight Management", "Anemia"],
    },

    // PACK 4
    {
      name: "Egg Curry",
      img: me10,
      imgSrc: me10,
      type: "nonveg",
      calories: "220 Cal",
      category: "NON-VEG",
      mealOfDay: "Lunch",
      region: "Universal",
      servings: 3,
      about:
        "Egg Curry is a classic dish of boiled eggs simmered in a spiced tomato-onion gravy. It's protein-rich, satiating and suitable for quick nutritious meals.",
      nutrition: {
        Energy: "220 kcal",
        Carbohydrates: "8 g",
        Fat: "14 g",
        Sugar: "3 g",
        Sodium: "280 mg",
        Potassium: "180 mg",
        Calcium: "30 mg",
        Iron: "1.8 mg",
        VitaminA: "150 IU",
        VitaminC: "4 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: [
            "6 boiled eggs",
            "2 onions finely chopped",
            "2 tomatoes pureed",
            "1 tsp ginger-garlic paste",
            "2 tbsp oil",
            "Salt & spices",
          ],
        },
      ],
      procedure: [
        "Heat oil, sauté onions until golden.",
        "Add ginger-garlic paste and sauté until raw smell disappears.",
        "Add tomato puree and cook until oil separates.",
        "Add spices and salt, mix well.",
        "Add water for desired consistency and bring to boil.",
        "Add boiled eggs and simmer for 5–7 minutes.",
        "Garnish and serve hot.",
      ],
      allowed: ["Post-workout", "Protein Supplement"],
    },

    {
      name: "Curd Rice",
      img: me11,
      imgSrc: me11,
      type: "veg",
      calories: "90 Cal",
      category: "LUNCH",
      mealOfDay: "Lunch",
      region: "South India",
      servings: 2,
      about:
        "Curd Rice is a cooling South Indian comfort dish of cooked rice mixed with yogurt and tempered spices. Excellent for digestion and soothing stomachs.",
      nutrition: {
        Energy: "90 kcal",
        Carbohydrates: "15 g",
        Fat: "1.5 g",
        Sugar: "2 g",
        Sodium: "110 mg",
        Potassium: "70 mg",
        Calcium: "60 mg",
        Iron: "0.3 mg",
        VitaminA: "6 IU",
        VitaminC: "0.2 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: [
            "1 cup cooked rice",
            "1 cup plain yogurt",
            "Salt to taste",
            "1 tsp oil",
            "1 tsp mustard seeds",
            "1 tsp urad dal",
            "Few curry leaves",
          ],
        },
      ],
      procedure: [
        "Mix cooked rice with yogurt and salt.",
        "Prepare tempering with oil, mustard seeds, urad dal and curry leaves.",
        "Pour tempering over curd rice, mix well.",
        "Serve chilled or at room temperature.",
      ],
      allowed: ["Indigestion", "Post-fever Diet", "Cooling Diets"],
    },

    {
      name: "Grilled Chicken Salad",
      img: me12,
      imgSrc: me12,
      type: "nonveg",
      calories: "200 Cal",
      category: "DINNER",
      mealOfDay: "Dinner",
      region: "Universal",
      servings: 2,
      about:
        "Grilled Chicken Salad provides lean protein and fresh vegetables for a balanced low-calorie meal. Great for weight loss and post-exercise recovery.",
      nutrition: {
        Energy: "200 kcal",
        Carbohydrates: "8 g",
        Fat: "9 g",
        Sugar: "4 g",
        Sodium: "220 mg",
        Potassium: "330 mg",
        Calcium: "30 mg",
        Iron: "1.2 mg",
        VitaminA: "420 IU",
        VitaminC: "22 mg",
      },
      ingredients: [
        {
          title: "Salad:",
          list: [
            "150 g grilled chicken strips",
            "2 cups mixed salad greens",
            "Cherry tomatoes",
            "Cucumber slices",
            "1 tbsp olive oil",
            "Salt & pepper, lemon juice",
          ],
        },
      ],
      procedure: [
        "Grill marinated chicken till cooked and slightly charred.",
        "Toss salad greens, tomatoes and cucumber.",
        "Add chicken, drizzle olive oil and lemon juice.",
        "Season and serve chilled.",
      ],
      allowed: ["Weight Loss", "Post-workout"],
    },

    // PACK 5
    {
      name: "Masala Khichdi",
      img: me13,
      imgSrc: me13,
      type: "veg",
      calories: "170 Cal",
      category: "LUNCH",
      mealOfDay: "Lunch",
      region: "Universal",
      servings: 3,
      about:
        "Masala Khichdi is a wholesome one-pot comfort meal of rice and lentils cooked with mild spices and vegetables. It is easily digestible and often recommended for convalescence.",
      nutrition: {
        Energy: "170 kcal",
        Carbohydrates: "28 g",
        Fat: "4 g",
        Sugar: "2 g",
        Sodium: "220 mg",
        Potassium: "210 mg",
        Calcium: "30 mg",
        Iron: "1.6 mg",
        VitaminA: "100 IU",
        VitaminC: "6 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: [
            "1 cup rice",
            "½ cup moong dal",
            "1 cup mixed vegetables",
            "1 tsp turmeric",
            "2 tbsp ghee or oil",
            "Salt to taste",
          ],
        },
      ],
      procedure: [
        "Wash rice and dal, drain.",
        "Heat ghee, add cumin and temper.",
        "Add vegetables and sauté for a few minutes.",
        "Add rice, dal, turmeric, salt and water.",
        "Cook until soft and mushy.",
        "Serve hot with ghee on top.",
      ],
      allowed: ["Convalescence", "Elderly Diets", "Light Digestion"],
    },

    {
      name: "Pasta Salad",
      img: me14,
      imgSrc: me14,
      type: "veg",
      calories: "145 Cal",
      category: "SNACKS",
      mealOfDay: "Snack",
      region: "Western",
      servings: 2,
      about:
        "Pasta Salad is a cold salad of cooked pasta tossed with vegetables, herbs and a light dressing. It's a good source of energy and works well as a meal on-the-go.",
      nutrition: {
        Energy: "145 kcal",
        Carbohydrates: "22 g",
        Fat: "4 g",
        Sugar: "3 g",
        Sodium: "200 mg",
        Potassium: "140 mg",
        Calcium: "10 mg",
        Iron: "0.6 mg",
        VitaminA: "50 IU",
        VitaminC: "5 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: [
            "1 cup cooked pasta",
            "1/2 cup chopped vegetables (bell pepper, cucumber, tomato)",
            "1 tbsp olive oil",
            "1 tsp lemon juice",
            "Salt & pepper",
          ],
        },
      ],
      procedure: [
        "Cook pasta al dente and cool under running water.",
        "Toss with chopped vegetables and dressing.",
        "Season and serve chilled or at room temperature.",
      ],
      allowed: ["Light Meals", "Picnic", "Travel"],
    },

    {
      name: "Lemon Detox Water",
      img: me15,
      imgSrc: me15,
      type: "veg",
      calories: "20 Cal",
      category: "DRINKS",
      mealOfDay: "Anytime",
      region: "Universal",
      servings: 1,
      about:
        "Lemon Detox Water is a hydrating, low-calorie drink made with lemon and water. It helps with hydration and provides a small boost of vitamin C.",
      nutrition: {
        Energy: "20 kcal",
        Carbohydrates: "5 g",
        Fat: "0 g",
        Sugar: "1 g",
        Sodium: "2 mg",
        Potassium: "40 mg",
        Calcium: "2 mg",
        Iron: "0.02 mg",
        VitaminA: "0 IU",
        VitaminC: "6 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: ["1 glass water", "Juice of ½ lemon", "A few mint leaves (optional)"],
        },
      ],
      procedure: [
        "Squeeze lemon into water.",
        "Add mint if desired and serve chilled.",
      ],
      allowed: ["Hydration", "Detox Support"],
    },

    // PACK 6
    {
      name: "Tomato Soup",
      img: me16,
      imgSrc: me16,
      type: "veg",
      calories: "75 Cal",
      category: "SOUPS",
      mealOfDay: "Starter",
      region: "Universal",
      servings: 2,
      about:
        "Tomato Soup is a comforting, tangy soup made from ripe tomatoes. It's rich in vitamin C and lycopene and works as a light starter or soothing meal.",
      nutrition: {
        Energy: "75 kcal",
        Carbohydrates: "12 g",
        Fat: "2 g",
        Sugar: "6 g",
        Sodium: "150 mg",
        Potassium: "250 mg",
        Calcium: "12 mg",
        Iron: "0.4 mg",
        VitaminA: "80 IU",
        VitaminC: "14 mg",
      },
      ingredients: [
        {
          title: "Main:",
          list: [
            "3–4 ripe tomatoes",
            "1 small onion",
            "1 tsp oil",
            "1 cup vegetable stock",
            "Salt & pepper",
          ],
        },
      ],
      procedure: [
        "Sauté onions till soft, add chopped tomatoes.",
        "Cook until tomatoes break down, add stock.",
        "Simmer 10 minutes and blend to smooth consistency.",
        "Strain if desired, season and serve hot.",
      ],
      allowed: ["Light Diets", "Cold Care"],
    },

    {
      name: "Fish Fry",
      img: me17,
      imgSrc: me17,
      type: "nonveg",
      calories: "260 Cal",
      category: "DINNER",
      mealOfDay: "Dinner",
      region: "Coastal",
      servings: 2,
      about:
        "Fish Fry is a crispy and flavorful dish where fish pieces are marinated with spices and shallow or deep fried. Rich in omega-3 fatty acids depending on the fish used.",
      nutrition: {
        Energy: "260 kcal",
        Carbohydrates: "6 g",
        Fat: "16 g",
        Sugar: "1 g",
        Sodium: "320 mg",
        Potassium: "320 mg",
        Calcium: "25 mg",
        Iron: "0.8 mg",
        VitaminA: "40 IU",
        VitaminC: "1 mg",
      },
      ingredients: [
        {
          title: "Marination:",
          list: [
            "300 g fish pieces",
            "1 tsp turmeric",
            "1 tsp red chilli powder",
            "1 tsp salt",
            "1 tbsp lemon juice",
          ],
        },
        {
          title: "For frying:",
          list: ["Oil for shallow frying", "Semolina or rice flour for coating"],
        },
      ],
      procedure: [
        "Marinate fish with spices and lemon juice for 15–20 minutes.",
        "Coat lightly with semolina or rice flour.",
        "Shallow fry until crisp and golden.",
        "Serve hot with lemon wedges.",
      ],
      allowed: ["Protein Rich Diets", "Post Workout"],
    },

    {
      name: "Chapati & Sabji",
      img: me18,
      imgSrc: me18,
      type: "veg",
      calories: "160 Cal",
      category: "LUNCH",
      mealOfDay: "Lunch",
      region: "North India",
      servings: 2,
      about:
        "Chapati with vegetable sabji is a balanced everyday Indian meal — whole-wheat chapatis served with a seasonal vegetable preparation. Good source of complex carbs, fiber and vitamins.",
      nutrition: {
        Energy: "160 kcal",
        Carbohydrates: "22 g",
        Fat: "4 g",
        Sugar: "3 g",
        Sodium: "210 mg",
        Potassium: "220 mg",
        Calcium: "20 mg",
        Iron: "1.2 mg",
        VitaminA: "70 IU",
        VitaminC: "8 mg",
      },
      ingredients: [
        {
          title: "Chapati:",
          list: ["1 cup whole wheat flour", "Water to knead", "Pinch of salt"],
        },
        {
          title: "Sabji:",
          list: [
            "2 cups mixed vegetables",
            "1 onion, 1 tomato",
            "1 tsp cumin seeds",
            "1 tsp turmeric",
            "2 tbsp oil",
          ],
        },
      ],
      procedure: [
        "Knead dough for chapati and rest for 15 minutes.",
        "Roll and cook chapatis on a hot tawa.",
        "Prepare sabji by tempering and cooking vegetables with spices.",
        "Serve chapati with hot sabji.",
      ],
      allowed: ["Daily Diets", "Balanced Meals"],
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [filterType, setFilterType] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredRecipes = allRecipes
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) =>
      selectedCategory === "ALL" ? true : item.category === selectedCategory
    )
    .filter((item) => (filterType === "ALL" ? true : item.type === filterType));

  const visibleRecipes = filteredRecipes.slice(0, visibleCount);

  return (
    <div className="foodDiet-page">
      <div className="breadcrumb">
        HOME / FOOD & DIET / <span className="active">RECIPES</span>
      </div>

      <h2 className="recipes-title">HEALTHY INDIAN RECIPES</h2>

      {/* SEARCH & FILTER */}
      <div className="search-filter-box">
        <input
          type="text"
          placeholder="Search recipes..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="veg">Veg Only</option>
          <option value="nonveg">Non-Veg</option>
        </select>
      </div>

      {/* CATEGORY BAR */}
      <div className="category-bar">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category-pill ${
              selectedCategory === cat.name ? "active-cat" : ""
            }`}
            style={{ backgroundColor: cat.color }}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.name}
          </div>
        ))}
      </div>

      {/* RECIPES GRID */}
      <div className="recipes-grid">
        {visibleRecipes.map((item, idx) => (
          <div
            className="recipe-box"
            key={idx}
            onClick={() =>
              navigate(`/food-diet/${encodeURIComponent(item.name)}`, {
                state: {
                  ...item,
                  imgSrc: item.img, // ensure image path is passed (no JSX)
                },
              })
            }
          >
            <div className="recipe-img-box">
              <img src={item.img} alt={item.name} className="img-fluid rounded mb-3" />
            </div>

            <div className="recipe-text-box">
              <span
                className={`vegMark ${item.type === "veg" ? "veg" : "nonveg"}`}
              ></span>
              <h4 className="recipe-title">{item.name}</h4>
              <p className="recipe-cal">{item.calories}</p>
              <a className="view-btn">VIEW RECIPE</a>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      {visibleCount < filteredRecipes.length && (
        <div className="load-more-box">
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount((prev) => prev + 8)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodDiet;
