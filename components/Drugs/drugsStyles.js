import { StyleSheet } from "react-native";
import STYLES from "../../constant/styles";

export default drugsStyles = StyleSheet.create({
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
  adsContainer: {
    backgroundColor: "#E8F3F1",
    height: 135,
    padding: 24,
    borderRadius: 10,
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  adsText: {
    fontSize: 18,
    fontWeight: "600",
  },
  adsImage: {
    position: "absolute",
    right: 0,
  },
  productContainer: {
    gap: 24,
    marginTop: 36,
  },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  productHeaderText: {
    fontSize: 20,
    color: STYLES.blackText,
    fontWeight: "600",
  },
  seeAll: {
    color: STYLES.mainColor,
  },
  productList: {
    flexDirection: "row",
    gap: 16,
    overflowY: "hidden",
  },
  itemContainer: {
    padding: 20,
    borderRadius: 12,
    borderColor: "#E8F3F1",
    borderWidth: 2,
    marginRight: 16,
  },
  itemText: {
    textAlign: "center",
    fontWeight: "600",
    marginTop: 16,
  },
  itemVolume: {
    color: STYLES.gray,
  },
});
