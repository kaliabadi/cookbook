import React from "react";

import * as RecipeActions from "../../actions/RecipeActions"
import RecipeStore from "../../stores/RecipeStore";

export default class Footer extends React.Component {
  saveRecipe() {
    const recipeTitle = document.getElementById('formRecipeName').value;
    const recipeIngredients = document.getElementById('formRecipeIngredients').value;

    RecipeActions.createRecipe(recipeTitle, recipeIngredients);
  }

  render() {
    const formStyle = {
      marginTop: "30px",
      marginBottom: "20px",
    };

    return (
      <div>
        <form style={formStyle}>
          <fieldset class="form-group">
            <label for="formRecipeName">Recipe Name</label>
            <input type="text" class="form-control" id="formRecipeName" placeholder="Please enter your recipe name here." />
          </fieldset>
          <fieldset class="form-group">
            <label for="formRecipeIngredients">Please list your ingredients here</label>
            <input type="text" class="form-control" id="formRecipeIngredients" placeholder="List your ingredients here" />
          </fieldset>
        </form>
        <a class="btn" onClick={this.saveRecipe.bind(this)}>Save recipe</a>
      </div>
    );
  }
}
