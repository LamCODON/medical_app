import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OverView from "../Health/OverView";
import Weight from "../Health/Weight";
import Height from  "../Health/Height"

const Stack = createNativeStackNavigator();

const HealthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OverView" component={OverView} />
      <Stack.Screen name="Weight" component={Weight} />
      <Stack.Screen name="Height" component={Height} />
    </Stack.Navigator>
  );
};


export default HealthNavigator;
