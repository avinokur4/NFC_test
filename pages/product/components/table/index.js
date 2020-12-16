import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const Table = ({ datasheet }) => {

  return (
    <View style={styles.description}>
      {datasheet.map(item =>
        <View style={styles.description_item}>
          <Text style={styles.label}>{item.label}</Text>
          <Text
            numberOfLines={3}
            ellipsizeMode='head'
            style={styles.value}>{item.value}</Text>
        </View>
      )}
    </View>
  );
};

Table.propTypes = {
  datasheet: PropTypes.object.isRequired,
};

export default Table;
