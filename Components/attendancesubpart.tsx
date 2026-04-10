import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '@/styles/Attendance'
import { router } from 'expo-router'
import { useDateAttendance, useScheduledCount } from '@/hooks/useClasses'

interface AttendanceBoxProps {
    selectedDate: string;
}

const DAY_BIT = [64, 1, 2, 4, 8, 16, 32]; // Sun → Sat

const AttendanceBox = ({ selectedDate }: AttendanceBoxProps) => {
    const today = new Date().toISOString().split('T')[0];
    const isFuture = selectedDate > today;
    
    // Get day bit for future calculation
    const dateObj = new Date(selectedDate);
    const dayBit = DAY_BIT[dateObj.getDay()];

    const { data: pastStats, isLoading: isPastLoading } = useDateAttendance(selectedDate);
    const { data: futureCount, isLoading: isFutureLoading } = useScheduledCount(dayBit);

    if (isPastLoading || (isFuture && isFutureLoading)) {
        return (
            <View style={[styles.box, { padding: 40, alignItems: 'center' }]}>
                <ActivityIndicator color="#4F46E5" />
            </View>
        );
    }

    if (isFuture) {
        return (
            <View style={[styles.box, { justifyContent: 'center', paddingVertical: 30 }]}>
                <View style={[styles.attendanceBox, styles.noBorder]}>
                    <Text style={styles.numberText}>{futureCount || 0}</Text>
                    <Text style={[styles.titleText, { color: '#4F46E5' }]}>Classes Scheduled</Text>
                    <Text style={{ fontSize: 10, color: '#94A3B8', marginTop: 4 }}>Predicted from Routine</Text>
                </View>
            </View>
        );
    }

    const attendanceDisplay = [
        { label: "Total", value: pastStats?.total || 0, color: "#000" },
        { label: "Not Marked", value: pastStats?.not_marked || 0, color: "#6B7280" },
        { label: "Attended", value: pastStats?.present || 0, color: "#16A34A" },
        { label: "Missed", value: pastStats?.absent || 0, color: "#DC2626" },
    ];

    return (
        <TouchableOpacity style={styles.box} activeOpacity={0.8}
            onPress={() => {
                router.push('/(schedule)/page')
            }}
        >
            {attendanceDisplay.map((item, index) => (
                <View
                    key={item.label}
                    style={[
                        styles.attendanceBox,
                        index === attendanceDisplay.length - 1 && styles.noBorder,
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