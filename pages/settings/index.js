import React from 'react';
import { View } from 'react-native';
import { Navigation } from '../../lib/types';
import styles from './styles';


const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
    </View>
  );
};

Settings.propTypes = {
  navigation: Navigation.isRequired,
};

export default Settings;
