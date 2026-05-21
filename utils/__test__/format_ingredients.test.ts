import  format_ingredients  from "../utils";

describe('format_ingredients', () => {
    it('formats ingredients correctly', () => {
        const ingredient = {
            ingredient: "flour",
            quantity: 2,
            unit: "cups",
            modifiers: ["sifted", "all-purpose"]
        }
        expect(format_ingredients(ingredient)).toBe("2 cups flour sifted, all-purpose");
    })
})