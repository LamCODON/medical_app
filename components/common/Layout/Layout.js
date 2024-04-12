import React from "react";
import { SafeAreaView, View } from "react-native";
import styleLayout from "./styleLayout";

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styleLayout.container}>
      <View style={{ paddingHorizontal: 24, flex: 1 }}>{children}</View>
    </SafeAreaView>
  );
};
export default Layout;
