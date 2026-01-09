import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainTittle: {
        fontSize: 25,
        fontWeight: "600",
        marginTop: 12,
        marginLeft: 16,
        color: "#111827",
        fontFamily: "Inter_600SemiBold"
    },
    imageBox: {
        height: "89%",
        width: "97%",
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: "red",
    },
    uploadBox: {
        height: "89%",
        width: "97%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    }
})