import { StyleSheet, View, Text } from "react-native";

import format_ingredients from '../utils/utils'

type Props = {
    ingredients: Ingredient[]
}

export interface Ingredient {
    ingredient: string,
    category: string,
    unit: string,
    quantity: string | number,
    modifiers: string[]
}

function IngredientCard({ingredients}: Props) {
    return (
        <View>
            {ingredients.map((ingredient) => {
                return (
                    <Text 
                        style={styles.text} 
                        key={ingredient.ingredient}>{format_ingredients(ingredient)}
                    </Text>
                )
            })}
        </View>
    )
}

export default IngredientCard;

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})