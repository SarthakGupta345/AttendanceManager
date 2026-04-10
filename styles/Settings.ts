import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F5F9" // Clean iOS-like pale background
    },
    mainBox: {
        flex: 1,
        paddingHorizontal: 13,
        paddingTop: 4,
    },
    imageBox: {
        height: 64,
        width: 64,
        borderRadius: 32,
    },
    profileBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 22,
        fontWeight: '700',
        color: '#0F172A',
        marginBottom: 2,
    },
    profileSubtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#64748B',
    },
    divideBox: {
        backgroundColor: "#FFFFFF", // Crisp white sections
        borderRadius: 20,
        marginBottom: 14, // Separates sections from each other
        overflow: "hidden",
    },
    themeBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 20,
        paddingVertical: 18,
        borderBottomColor: "#F8FAFC",
        borderBottomWidth: 1.5,
    },
    noBorder: {
        borderBottomWidth: 0,
    },
    mainTittle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1E293B',
        marginBottom: 2,
    },
    subTittle: {
        fontSize: 14,
        fontWeight: '500',
        color: "#64748B"
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    }
});