import React from "react";
import Hello from "./sub-components/Hello";
import Parent from "./sub-components/Parent";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <Parent style={styles}>
        <Hello name="abc" />
        <Hello name="abcd" />
      </Parent>
    );
  }
}

export default App;
