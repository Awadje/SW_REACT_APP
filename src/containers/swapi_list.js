import React, { Component } from 'react';
import { connect } from 'react-redux';
var request = require('superagent');
import ReactGiphy from  'react-giphy';


class SwapiList extends Component {
  renderSwapi(swapiData) {
    const name = swapiData.name;
    const birth_year = swapiData.birth_year;
    const height = swapiData.height;
    const mass = swapiData.mass;

    return (
      <tr key={name}>
        <td> {name} </td>
        <td> <ReactGiphy tag={name} /> </td>
        <td> {birth_year} </td>
        <td> {height}(cm) </td>
        <td> {mass}(kg) </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Birth Year</th>
            <th>Height</th>
            <th>Mass</th>
          </tr>
        </thead>
        <tbody>
          {this.props.swapi.map(this.renderSwapi)}

        </tbody>
      </table>

    )
  }
}

function mapStateToProps({ swapi }) {
  return { swapi };

}

export default connect(mapStateToProps)(SwapiList);
