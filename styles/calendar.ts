import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
    },

    pageTitle: {
        fontSize: 25,
        fontWeight: "600",
        marginTop: 12,
        marginLeft: 16,
        color: "#111827",
        fontFamily: "Inter_600SemiBold"
    },

    containerBox: {
        paddingBottom: 80,
        backgroundColor: "#F9FAFB",
        gap: 20


    },

    topBox: {
        width: "95%",
        height: 96,
        backgroundColor: "#E8F8E7",
        borderRadius: 14,
        marginTop: 12,
        alignSelf: "center",
    },

    subjectBox: {
        width: "95%",
        backgroundColor: "#e7f8ecff",
        borderRadius: 14,
        padding: 14,
        alignSelf: "center",
        borderBottomColor: "rgba(210, 215, 210, 0.6)",
        borderBottomWidth: 1,
        borderTopColor: "rgba(210, 215, 210, 0.6)",
        borderTopWidth: 1
    },

    subjectHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 12,
    },

    subjectName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
    },

    subjectCode: {
        fontSize: 13,
        color: "#6B7280",
    },

    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    statItem: {
        alignItems: "center",
    },

    circleBox: {
        width: 85,
        height: 85,
        borderRadius: 45,
        backgroundColor: "#D4E2D9",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
    },

    presentBorder: {
        borderColor: "#15803D",
    },

    absentBorder: {
        borderColor: "#DC2626",
    },

    gtBorder: {
        borderColor: "#3B82F6",
    },
    notMarkedBorder: {
        borderColor: "#F59E0B",
    },

    statNumber: {
        fontSize: 22,
        fontWeight: "700",
        color: "#0F172A",
    },

    divider: {
        width: 40,
        height: 1,
        backgroundColor: "#374151",
        marginVertical: 4,
    },

    statLabel: {
        marginTop: 6,
        fontSize: 13,
        fontWeight: "600",
        color: "#374151",
    },
});
