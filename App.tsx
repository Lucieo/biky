import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import store from "./store";
import Home from "./screens/shop/Home";
import OrdersScreen from "./screens/shop/OrdersScreen";
import ShopNavigation from "./navigation/ShopNavigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
