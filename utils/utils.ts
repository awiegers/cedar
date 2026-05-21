
import { Ingredient } from "../components/IngredientCard";

export default function format_ingredients(ingredient: Ingredient): string {
    let modifiers: string = "";
    if (ingredient?.modifiers?.length !== 0) {
        modifiers = ingredient?.modifiers?.join(', ')
    }
    return `${ingredient.quantity} ${ingredient.unit} ${ingredient.ingredient} ${modifiers}`
}