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
        width: 33,
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
    topBackground: {
        flex: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        height: "1%",
        backgroundColor: "rgb(249, 251, 254)"
    },
    bottomBackground: {
        flex: 1,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        height: "22%",
        backgroundColor: "rgb(249, 251, 254)"

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


    floatBox: {
        position: "absolute",
        width: "100%",
        height: "98.5%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.45)",
        zIndex: 40,
    },

    floatMainBox: {
        height: "65%",
        width: "90%",
        backgroundColor: "#dee4e9",
        borderRadius: 12,
        overflow: "hidden",
    },

    closeBtn: {
        position: "absolute",
        right: 16,
        top: 14,
        zIndex: 10,
    },

    topText: {
        fontWeight: "600",
        fontSize: 20,
        color: "#000000",
    },

    actionText: {
        fontWeight: "700",
        fontSize: 18,
        color: "#f5efef",
    },

    topBox: {
        paddingTop: 10,
        borderBottomRightRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(139, 143, 143)",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingHorizontal: 10
    },

    individualBox: {
        paddingHorizontal: 17,
        paddingBottom: 12,

    },
    selectedBox: {
        paddingHorizontal: 17,
        paddingBottom: 12,
        borderBottomColor: "black",
        borderBottomWidth: 2,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    bottomBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#1c4669",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        marginTop: "auto",
    },
    ConfirmBox: {
        borderRightColor: "#e1e8ed",
        borderRightWidth: 1,
        paddingVertical: 18,
        paddingHorizontal: 34
    },
    CancelBox: {
        paddingVertical: 15,
        paddingHorizontal: 35
    },
    text: {
        fontWeight: "500",
        fontSize: 15
    },
    inputBox: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        paddingHorizontal: 10,
        marginTop: 5,
        paddingVertical: 15
    },
    formBox: {
        paddingVertical: 5,
        marginTop:5,
        paddingHorizontal: 15,
    },
    formIndividualBox: {
        paddingVertical: 11

    }
});
