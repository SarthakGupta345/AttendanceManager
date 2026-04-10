import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/schedule'
import { Entypo } from '@expo/vector-icons'

const ScheduleBox = () => {
    return (
        <View style={styles.box}>
            {/* Menu */}
            <TouchableOpacity activeOpacity={0.7} style={styles.dotBox}>
                <Entypo name="dots-three-vertical" size={18} color="#94A3B8" />
            </TouchableOpacity>

            {/* Number */}
            <View style={styles.numberBox}>
                <Text style={styles.numberText}>1</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText}>Software Engineering</Text>
                    <Text style={styles.codeText}>(CSE24231)</Text>
                </View>

                <Text style={styles.timeText}>09:00 AM – 10:00 AM</Text>

                {/* Status */}
                <View style={styles.statusPill}>
                    <Text style={styles.statusText}>Present</Text>
                </View>
            </View>
        </View>

    )
}

export default ScheduleBox