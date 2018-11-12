import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { header } = this.props;

    return (
      <h1>{header}</h1>
    );
  }
}

App.propTypes = {
  header: PropTypes.string,
};

App.defaultProps = {
  header: 'React Boiler',
};

export default App;
