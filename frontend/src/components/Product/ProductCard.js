import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => onAddToCart(product)} />
    </View>
  );
};

export default ProductCard;