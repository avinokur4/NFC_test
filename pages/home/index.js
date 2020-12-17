import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Types } from '../../lib';
import NfcManager, { NfcEvents, Ndef } from 'react-native-nfc-manager';

import styles from './styles';
import { login } from '../../state/modules/signIn/actions';
import { getProduct } from '../../state/modules/productDetails/actions';
import Button from '../../components/button';

class Home extends Component {

  componentDidMount() {
    const { navigation, signIn } = this.props;

    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      let uri = this._parseUri(tag);
      navigation.navigate('Product');
      signIn(uri);

      NfcManager.setAlertMessageIOS('I got your tag!');
      this.cancel();
    });
  }

  componentWillUnmount() {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    this.cancel();
  }

  render() {
    return (
      <SafeAreaView style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selinko Tech Demo</Text>
        </View>
        <Button
          text='Authorize'
          onPress={()=>this.test_read()}
        />

      </SafeAreaView>
    )
  }

  cancel = () => {
    NfcManager.unregisterTagEvent().catch(() => 0);
  }

  test_read = async () => {
    try {
      await NfcManager.registerTagEvent();
    } catch (ex) {
      console.warn('ex', ex);
      this.setState({ ...this.state, error: ex });
      this.cancel();
    }
  }

  _parseUri = (tag) => {
    try {
      if (Ndef.isType(tag.ndefMessage[0], Ndef.TNF_WELL_KNOWN, Ndef.RTD_URI)) {
        return Ndef.uri.decodePayload(tag.ndefMessage[0].payload);
      }
    } catch (e) {
      console.error(e);
    }
    return null;
  }
}

Home.propTypes = {
  navigation: Types.Navigation.isRequired,
  signIn: PropTypes.func.isRequired,
};

Home.defaultProps = {
  token: '',
};

const mapStateToProps = ({ signIn }) => ({
  token: signIn.token,
});

export default connect(
  mapStateToProps,
  { signIn: login, loadProduct: getProduct }
)(Home);