import React from "react";
import "./App.css";
import AllPosts from "./AllPosts";
import Boasts from "./Boasts";
import Roasts from "./Roasts";
import Popular from "./Popular";
import CreatePost from "./CreatePost";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <AllPosts />} />
          <Route exact path="/boasts" render={(props) => <Boasts />} />
          <Route exact path="/roasts" render={(props) => <Roasts />} />
          <Route exact path="/popular" render={(props) => <Popular />} />
          <Route exact path="/create" render={(props) => <CreatePost />} />
        </Switch>
      </div>
    );
  }
}

export default App;
