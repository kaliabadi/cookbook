import React from "react";

import Recipe from "../components/Recipe";
import RecipeStore from "../stores/RecipeStore";

export default class Featured extends React.Component {
  constructor() {
    super();
    this.state = {
      featuredRecipes: RecipeStore.getFeaturedRecipes(),
    };
  }

  render() {
    const featuredStyles = {
      textAlign: "center",
    }

    const { featuredRecipes } = this.state;

    const RecipeComponents = featuredRecipes.map((recipe) => {
      return <Recipe key={recipe.id} {...recipe}/>;
    })

    return (
      <div>
        <h1 style={featuredStyles}>
          Featured Recipes
        </h1>

        <div class="row">{RecipeComponents}</div>
      </div>
    );
  }
}
