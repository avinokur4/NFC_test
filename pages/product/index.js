import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigation } from '../../lib/types';
import { getProduct } from '../../state/modules/productDetails/actions';
import Button from '../../components/button';
import jwt_decode from "jwt-decode";

import styles from './styles';
import ProductDetails from './components/productDetails';


const Product = ({ navigation, product, token, loadProduct }) => {

  useEffect(() => {
    if (token && !product) {
      var decoded = jwt_decode(token);
      loadProduct(decoded.data.tag_uuid);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      {token
        ? product
          ? <ProductDetails
            product={product}
          />
          : <View style={styles.centerContainer}>
            <Text style={styles.centerContainerText}>Loading...</Text>
            <ActivityIndicator size="large" />
          </View>
        : <View style={styles.centerContainer}>
          <Text style={styles.centerContainerText}>Product not recognized</Text>
          <Button
            text='Back'
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      }
    </SafeAreaView>
  );
};

Product.propTypes = {
  navigation: Navigation.isRequired,
  loadProduct: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  product: PropTypes.object
};

Product.defaultProps = {
  product: undefined,
};

const mapStateToProps = ({ signIn, productDetails }) => ({
  token: signIn.token,
  product: productDetails.product,
  error: productDetails.error,
});

export default connect(
  mapStateToProps,
  { loadProduct: getProduct })(Product);
