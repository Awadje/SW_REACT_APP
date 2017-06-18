import React, { Component } from 'react';
import { connect } from 'react-redux';

class SwapiList extends Component {
  renderSwapi(swapiData) {
    return (

      <tr>
        <td>{swapiData.name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
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
