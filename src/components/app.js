import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import SwapiList from '../containers/swapi_list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarSW from './app_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBarSW />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <SearchBar />
        </MuiThemeProvider>
          <SwapiList />
      </div>
    );
  }
}
