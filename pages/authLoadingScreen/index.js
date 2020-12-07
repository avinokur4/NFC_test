import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import i18n from 'i18n-js';
import { StackActions } from 'react-navigation';
import { Types } from '../../lib';
import { loadMe } from '../../state/modules/user';
import { CURR_LANG, USER_TOKEN } from '../../storageKeys';

class AuthLoadingScreen extends Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  // eslint-disable-next-line complexity
  bootstrapAsync = async () => {
    const { getMe, navigation } = this.props;
    await getMe().then(value => console.log(value));
    const { me } = this.props;
    const userToken = await AsyncStorage.getItem(USER_TOKEN);
    const language = await AsyncStorage.getItem(CURR_LANG);
    if (language == null) {
      i18n.locale = 'ru';
    } else {
      i18n.locale = language;
    }
    if (me && me.email && userToken) {
      navigation.navigate('Root');
      const resetAction = StackActions.reset({
        index: 0,
        actions: [StackActions.push({ routeName: 'Root' })],
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      navigation.navigate('Auth');
    }
  };

  render() {
    return (<View></View>);
  }
}

AuthLoadingScreen.propTypes = {
  navigation: Types.Navigation.isRequired,
  getMe: PropTypes.func.isRequired,
  me: PropTypes.shape(Object).isRequired,
};

const mapStateToProps = ({ user }) => ({
  me: user.user,
});

export default connect(() =>
  mapStateToProps,
{ getMe: loadMe })(AuthLoadingScreen);
