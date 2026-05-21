import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import IngredientCard, { Ingredient } from './IngredientCard';
import { addRecipe, removeRecipe} from '../store/shoppingList';

type Props = {
    recipe: Recipe
}

export interface Recipe {
    id: string,
    title: string,
    servings: number,
    ingredients: Ingredient[],
    category: string
}

function RecipeCard({recipe}: Props) {
    const selectedRecipeIds  = useSelector((state: { selectedRecipes: { ids: string[] } }) => state.selectedRecipes.ids);
    const dispatch = useDispatch();

    const selectedRecipe = selectedRecipeIds.includes(recipe.id);

    function changeSelectedRecipes() {
        if (selectedRecipe) {
            dispatch(removeRecipe(recipe.id));
        } else {
            dispatch(addRecipe(recipe.id));
        }
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={changeSelectedRecipes}
            >
                <Text style={styles.titleText}>{recipe.title} {
                    selectedRecipe ? 
                        <Ionicons name="checkmark" size={20} color="white" /> : 
                        <Ionicons name="add" size={20} color="white" />}
                </Text>
                <Text style={styles.text}>Servings: {recipe.servings}</Text>
                <IngredientCard ingredients={recipe.ingredients} />
            </Pressable>
        </View>
    )
}

export default RecipeCard;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#711A00',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    text: {
        fontSize: 14,
        color: 'white'
    }
})