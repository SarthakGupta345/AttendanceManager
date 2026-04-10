import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
    },

    dateBox: {
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 8,
        alignSelf: "center",
        flexDirection: "row",
        gap: 20,
    },
    
    dateText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#0F172A",
    },
    
    day: {
        fontSize: 16,
        color: "#64748B",
    },

    box: {
        width: "90%",
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        marginTop: 10,
        alignSelf: "center",
        padding: 20,
        flexDirection: "row",
        gap: 16,
        alignItems: "center",

        // Shadow
        borderWidth: 1,
        borderColor: "#E2E8F0",
        shadowColor: "#94A3B8",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 3,
    },

    dotBox: {
        position: "absolute",
        right: 16,
        top: 20,
        padding: 6, // better touch area
        zIndex: 10,
    },

    numberBox: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#EEF2FF",
        alignItems: "center",
        justifyContent: "center",
    },

    numberText: {
        fontSize: 24,
        fontWeight: "800",
        color: "#4F46E5",
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
        paddingRight: 24, // Keep away from dot menu
    },

    titleText: {
        fontSize: 17,
        fontWeight: "800",
        color: "#1E293B",
    },

    codeText: {
        fontSize: 13,
        fontWeight: "700",
        color: "#4F46E5",
        letterSpacing: 0.5,
    },

    timeText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#64748B",
    },

    statusPill: {
        alignSelf: "flex-start",
        backgroundColor: "#F0FDF4",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        marginTop: 4,
        borderWidth: 1,
        borderColor: "#DCFCE7",
    },

    statusText: {
        fontSize: 12,
        fontWeight: "700",
        color: "#16A34A",
    },
});
