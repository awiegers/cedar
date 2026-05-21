import { configureStore } from '@reduxjs/toolkit'
import SelectedRecipesReducer from './shoppingList'



export const store = configureStore({
    reducer: {
        selectedRecipes: SelectedRecipesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch