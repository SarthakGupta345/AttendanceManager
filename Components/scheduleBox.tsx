import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/schedule'
import { Entypo } from '@expo/vector-icons'

interface ScheduleBoxProps {
    number: number;
    subjectName: string;
    code: string;
    startTime: string;
    endTime: string;
    status: string;
}

const ScheduleBox = ({ number, subjectName, code, startTime, endTime, status }: ScheduleBoxProps) => {
    // Capitalize status
    const displayStatus = status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ');
    
    return (
        <View style={styles.box}>
            {/* Menu */}
            <TouchableOpacity activeOpacity={0.7} style={styles.dotBox}>
                <Entypo name="dots-three-vertical" size={18} color="#94A3B8" />
            </TouchableOpacity>

            {/* Number */}
            <View style={styles.numberBox}>
                <Text style={styles.numberText}>{number}</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <View style={styles.titleRow}>
                    <Text style={styles.titleText} numberOfLines={1}>{subjectName}</Text>
                    <Text style={styles.codeText}>({code})</Text>
                </View>

                <Text style={styles.timeText}>{startTime} – {endTime}</Text>

                {/* Status */}
                <View style={[
                    styles.statusPill,
                    status === 'present' && { backgroundColor: '#F0FDF4' },
                    status === 'absent' && { backgroundColor: '#FEF2F2' },
                    status === 'not_marked' && { backgroundColor: '#F8FAFC' },
                ]}>
                    <Text style={[
                        styles.statusText,
                        status === 'present' && { color: '#16A34A' },
                        status === 'absent' && { color: '#DC2626' },
                        status === 'not_marked' && { color: '#64748B' },
                    ]}>{displayStatus}</Text>
                </View>
            </View>
        </View>
    )
}

export default ScheduleBox