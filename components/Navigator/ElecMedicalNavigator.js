import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OverView from "../ElecMedical/OverView";
import ViewHealthRow from "../ElecMedical/ViewHealthRow";
import AddPrescription from "../ElecMedical/AddPrescription";
import DrugList from "../ElecMedical/DrugList";
import Height from  "../Health/Height"

const Stack = createNativeStackNavigator();

const ElecMedicalNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OverView" component={OverView} />
      <Stack.Screen name="ViewHealthRow" component={ViewHealthRow} />
      <Stack.Screen name="AddPrescription" component={AddPrescription} />
      <Stack.Screen name="DrugList" component={DrugList} />
    </Stack.Navigator>
  );
};


export default ElecMedicalNavigator;
