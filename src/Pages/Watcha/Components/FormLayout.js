import { Component } from "react";

export default class FormLayout extends Component {
  render() {
    return (
      <div className="Form">
        <header>
          <div className="logo" />
        </header>
        {this.props.children}
      </div>
    );
  }
}
