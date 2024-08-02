import React from 'react';
import { View, Text, Button } from 'react-native';

const CartItem = ({ item, onRemove }) => {
  return (
    <View>
      <Text>{item.name} - ${item.price}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Button title="Remove" onPress={() => onRemove(item.id)} />
    </View>
  );
};

export default CartItem;