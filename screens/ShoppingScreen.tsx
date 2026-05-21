import { View, StyleSheet, FlatList } from 'react-native';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ChecklistCard from '../components/ChecklistCard';

import { Recipe } from '../components/RecipeCard';
import { Ingredient } from '../components/IngredientCard';

interface ShoppingItem {
    ingredient: string,
    category: string,
    amount: { quantity: number, unit: string }[]
}


function ShoppingScreen() {
    const recipes: Recipe[] = useMemo(() => {
            try {
                return require('../assets/recipes.json');
            } catch (error) {
                console.error('Failed to load recipes:', error);
                return [];
            }
        }, []);
    const selectedRecipeIds  = useSelector((state: { selectedRecipes: { ids: number[] } }) => state.selectedRecipes.ids);

    const shoppingList: ShoppingItem[] = useMemo(() => {
        const itemMap = new Map<string, ShoppingItem>();
        
        recipes.forEach((recipe: Recipe) => {
            if (selectedRecipeIds.includes(recipe.id)) {
                recipe.ingredients.forEach((ingredient: Ingredient) => {
                    const key = ingredient.ingredient;
                    if (!itemMap.has(key)) {
                        itemMap.set(key, {
                            ingredient: ingredient.ingredient,
                            category: ingredient.category,
                            amount: [{quantity: ingredient.quantity, unit: ingredient.unit}]
                        });
                    } else {
                        const existingItem = itemMap.get(key);
                        existingItem?.amount.push({quantity: ingredient.quantity, unit: ingredient.unit});
                    }
                })
            }
        })

        return Array.from(itemMap.values()).sort((a, b) => {
            const A = a.category;
            const B = b.category;
            if (A < B) return -1
            if (A > B) return 1;
            return 0;
        })
    }, [selectedRecipeIds, recipes]);




    return (
        <View style={styles.root}>
            <FlatList 
                data={shoppingList}
                renderItem={({item}) => <ChecklistCard 
                    ingredient={item.ingredient}
                    category={item.category}
                    amounts={item.amount}
                />}
                keyExtractor={item => `${item.ingredient}-${item.category}`}
            
            />
        </View>
    );
}

export default ShoppingScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#711A00'
    }
})