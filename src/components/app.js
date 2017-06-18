import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import SwapiList from '../containers/swapi_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SwapiList />
      </div>
    );
  }
}
