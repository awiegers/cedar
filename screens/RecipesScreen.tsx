import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import RecipeCard, { Recipe } from '../components/RecipeCard';
import { useMemo } from 'react';
import ServingCount from '../components/ServingCount';


function RecipesScreen() {
    const recipes: Recipe[] = useMemo(() => {
        try {
            return require('../assets/recipes.json');
        } catch (error) {
            console.error('Failed to load recipes:', error);
            return [];
        }
    }, []);

    const selectedRecipeIds  = useSelector((state: { selectedRecipes: { ids: number[] } }) => state.selectedRecipes.ids);

    const servingCount = useMemo(() => {
        return recipes.reduce((total: number, recipe: {id: number, servings: number}) => {
            return selectedRecipeIds.includes(recipe.id) ? total + recipe.servings : total;
        }, 0);
    }, [selectedRecipeIds, recipes]);

    return (
        <View style={styles.container}>
            <FlatList 
                data={recipes}
                renderItem={({item}) => <RecipeCard recipe={item} />}
                keyExtractor={item => item.id}
                ListFooterComponent={<View style={{padding: 30}}></View>}
            />
            <View style={styles.servingCount}>
                <ServingCount servingCount={servingCount} />
            </View>
        </View>
    );
}

export default RecipesScreen;

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#711A00',
    },
    servingCount: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0, 
        padding: 10,
        backgroundColor: '#711A00',
    }
}