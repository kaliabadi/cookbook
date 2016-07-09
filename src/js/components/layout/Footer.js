import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      position: "fixed",
      bottom: "10px",
      marginRight: "auto",
    };

    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <p>Cookbook footer</p>
          </div>
        </div>
      </footer>
    );
  }
}
