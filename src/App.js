import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./ContactsList";
import Forms from "./form";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     List : []
    };
  }
  save = obj => {
    this.setState({
      List: [...this.state.List, obj]
    });
  };
  delete = index => {
    this.setState({
      List: [
        ...this.state.List.slice(0, index),
        ...this.state.List.slice(index + 1)
      ]
    });
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            path="/"
            render={props => (
              <Contact
                {...props}
                List={this.state.List}
                delete={this.delete}
              />
            )}
            exact
          />
          <Route
            path="/add"
            render={props => (
              <Forms {...props} save={this.save} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
