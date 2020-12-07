import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadMe } from '../../state/modules/user';

import styles from './styles';

class Profile extends Component {
  async componentDidMount() {
    const { getMe } = this.props;
    await getMe();
  }

  render() {
    return (<View><Text>sjkdfhkjlsahdfjkshadkjlfghsakdjh</Text></View>);
  }
}

Profile.propTypes = {
  me: PropTypes.shape().isRequired,
  getMe: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  me: user.user,
});

export default connect(() =>
  mapStateToProps,
{ getMe: loadMe })(Profile);
