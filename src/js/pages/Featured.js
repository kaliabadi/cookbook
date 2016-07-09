import React from "react";

import Recipe from "../components/Recipe";

export default class Featured extends React.Component {
  render() {
    const featuredStyles = {
      textAlign: "center",
    }

    const Recipes = [
      "recipe1",
    ].map((title, i) => <Recipe key={i} title={title}/> );

    return (
      <div>
        <h1 style={featuredStyles}>
          Featured Recipes
        </h1>

        <div class="row">{Recipes}</div>
      </div>
    );
  }
}
