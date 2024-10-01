import Recipe from '../src/models/Recipe.js';

describe('Recipe tests', () => {
  it('can get all recipes', async () => {
    try {
      const result = await Recipe.getRecipes();
      expect(result).not.toEqual([]);
    } catch (error) {
      console.log(error.message);
    }
  });

  it('can create recipe', async () => {
    try {
      const recipe = {
        titre: 'Crepes',
        type: 'dessert',
        ingredients: 'farine, oeuf, lait',
      };
      const result = await Recipe.createRecipe(
        recipe.titre,
        recipe.ingredients,
        recipe.type
      );
      expect(result).toBe(true);
    } catch (error) {
      console.log(error.message);
    }
  });

  it("can't create recipe", async () => {
    try {
      const recipe = {
        titre: null,
        type: 'dessert',
        ingredients: 'farine, oeuf, lait',
      };
      const result = await Recipe.createRecipe(
        recipe.titre,
        recipe.ingredients,
        recipe.type
      );
      expect(result).toBe(false);
    } catch (error) {
      console.log(error.message);
    }
  });

  it('can update recipe', async () => {
    try {
      const updatedRecipe = {
        titre: 'Pancakes',
        type: 'dessert',
        ingredients: 'farine, sucre, oeuf, lait',
      };
      const updateResult = await Recipe.editRecipe(
        2,
        updatedRecipe.titre,
        updatedRecipe.ingredients,
        updatedRecipe.type
      );

      expect(updateResult).toBe(true);
    } catch (error) {
      console.log(error.message);
    }
  });

  it("can't update recipe", async () => {
    try {
      const updatedRecipe = {
        titre: 'Gâteau',
        type: 'dessert',
        ingredients: null,
      };

      const updateResult = await Recipe.editRecipe(
        6,
        updatedRecipe.titre,
        updatedRecipe.ingredients,
        updatedRecipe.type
      );

      expect(updateResult).toBe(false);
    } catch (error) {
      console.log(error.message);
    }
  });

  it('can delete recipe', async () => {
    try {
      const result = await Recipe.delRecipe(6);
      expect(result).toBe(true);
    } catch (error) {
      console.log(error.message);
    }
  });
});
