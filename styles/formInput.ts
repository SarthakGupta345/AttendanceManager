import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({


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
        right: 17,
        top: 16,
        zIndex: 10,
    },

    topText: {
        marginTop:6,
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
        marginTop: 5,
        paddingHorizontal: 15,
    },
    formIndividualBox: {
        paddingVertical: 11

    },

    meraBox:{
    borderColor:"black",
    borderWidth:1,
    borderRadius:8,
    paddingHorizontal:10,
    paddingVertical:15,
    marginTop:5
    },



    // error
    errorBox:{
     flexDirection:"row",
     gap:5,
     marginLeft:4
    },
    errorText:{
        color:"rgb(233, 95, 102)",
        fontSize:13

    },
    errorIcon:{
        fontSize:14,
        marginTop:3

    }
});

