import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
