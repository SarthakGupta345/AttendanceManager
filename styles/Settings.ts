import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainBox: {

    },
    imageBox: {
        height: 70,
        width: 70,
        borderRadius: 50
    },
    profileBox: {
        flexDirection: "row",
        gap: 12,
        paddingHorizontal: 12,
        borderBottomColor: "#7791c4ff",
        borderBottomWidth: 1,
        paddingVertical: 15

    },
    themeBox: {
        flexDirection: "row",
        gap: 5,
        paddingHorizontal: 15,
        borderBottomColor: "#e5e8eeff",
        borderBottomWidth: 1,
        paddingBottom: 15,
        paddingVertical: 15
    },
    mainTittle: {
        fontSize: 17,
        fontWeight: '600',
        paddingHorizontal: 15
    },
    subTittle: {
        fontSize: 14,
        fontWeight: '400',
        paddingHorizontal: 15,
        color: "#6B7280"
    },
    divideBox: {
        borderBottomColor: "#7791c4ff",
        borderBottomWidth: 1,
        marginTop: 5


    }
})