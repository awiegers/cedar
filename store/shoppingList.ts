import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const shoppingListSlice = createSlice({
    name: 'SelectedRecipes',
    initialState: { 
        ids: [] as string[]
    },
    reducers: {
        addRecipe: (state, action) => {
            state.ids.push(action.payload);
        },
        removeRecipe: (state, action: PayloadAction<string>) => {
            state.ids.splice(state.ids.indexOf(action.payload), 1);
        }
    }
})

export const { addRecipe, removeRecipe } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;