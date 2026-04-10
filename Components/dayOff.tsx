import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import icon from "../assets/images/dayofficon.png"
import { Image } from 'expo-image'

const DayOff = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={icon}
                    contentFit="contain"
                    transition={200}
                    style={styles.imageBox}
                />
                <Text style={styles.title}>No Classes Today</Text>
                <Text style={styles.subtitle}>Enjoy your weekend and take some time to recharge!</Text>
            </View>
        </View>
    )
}

export default DayOff

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        width: "100%",
        backgroundColor: "#fffcfcc8",
        borderRadius: 24,
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#F1F5F9",
        shadowColor: "#94A3B8",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 4,
    },
    imageBox: {
        height: 180,
        width: "100%",
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: "800",
        color: "#0F172A",
        marginBottom: 8,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "500",
        color: "#64748B",
        textAlign: "center",
        lineHeight: 22,
        paddingHorizontal: 20,
    }
})