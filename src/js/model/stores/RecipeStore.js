import { EventEmitter } from "events";

import dispatcher from "../../dispatcher";

class RecipeStore extends EventEmitter {
  constructor() {
    super()
    this.featuredRecipes = [];
    this.recipes = [
      {
        id: 11311231,
        title: "recipe1",
        ingredients: "some ingredients",
        featured: true
      },
      {
        id: 11311232,
        title: "recipe2",
        ingredients: "some ingredients2",
        featured: true
      },
    ];
  }

  createRecipe(title, ingredients) {
    const id = Date.now();

    this.recipes.push({
      id,
      title,
      ingredients,
    });

    this.emit("change");
  }

  getAll() {
    return this.recipes;
  }

  getFeaturedRecipes() {
    for(var recipe in this.recipes) {
      let featuredRecipeItem = this.recipes[recipe];
      if (featuredRecipeItem.featured === true) {
        this.featuredRecipes.push(featuredRecipeItem);
      }
    }
    return this.featuredRecipes;
  }
  

  handleActions(action) {
    switch(action.type) {
      case "CREATE_RECIPE": {
        this.createRecipe(action.title, action.ingredients);
        break;
      }
      case "RECEIVE_RECIPES": {
        this.recipes = action.recipes;
        this.emit("change");
        break;
      }
    }
  }

}

const recipeStore = new RecipeStore;
dispatcher.register(recipeStore.handleActions.bind(recipeStore));
window.dispatcher = dispatcher;

export default recipeStore;
