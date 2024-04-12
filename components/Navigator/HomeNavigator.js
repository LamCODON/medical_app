import React from "react";
import HomeIcon from "../../assets/icons/home.png";
import HomeActiveIcon from "../../assets/icons/home_active.png";
import SearchMedicineIcon from "../../assets/icons/medicine_search.png";
import SearchMedicineActiveIcon from "../../assets/icons/medicine_search_active.png";
import CalendarIcon from "../../assets/icons/calendar.png";
import CalendarActiveIcon from "../../assets/icons/calendar_active.png";
import ProfileIcon from "../../assets/icons/profile.png";
import ProfileActiveIcon from "../../assets/icons/profile_active.png";
import Home from "../Home/Home";
import SearchMedicine from "../SearchMedicine/SearchMedicine";
import Calendar from "../Calendar/Calendar";
import Profile from "../Profile/Profile";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarStyle: styles.container }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (focused ? <Image source={HomeActiveIcon} /> : <Image source={HomeIcon} />),
        }}
      />
      <Tab.Screen
        name="SearchMedicine"
        component={SearchMedicine}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <Image source={SearchMedicineActiveIcon} /> : <Image source={SearchMedicineIcon} />,
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <Image source={CalendarActiveIcon} /> : <Image source={CalendarIcon} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <Image source={ProfileActiveIcon} /> : <Image source={ProfileIcon} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: 36,
    paddingTop: 16,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 1,
  },
});
