import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6EDF0",
    paddingHorizontal: 20,
  },

  skipBtn: {
    alignSelf: "flex-end",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#083e47",
  },

  skipText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize:16
  },

  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    color: "#111827",
  },

  image: {
    height: "40%",
    width: "100%",
    marginVertical: 10,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 6,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  input: {
    fontSize: 16,
    color: "#111827",
  },

  orText: {
    textAlign: "center",
    marginVertical: 14,
    color: "#6B7280",
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },

  socialBtn: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 12,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },

  footerText: {
    color: "#6B7280",
  },

  signupText: {
    color: "#2563EB",
    fontWeight: "600",
  },


  continueBtn:{
    alignItems:"center",
    marginTop:30,
    justifyContent:"center",
    backgroundColor:"#083e47",
    paddingVertical:16,
    borderRadius:10,
    shadowColor: "#e0d4d4",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5

  },
  continueText:{
    fontSize:20,
    fontWeight:"600",
    color:"#FFFFFF"
  }
});
