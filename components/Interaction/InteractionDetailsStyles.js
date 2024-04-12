import { StyleSheet } from "react-native";
import STYLES from "../../constant/styles";
export default interactionDetailsStyles = StyleSheet.create({
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
  addAnother: {
    color: STYLES.mainColor,
  },
  text: {
    color: STYLES.blackText,
  },
  interactionTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  rateBox: {
    padding: 8,
    borderRadius: 4,
  },
  rateBoxModerate: {
    backgroundColor: "#F76F0D",
    shadowColor: "#F76F0D",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  rateBoxMinor: {
    backgroundColor: "#FFC266",
    shadowColor: "#FFC266",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  rate: {
    color: "#fff",
    fontWeight: "600",
  },
  rateName: {
    fontSize: 16,
  },
});
