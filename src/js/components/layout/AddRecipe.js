import React from "react";

import AddRecipeForm from "./AddRecipeForm";

export default class AddRecipe extends React.Component {
  constructor() {
    super()
    this.state = {
     hideAddRecipe: true,
    };
  }

  collapsedForm() {
    const hideAddRecipe = !this.state.hideAddRecipe;
    this.setState({hideAddRecipe});
  }

  render() {
    const addRecipeStyle = {
      marginTop: "40px",
      marginBottom: "20px",
    };

    const {hideAddRecipe} = this.state;
    const addRecipeClass = hideAddRecipe ? "collapse" : "";

    return (  
      <div style={addRecipeStyle}>
        <a class="btn-default" onClick={this.collapsedForm.bind(this)}>Add new recipe to collection</a>
        <div class={"addRecipe-collapse " + addRecipeClass} id="addRecipeForm">
          <AddRecipeForm />          
        </div>
      </div>
      
    );
  }
}
