import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/Attendance'
import { router } from 'expo-router'
import { attendanceData } from '@/Constants/seeds/data'

const AttendanceBox = () => {
    return (
        <TouchableOpacity style={styles.box} activeOpacity={0.8}
            onPress={() => {
                router.push('/(schedule)/page')
            }}
        >
            {attendanceData.map((item, index) => (
                <View
                    key={item.label}
                    style={[
                        styles.attendanceBox,
                        index === attendanceData.length - 1 && styles.noBorder,
                    ]}
                >
                    <Text style={[styles.titleText, { color: item.color }]}>
                        {item.label}
                    </Text>
                    <Text style={styles.numberText}>{item.value}</Text>
                </View>
            ))}
        </TouchableOpacity>
    )
}

export default AttendanceBox