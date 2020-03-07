import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  // called after constructor and before mounting this component
  // onto the browser
  componentDidMount() {
    // request to the url
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
  }

  // Lexical scoping
  // Arrow functions are automatically binded in the place from which
  // they were defined
  handleChange = e => this.setState({ searchField: e.target.value });

  // This method is called every time setState is called
  render() {
    // Object destructuring
    const { monsters, searchField } = this.state;
    // Filtering based on the passed string in search bar
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
