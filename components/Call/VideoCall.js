// import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from "@zegocloud/zego-uikit-prebuilt-call-rn";
import zegoConfig from "../../zegoCloud.config";
import { Text, View } from "react-native";

export default function VoiceCallPage(props) {
  const configs = {
    userName: "test",
    callID: "123890",
    userID: 1,
  };
  return (
    <View style={styles.container}>
      {/* <ZegoUIKitPrebuiltCall
        {...zegoConfig}
        {...configs}
        config={{
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            props.navigation.navigate("HomeNavigator");
          },
          onHangUp: () => {
            props.navigation.navigate("HomeNavigator");
          },
        }}
      /> */}
    </View>
  );
}
