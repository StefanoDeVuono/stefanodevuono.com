import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    const { location } = props,
          routes = { '/bio': 0, '/skills': 1, '/blog': 2 },
          value = routes[location.pathname];

    this.state = { value };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          // indicatorColor="secondary"
          textColor="inherit"
          centered
          fullWidth
        >
          <Tab component={Link} to="/bio" label="Bio" />
          <Tab component={Link} to="/skills" label="Skills" />
          <Tab component={Link} to="/blog" label="Blog" />
        </Tabs>
      </Paper>
    )
  }
}

export default withRouter((Header))
