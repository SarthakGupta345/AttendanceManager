import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/calendar'
import { router } from 'expo-router'

interface SubjectBoxProps {
    name: string;
    code: string;
    present: number;
    absent: number;
    total: number;
}

const SubjectBox = ({ name, code, present, absent, total }: SubjectBoxProps) => {
    const presentPercent = total > 0 ? ((present / total) * 100).toFixed(0) : 0;
    const absentPercent = total > 0 ? ((absent / total) * 100).toFixed(0) : 0;

    return (
        <TouchableOpacity style={styles.subjectBox}
            activeOpacity={0.8}
            onPress={() => {
                router.push("/(Subject)/page")
            }}
        >
            {/* Subject Header */}
            <View style={styles.subjectHeader}>
                <Text style={styles.subjectName} numberOfLines={1}>{name}</Text>
                <Text style={styles.subjectCode}>{code}</Text>
            </View>

            {/* Attendance Stats */}
            <View style={styles.statsRow}>
                {/* Present */}
                <View style={[styles.statItem, styles.presentItem]}>
                    <View style={styles.circleBox}>
                        <View style={styles.statNumberBox}>
                            <Text style={styles.statNumberTop}>{present}</Text>
                            <Text style={styles.slashDivider}>/</Text>
                            <Text style={styles.statNumberBottom}>{total}</Text>
                        </View>
                    </View>
                    <Text style={[styles.statLabel, styles.presentLabel]}>Present</Text>
                    <Text style={styles.statLabel}>{presentPercent}%</Text>
                </View>

                {/* Absent */}
                <View style={[styles.statItem, styles.absentItem]}>
                    <View style={styles.circleBox}>
                        <View style={styles.statNumberBox}>
                            <Text style={styles.statNumberTop}>{absent}</Text>
                            <Text style={styles.slashDivider}>/</Text>
                            <Text style={styles.statNumberBottom}>{total}</Text>
                        </View>
                    </View>
                    <Text style={[styles.statLabel, styles.absentLabel]}>Absent</Text>
                    <Text style={styles.statLabel}>{absentPercent}%</Text>
                </View>

                {/* Total Recorded */}
                <View style={[styles.statItem, styles.gtItem]}>
                    <View style={styles.circleBox}>
                        <View style={styles.statNumberBox}>
                            <Text style={styles.statNumberTop}>{total}</Text>
                        </View>
                    </View>
                    <Text style={[styles.statLabel, styles.gtLabel]}>Total Classes</Text>
                    <Text style={styles.statLabel}>Recorded</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SubjectBox