import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC"
    },
    iconBox: {
        position: "absolute",
        right: 15,
        top: 20,
        padding: 5,
    },

    // Sidebox
    sideBox: {
        width: 100,
        height: 48,
        zIndex: 10,
        borderRadius: 12,
        position: "absolute",
        top: 50,
        right: 15,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#94A3B8",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#F1F5F9'
    },
    sideBoxText: {
        color: '#EF4444',
        fontWeight: '600',
        fontSize: 15
    },

    /* Date Header */
    dateBox: {
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#F8FAFC",
        borderBottomWidth: 1,
        borderBottomColor: "#E2E8F0",
        marginBottom: 10,
    },

    dateText: {
        fontSize: 24,
        fontWeight: "800",
        color: "#0F172A",
        letterSpacing: 0.5,
    },

    dayText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#64748B",
        marginLeft: 8,
    },
    
    cardBox: {
        paddingHorizontal: 16,
        paddingTop: 6,
    },

    /* Class Card */
    todayBox: {
        flexDirection: "row",
        padding: 20,
        gap: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#F1F5F9",
        shadowColor: "#94A3B8",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 3,
    },

    /* Time Column */
    timeBox: {
        width: 65,
        alignItems: "center",
        gap: 8,
    },

    timeText: {
        fontSize: 13,
        fontWeight: "700",
        color: "#64748B",
    },

    timeline: {
        width: 20,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#E2E8F0',
        overflow: 'hidden',
        marginRight:10,
        justifyContent: 'center', // so it fills from bottom if desired, or flex-start from top
    },
    timelineFill: {
        width: '100%',
        backgroundColor: '#4F46E5', // indigo blue to simulate "water"
        borderRadius: 10,
    },

    /* Details */
    detailsBox: {
        flex: 1,
        gap: 8,
    },
    
    topBackground: {
        flex: 1,
    },
    bottomBackground: {
        flex: 1,
    },

    titleText: {
        fontSize: 19,
        fontWeight: "800",
        color: "#1E293B",
        marginBottom: 2,
    },
   
    codeText: {
        fontSize: 13,
        fontWeight: '700',
        color: "#4F46E5",
        letterSpacing: 0.5,
    },

    profText: {
        fontSize: 14,
        color: "#64748B",
        fontWeight: '500',
    },

    /* Attendance */
    attendanceBox: {
        flexDirection: "row",
        gap: 4, // reduce gap to fit
        marginTop: 12,
        flexWrap: "nowrap", // single line
        width: '100%',
        justifyContent: 'space-between',
    },

    attendancePill: {
        flex: 1, // Make them expand symmetrically to fit the line
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 2, // minimal padding 
        paddingVertical: 8,
        borderRadius: 12,
        gap: 4,
        borderWidth: 1,
        borderColor: "transparent",
    },

    attendanceText: {
        fontSize: 12, // slightly smaller text to ensure fit
        fontWeight: "700",
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },

    present: {
        backgroundColor: "#F0FDF4",
        borderColor: "#DCFCE7",
    },
    presentActive: {
        backgroundColor: "#22C55E",
        borderColor: "#16A34A",
        shadowColor: "#22C55E",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
    },
    presentText: {
        color: "#16A34A",
    },

    absent: {
        backgroundColor: "#FEF2F2",
        borderColor: "#FEE2E2",
    },
    absentActive: {
        backgroundColor: "#EF4444",
        borderColor: "#DC2626",
        shadowColor: "#EF4444",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
    },
    absentText: {
        color: "#DC2626",
    },

    notMarked: {
        backgroundColor: "#F8FAFC",
        borderColor: "#F1F5F9",
    },
    notMarkedActive: {
        backgroundColor: "#64748B",
        borderColor: "#475569",
        shadowColor: "#64748B",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
    },
    notMarkedText: {
        color: "#64748B",
    },
    
    activeText: {
        color: "#FFFFFF",
    },

    floatingBox: {
        position: "absolute",
        right: 20,
        bottom: 100,
        width: 64,
        height: 64,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 32,
        backgroundColor: "#4F46E5",
        shadowColor: "#4F46E5",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 16,
        elevation: 8,
    },

    // Floating Box
    floatBox: {
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(15, 23, 42, 0.4)",
        zIndex: 40,
    },

    floatMainBox: {
        maxHeight: "75%",
        width: "90%",
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#E2E8F0",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.15,
        shadowRadius: 30,
        elevation: 10,
    },

    closeBtn: {
        position: "absolute",
        right: 16,
        top: 16,
        zIndex: 10,
        backgroundColor: '#F1F5F9',
        borderRadius: 20,
        padding: 4,
    },

    topText: {
        fontWeight: "700",
        fontSize: 20,
        color: "#0F172A",
    },

    actionText: {
        fontWeight: "700",
        fontSize: 16,
        color: "#0F172A",
    },

    topBox: {
        paddingTop: 20,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#E2E8F0",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        paddingHorizontal: 20
    },

    individualBox: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    selectedBox: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderBottomColor: "#4F46E5",
        borderBottomWidth: 2,
    },
    bottomBox: {
        flexDirection: "row",
        backgroundColor: "#F8FAFC",
        borderTopWidth: 1,
        borderTopColor: '#E2E8F0',
        marginTop: "auto",
    },
    ConfirmBox: {
        flex: 1,
        borderRightColor: "#E2E8F0",
        borderRightWidth: 1,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    CancelBox: {
        flex: 1,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: "600",
        fontSize: 15,
        color: '#334155'
    },
    inputBox: {
        borderWidth: 1,
        borderColor: "#E2E8F0",
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginTop: 8,
        paddingVertical: 16,
        color: '#0F172A',
        fontSize: 16,
    },
    formBox: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    formIndividualBox: {
        paddingVertical: 12
    }
});
