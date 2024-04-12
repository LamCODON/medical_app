import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drugs from "../Drugs/Drugs";
import Interaction from "../Interaction/Interaction";
import InteractionDetails from "../Interaction/InteractionDetails";
import DrugDetails from "../Drugs/DrugDetails";
import DrugList from "../Drugs/DrugList";

const Stack = createNativeStackNavigator();

const MedicineNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drugs" component={Drugs} />
      <Stack.Screen name="Drug List" component={DrugList} />
      <Stack.Screen name="Drug Details" component={DrugDetails} />
      <Stack.Screen name="Interaction" component={Interaction} />
      <Stack.Screen name="Interaction Details" component={InteractionDetails} />
    </Stack.Navigator>
  );
};

export default MedicineNavigator;
