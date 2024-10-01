import Recipe from '../models/Recipe.js';

class RecipeController {
  static async getByID(req, res, next) {
    try {
      const id = req.params.id;
      const result = await Recipe.getRecipeById(id);
      res.json(result);
    } catch (error) {
      console.log(error.message);
    }
    next();
  }
  static async getAllRecipes(_req, res, next) {
    try {
      const result = await Recipe.getRecipes();
      res.json(result);
    } catch (error) {
      console.log(error.message);
    }
    next();
  }

  static async createRecipe(req, res, next) {
    try {
      const titre = req.body.titre;
      const ingredients = req.body.ingredients;
      const type = req.body.type;
      await Recipe.createRecipe(titre, ingredients, type);
      res.json('Added successfully');
    } catch (error) {
      console.log(error.message);
    }
    next();
  }

  static async deleteRecipe(req, res, next) {
    try {
      const id = req.params.id;
      await Recipe.delRecipe(id);
      res.json('Deleted successfully');
    } catch (error) {
      console.log(error.message);
    }
    next();
  }

  static async updateRecipe(req, res, next) {
    try {
      const id = req.params.id;
      const titre = req.body.titre;
      const ingredients = req.body.ingredients;
      const type = req.body.type;
      await Recipe.editRecipe(id, titre, ingredients, type);
      res.json('Updated successfully');
    } catch (error) {
      console.log(error.message);
    }
    next();
  }
}

export default RecipeController;
