import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Orders"
        onPress={() => navigation.navigate("Orders")}
      />
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("Products")}
      />
    </View>
  );
};

export default Home;
