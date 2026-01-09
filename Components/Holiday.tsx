import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import icon from "../assets/images/Holiday.png"
import { Image } from 'expo-image'
const Holiday = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Today is Holiday</Text>

            <Image
                source={icon}
                alt='sunny Leone'
                contentFit="contain"
                transition={100}
                style={styles.imageBox}
            />
        </View>
    )
}
export default Holiday

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        padding: 5

    },
    imageBox: {
        height: "85%",
        width: "85%",
        alignSelf: "center",
        borderRadius: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: "600",
        marginTop: 12,
        marginLeft: 16,
        color: "#111827",
        fontFamily: "Inter_600SemiBold"

    }
})