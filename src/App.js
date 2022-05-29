import "./App.css";
import React, { Component } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pageSize = 5;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="General"
                pageSize={this.pageSize}
                country="in"
                categroy="general"
              />
            </Route>
            <Route exact path="/Science">
              <News
                setProgress={this.setProgress}
                key="Science"
                pageSize={this.pageSize}
                country="in"
                categroy="Science"
              />
            </Route>
            <Route exact path="/Sports">
              <News
                setProgress={this.setProgress}
                key="Sports"
                pageSize={this.pageSize}
                country="in"
                categroy="Sports"
              />
            </Route>
            <Route exact path="/Entertainment">
              <News
                setProgress={this.setProgress}
                key="Entertainment"
                pageSize={this.pageSize}
                country="in"
                categroy="Entertainment"
              />
            </Route>
            <Route exact path="/Business">
              <News
                setProgress={this.setProgress}
                key="Business"
                pageSize={this.pageSize}
                country="in"
                categroy="Business"
              />
            </Route>
            <Route exact path="/Health">
              <News
                setProgress={this.setProgress}
                key="Health"
                pageSize={this.pageSize}
                country="in"
                categroy="Health"
              />
            </Route>
            <Route exact path="/Technology">
              <News
                setProgress={this.setProgress}
                key="Technology"
                pageSize={this.pageSize}
                country="in"
                categroy="Technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
