import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { Colors } from "../../constants/Colors";

type ProductItemProps = {
  title: string;
  price: number;
  image: string;
  onViewDetail: () => void;
  onAddToCart: () => void;
};

const ProductItem = ({
  title,
  price,
  image,
  onViewDetail,
  onAddToCart,
}: ProductItemProps) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableComponent onPress={onViewDetail}>
          <View>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>

            <View style={styles.infos}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.price}>{price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title="View Details"
                onPress={onViewDetail}
              />
              <Button
                color={Colors.primary}
                title="Add to Cart"
                onPress={onAddToCart}
              />
            </View>
          </View>
        </TouchableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "60%",
    width: "100%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    paddingHorizontal: 15,
  },
  infos: {
    height: "25%",
    padding: 10,
  },
});

export default ProductItem;
