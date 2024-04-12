import React from "react";
import { Image, Pressable } from "react-native";

const ImageButton = ({ style, onPress, source }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        opacity: pressed ? 0.5 : 1;
      }}
    >
      <Image style={style} source={source} />
    </Pressable>
  );
};

export default ImageButton;
