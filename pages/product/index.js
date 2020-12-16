import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigation } from '../../lib/types';
import { getProduct } from '../../state/modules/productDetails/actions';
import styles from './styles';
import Table from './components/table';


const ProductDetails = ({ navigation, product, tagId, loadProduct }) => {

  useEffect(() => {
    !product && loadProduct('x-9Jl16n7YRUbn9E');
  });

  return (
    <SafeAreaView style={styles.container}>
      { product
        ? <View style={styles.container}>
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
        </View>
        : <View style={styles.loading}>
            <Text style={styles.loadingText}>Loading...</Text>
            <ActivityIndicator size="large" />
        </View>}
    </SafeAreaView>
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

export default connect(
  mapStateToProps,
  { loadProduct: getProduct })(ProductDetails);
