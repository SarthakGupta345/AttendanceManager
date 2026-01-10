import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(249, 251, 254)"
    },
    iconBox: {
        position: "absolute",
        right: 10,
        top: 20

    },

    // Sidebox
    sideBox: {
        width: 100,
        height: 80,
        zIndex: 1,
        borderRadius: 10,
        position: "absolute",
        top: 40,
        right: 10,
        backgroundColor: "#107feeff",
    },

    /* Date Header */
    dateBox: {
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E7EB",
        gap: 10,
        backgroundColor: "rgb(249, 251, 254)"
    },

    dateText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#111827",
    },

    dayText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#6B7280",
    },
    cardBox: {
        paddingHorizontal: 10,
    },

    /* Class Card */
    todayBox: {
        flexDirection: "row",
        paddingVertical: 16,
        gap: 16,
        borderBottomColor: "#E5E7EB",
        borderBottomWidth: 1,
        paddingBottom: 25,
        backgroundColor: "rgb(255, 255, 255)"
    },

    /* Time Column */
    timeBox: {
        width: 70,
        alignItems: "center",
        gap: 6,
    },

    timeText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#374151",
    },

    timeline: {
        width: 35,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: "#111827",
    },

    /* Details */
    detailsBox: {
        flex: 1,
        gap: 6,
    },
    background: {

    },

    titleText: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
    },

    codeText: {
        fontSize: 14,
        color: "#6B7280",
    },

    profText: {
        fontSize: 14,
        color: "#374151",
        marginTop: 4,
    },

    /* Attendance */
    attendanceBox: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },

    attendancePill: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
        gap: 6,
    },

    attendanceText: {
        fontSize: 13,
        fontWeight: "600",
    },

    dot: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "#16A34A",
    },

    present: {
        backgroundColor: "#DCFCE7",
    },

    absent: {
        backgroundColor: "#FEE2E2",
    },

    notMarked: {
        backgroundColor: "#E5E7EB",
    },
    floatingBox: {
        position: "absolute",
        right: 17,
        bottom: 110,
        width: 73,
        height: 73,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "rgb(99, 143, 188)"
    },


    // Floating Box

    floatBox:{
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundBlendMode: "multiply",
        backgroundColor: "rgb(49, 50, 50)",
        opacity: 0.3,
        zIndex:40
    },
    floatMainBox:{
        height:"50%",
        width:"90%",
        backgroundColor:"red",
        opacity:1,
        borderRadius:20
        
    }
});
