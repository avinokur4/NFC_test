import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from '../../lib/types';
import { getProduct } from '../../state/modules/productDetails/actions';
import styles from './styles';


const ProductDetails = ({ navigation, tagId }) => {

  useEffect(() => {
    loadProduct(tagId);
  });
  debugger;

  console.log('product');
  return (
    product 
    ? <View style={styles.container}>
      <Text>Product loaded</Text>
    </View>
    : < View style={styles.container}>
      <Text>Product loading...</Text>
    </View>
  );
};

ProductDetails.propTypes = {
  navigation: Navigation.isRequired,
};

const mapStateToProps = ({ signIn, productDetails }) => ({
  tagId: signIn.tagUuid,
  product: productDetails.product,
  error: productDetails.error,
});

export default connect(() =>
  mapStateToProps,
{ loadProduct: getProduct })(ProductDetails);
