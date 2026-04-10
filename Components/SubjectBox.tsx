import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/calendar'
import { router } from 'expo-router'

const SubjectBox = () => {
    return (
        <TouchableOpacity style={styles.subjectBox}
            activeOpacity={0.8}
            onPress={() => {
                router.push("/(Subject)/page")
            }}
        >
            {/* Subject Header */}
            <View style={styles.subjectHeader}>
                <Text style={styles.subjectName} numberOfLines={1}>Software Engineering</Text>
                <Text style={styles.subjectCode}>CSE24231</Text>
            </View>

            {/* Attendance Stats */}
            <View style={styles.statsRow}>
                {/* Present */}
                <View style={[styles.statItem, styles.presentItem]}>
                    <View style={styles.circleBox}>
                        <View style={styles.statNumberBox}>
                            <Text style={styles.statNumberTop}>5</Text>
                            <Text style={styles.slashDivider}>/</Text>
                            <Text style={styles.statNumberBottom}>10</Text>
                        </View>
                    </View>
                    <Text style={[styles.statLabel, styles.presentLabel]}>Present</Text>
                    <Text style={styles.statLabel}>95%</Text>
                </View>

                {/* Absent */}
                <View style={[styles.statItem, styles.absentItem]}>
                    <View style={styles.circleBox}>
                        <View style={styles.statNumberBox}>
                            <Text style={styles.statNumberTop}>5</Text>
                            <Text style={styles.slashDivider}>/</Text>
                            <Text style={styles.statNumberBottom}>10</Text>
                        </View>
                    </View>
                    <Text style={[styles.statLabel, styles.absentLabel]}>Absent</Text>
                    <Text style={styles.statLabel}>5%</Text>
                </View>

                {/* Gt */}
                <View style={[styles.statItem, styles.gtItem]}>
                    <View style={styles.circleBox}>
                        <View style={styles.statNumberBox}>
                            <Text style={styles.statNumberTop}>1</Text>
                            <Text style={styles.slashDivider}>/</Text>
                            <Text style={styles.statNumberBottom}>10</Text>
                        </View>
                    </View>
                    <Text style={[styles.statLabel, styles.gtLabel]}>Total Gt</Text>
                    <Text style={styles.statLabel}>10%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SubjectBox