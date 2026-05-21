# Cedar

Cedar is a simple recipe-to-shopping-list mobile application focused on ease of use and simplicity.

Built with React Native and Expo, Cedar allows users to browse recipes and quickly generate shopping lists based on selected meals.

## Features

- Simple and clean mobile UI
- Browse and select recipes
- Automatically generate shopping lists from recipe ingredients
- Lightweight and easy to extend
- Built with React Native + Expo

## Tech Stack

- React Native
- Expo
- JavaScript / TypeScript

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- Expo CLI

# Required recipe.json file
The application depends on a `recipe.json` file that is intentionally excluded from the repository. You must provide your own `recipe.json` file to use the app. The file must go in the assets directory and have the following structure:

```json
[
    {
        "title": "Recipe 1",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "ingredient 1",
                "quantity": 1,
                "unit": "Tbsp",
                "category": "produce"
            },
            {
                "ingredient": "ingredient 2",
                "quantity": 0.5,
                "unit": "each",
                "category": "produce"
            },
            {
                "ingredient": "ingredient 3",
                "quantity": 1.5,
                "unit": "lb",
                "category": "meat"
            },
        ],
        "id": "2f52ab0a-3889-11f1-a8ce-0e0e97172a05"
    },
    {
        "title": "Recipe 2",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "ingredient 1",
                "quantity": 2,
                "unit": "tablespoons",
                "category": "baking"
            },
        ],
        "id": "2f52ab1e-3889-11f1-a8ce-0e0e97172a05"
    }
]
```

The items are sorted by category, the category is intended to indicate a section of a grocery store so that items grouped together on the list are near eachother in the store.

# Using the app
You can use the app on your mobile device through Expo Go by following the setup at https://docs.expo.dev/
