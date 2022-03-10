import React from "react";
import { withTheme } from "styled-components";
import { StyledButton } from "./styles";

class NewButton extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
  }
  clicked() {
    this.props.handleClick();
  }
  render() {
    return (
      <StyledButton
        onClick={() => this.clicked()}
        fullWidth={this.props.fullWidth}
        inverse={this.props.inverse}
        color={this.props.color}
      >
        {this.props.text}
      </StyledButton>
    );
  }
}

export default withTheme(NewButton);
