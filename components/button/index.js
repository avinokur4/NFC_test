import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const Button = ({ text, onPress }) => {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
