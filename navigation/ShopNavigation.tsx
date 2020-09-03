import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/shop/Home";
import OrdersScreen from "../screens/shop/OrdersScreen";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const Stack = createStackNavigator();

const ShopNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Orders"
            component={OrdersScreen}
            options={{ title: "Orders" }}
          />
          <Stack.Screen
            name="Products"
            component={ProductsOverviewScreen}
            options={{ title: "Products" }}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={({ route }) => ({ title: route.params.productTitle })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default ShopNavigation;
