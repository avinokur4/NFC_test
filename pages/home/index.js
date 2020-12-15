import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Types } from '../../lib';
import NfcManager, { NfcEvents, Ndef } from 'react-native-nfc-manager';

import styles from './styles';
import { login } from '../../state/modules/signIn/actions';

class Home extends Component {

  componentDidMount() {
    const { tagId, navigation, signIn } = this.props;
    if(!!tagId){
      navigation.push('ProductDetails');
    }
    
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      console.warn('tag', tag);
      let uri = this._parseUri(tag);
      navigation.push('ProductDetails');
      signIn(uri);
      

      NfcManager.setAlertMessageIOS('I got your tag!');
      this._cancel();
    });
  }

  componentWillUnmount() {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    this._cancel();
  }

  render() {
    debugger;
    return (
      <SafeAreaView style={styles.content}>
        <Text style={styles.title}>NFC Tech Demo</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this._test_read}
        >
          <Text>Authorize</Text>
        </TouchableOpacity>
        
      </SafeAreaView>
    )
  }

  _cancel = () => {
    NfcManager.unregisterTagEvent().catch(() => 0);
  }

  _test_read = async () => {
    try {
      await NfcManager.registerTagEvent();
    } catch (ex) {
      console.warn('ex', ex);
      this.setState({ ...this.state, error: ex });
      this._cancel();
    }
  }

  _parseUri = (tag) => {
    try {
        if (Ndef.isType(tag.ndefMessage[0], Ndef.TNF_WELL_KNOWN, Ndef.RTD_URI)) {
            return Ndef.uri.decodePayload(tag.ndefMessage[0].payload);
        }
    } catch (e) {
        console.log(e);
    }
    return null;
  }
}

Home.propTypes = {
  navigation: Types.Navigation.isRequired,
  signIn: PropTypes.func.isRequired,
};

Home.defaultProps = {
  tagId: '',
};

const mapStateToProps = ({ signIn }) => ({
  tagId: signIn.tagUuid,
});

export default connect(mapStateToProps, { signIn: login })(Home);