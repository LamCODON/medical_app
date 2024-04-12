import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  itemContainer: {
    maxWidth: "calc(100% - 16px / 3)",
    padding: 20,
    borderRadius: 12,
    borderColor: "#E8F3F1",
    borderWidth: 2,
  },
  itemText: {
    textAlign: "center",
    fontWeight: "600",
    marginTop: 16,
  },
});
