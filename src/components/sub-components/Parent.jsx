import React from "react";

// const Hello = ({ name, newProp }) => <h1>Hello {name} and {newProp}!</h1>;

export default class Parent extends React.Component {
  render() {
    const { styles, children } = this.props;
    const newProp = "Codesandbox";
    return (
      <div style={styles}>
        {React.Children.map(children, child => {
          console.log(child);
          return React.cloneElement(child, { newProp }, null);
        })}
      </div>
    );
  }
}
