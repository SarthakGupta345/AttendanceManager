import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC", // Match premium light theme
    },

    pageTitle: {
        fontSize: 32,
        fontWeight: "800",
        marginTop: 20,
        marginLeft: 20,
        color: "#0F172A",
        letterSpacing: 0.5,
    },

    containerBox: {
        paddingBottom: 80,
        backgroundColor: "#F8FAFC",
        paddingHorizontal: 16,
        paddingTop: 10,
        gap: 16
    },

    topBox: {
        width: "100%",
        height: 100,
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        marginTop: 12,
        shadowColor: "#94A3B8",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 3,
        borderWidth: 1,
        borderColor: "#E2E8F0"
    },

    subjectBox: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 20,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "#E2E8F0",
        shadowColor: "#94A3B8",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 3,
        marginBottom: 16, // So they gap properly if multiple
    },

    subjectHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    subjectName: {
        fontSize: 19,
        fontWeight: "800",
        color: "#1E293B",
        flex: 1,
    },

    subjectCode: {
        fontSize: 14,
        fontWeight: "700",
        color: "#4F46E5",
        backgroundColor: "#EEF2FF",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        overflow: "hidden", // if border radius doesn't apply to Text on iOS without this
    },

    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },

    statItem: {
        flex: 1,
        backgroundColor: "#F8FAFC",
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 4,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#F1F5F9",
    },

    circleBox: {
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },

    presentItem: {
        backgroundColor: "#F0FDF4",
        borderColor: "#DCFCE7",
    },

    absentItem: {
        backgroundColor: "#FEF2F2",
        borderColor: "#FEE2E2",
    },
    
    notMarkedItem: {
        backgroundColor: "#F8FAFC",
        borderColor: "#F1F5F9",
    },

    gtItem: {
        backgroundColor: "#EFF6FF",
        borderColor: "#DBEAFE",
    },

    statNumberBox: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "center",
        gap: 2,
    },

    statNumberTop: {
        fontSize: 22,
        fontWeight: "800",
        color: "#0F172A",
    },
    
    statNumberBottom: {
        fontSize: 14,
        fontWeight: "600",
        color: "#64748B",
    },

    slashDivider: {
        fontSize: 18,
        fontWeight: "400",
        color: "#94A3B8",
        marginHorizontal: 2,
        paddingTop: 4, // aligns nicely with the baseline of numbers
    },

    statLabel: {
        marginTop: 6,
        fontSize: 11,
        fontWeight: "700",
        color: "#64748B",
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    
    presentLabel: { color: "#16A34A" },
    absentLabel:  { color: "#DC2626" },
    gtLabel:      { color: "#2563EB" },

    floatingBox:{
        position:"absolute",
        right: 20,
        bottom: 100,
        width: 64,
        height: 64,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:32,
        backgroundColor:"#4F46E5",
        shadowColor: "#4F46E5",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 8,
    }
});
