import React from "react";

export default class Recipe extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const { title, ingredients,} = this.props;
    const recipeStyles = {
      position: "relative",
    };

    return (
      <div class="col-md-4" style={recipeStyles}>
        <h4>{title}</h4>
        <p>{ingredients}</p>
      </div>
    );
  }
}
