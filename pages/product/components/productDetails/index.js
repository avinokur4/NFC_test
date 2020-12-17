import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Table from '../../components/table';
import Button from '../../../../components/button';
import styles from './styles';


const ProductDetails = ({ product }) => {

  return (
    <View style={styles.container}>
      <Text numberOfLines={2}
        ellipsizeMode='head'
        style={styles.title}
      >
        {product.name}
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: product.product_image_url,
        }}
      />
      <Table datasheet={product.datasheet.data} />
      <Button
        text='Back'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetails;
