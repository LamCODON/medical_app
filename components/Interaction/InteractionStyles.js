import { StyleSheet } from "react-native";
import STYLES from "../../constant/styles";
export default interactionStyles = StyleSheet.create({
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
  productContainer: {
    gap: 24,
    overflow: "scroll",
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 20,
    justifyContent: "space-between",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E8F3F1",
    borderWidth: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: STYLES.blackText,
  },
  itemVolume: {
    color: STYLES.gray,
  },
  button: {
    backgroundColor: STYLES.mainColor,
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
