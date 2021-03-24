import React, { Component } from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>UserHeader</div>;
  }
}

export default connect(null, { fetchUser })(UserHeader);
