import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import SwapiList from '../containers/swapi_list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <SearchBar />
        </MuiThemeProvider>
          <SwapiList />  
      </div>
    );
  }
}
