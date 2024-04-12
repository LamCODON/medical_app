import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigator from "./HomeNavigator";
import Signup from "../Signup/Signup";
import { useState } from "react";
import Welcome from "../Welcome/Welcome";
import Login from "../Login/Login";
import ResetPassword from "../ResetPassword/ResetPassword";
import MedicineNavigator from "./MedicineNavigator";
import HealthNavigator from "./HealthNavigator";
import ElecMedicalNavigator from "./ElecMedicalNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
            <Stack.Screen name="MedicineNavigator" component={MedicineNavigator} />
            <Stack.Screen name="HealthNavigator" component={HealthNavigator} />
            <Stack.Screen name="ElecMedicalNavigator" component={ElecMedicalNavigator} />

          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
