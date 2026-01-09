import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
    },

    dateBox: {
        width: "100%",
        paddingHorizontal: 25,
        height: 50,
        alignSelf: "center",
        flexDirection: "row",
        gap: 25
    },
    dateText: {
        fontSize: 17,
        fontWeight: "500"


    },
    day: {

    }
    ,

    box: {
        width: "95%",
        height: 96,
        backgroundColor: "#E8F8E7",
        borderRadius: 14,
        marginTop: 12,
        alignSelf: "center",
        padding: 12,
        flexDirection: "row",
        gap: 12,

        // Shadow
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },

    dotBox: {
        position: "absolute",
        right: 10,
        top: 10,
        padding: 6, // better touch area
    },

    numberBox: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: "#111827",
        alignItems: "center",
        justifyContent: "center",
    },

    numberText: {
        fontSize: 28,
        fontWeight: "700",
        color: "#fff",
    },

    content: {
        flex: 1,
        justifyContent: "center",
        gap: 6,
    },

    titleRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 6,
        alignItems: "center",
    },

    titleText: {
        fontSize: 15,
        fontWeight: "600",
        color: "#111827",
    },

    codeText: {
        fontSize: 13,
        fontWeight: "500",
        color: "#6B7280",
    },

    timeText: {
        fontSize: 13,
        color: "#374151",
    },

    statusPill: {
        alignSelf: "flex-start",
        backgroundColor: "#DCFCE7",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
    },

    statusText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#0e622dff",
    },
});
