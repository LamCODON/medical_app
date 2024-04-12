import { StyleSheet } from "react-native";
import STYLES from "../../constant/styles";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 138,
    height: 138,
    marginBottom: 12,
  },
  title: {
    color: "#199A8E",
    fontSize: 48,
    fontWeight: "300",
  },
  content: {
    paddingVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: STYLES.blackText,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    width: 260,
    backgroundColor: STYLES.mainColor,
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "medium",
  },
  signUpBtn: {
    backgroundColor: "rgba(25 154 142 / 0.15)",
    borderColor: STYLES.mainColor,
    borderWidth: 2,
  },
  signUpText: {
    color: STYLES.mainColor,
  },
});
