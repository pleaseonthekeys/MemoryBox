import React from "react";
import Login from "./login";
import Memories from "./memories";

class App extends React.Component {
  render() {
    return (
      <>
        <Login />
        <Memories />
      </>
    );
  }
}

export default App;
