import React from "react";

import Recipe from "../components/Recipe";
import AddRecipe from "../components/layout/AddRecipe";
import * as RecipeActions from "../actions/RecipeActions"
import RecipeStore from "../stores/RecipeStore";

export default class MyRecipes extends React.Component {
  constructor() {
    super();
    this.getRecipes = this.getRecipes.bind(this);
    this.state = {
      recipes: RecipeStore.getAll(),
    };
  }

  componentWillMount() {
    RecipeStore.on("change", this.getRecipes);
  }
  
  componentWillUnmount() {
    RecipeStore.removeListener("change", this.getRecipes);
  }

  getRecipes() {
    this.setState({
      recipes: RecipeStore.getAll(),
    })
  }

  reloadRecipes() {
    RecipeActions.reloadRecipes();
  }

  render() {
    const { recipes } = this.state;

    const RecipeComponents = recipes.map((recipe) => {
      return <Recipe key={recipe.id} {...recipe}/>;
    })

    return (
      <div>
        <h1>MyRecipes</h1>
        <button onClick={this.reloadRecipes.bind(this)}>Reload!</button>
        <AddRecipe />
        <ul>{RecipeComponents}</ul>
      </div>
    );
  }
}
