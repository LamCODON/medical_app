import { StyleSheet } from "react-native";
import STYLES from "../../constant/styles";

export default drugDetailsStyles = StyleSheet.create({
  viewBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  headerText: {
    color: STYLES.blackText,
    fontSize: 24,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    transform: [{ translateX: -8 }],
  },
  image: {
    width: 230,
    height: 230,
  },
  text: {
    color: STYLES.gray,
  },
  itemName: {
    fontSize: 20,
    color: STYLES.blackText,
    fontWeight: "600",
  },
  itemVolume: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  itemDescription: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  itemHeaderText: {
    fontWeight: "700",
  },
});
