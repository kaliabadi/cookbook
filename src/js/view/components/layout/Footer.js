import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      paddingLeft: "20px"
    };

    return (
      <div class="footer navbar-fixed-bottom" style={footerStyles}>
        <p>If any issues please contact: kaliabadi@qaworks.com</p>
        <div class="footer">
          <p>Copyright (c) 2016</p>
      </div>
</div>
    );
  }
}
