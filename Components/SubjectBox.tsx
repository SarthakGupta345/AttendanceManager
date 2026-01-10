import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '@/styles/calendar'
import { router } from 'expo-router'

const SubjectBox = () => {
    return (
        <TouchableOpacity style={styles.subjectBox}
        activeOpacity={0.8}
        onPress={()=>{
            router.push("/(Subject)/page")
        }}
        >
            {/* Subject Header */}
            <View style={styles.subjectHeader}>
                <Text style={styles.subjectName}>Software Engineering</Text>
                <Text style={styles.subjectCode}>( CSE24231 )</Text>
            </View>

            {/* Attendance Stats */}
            <View style={styles.statsRow}>
                {/* Present */}
                <View style={styles.statItem}>
                    <View style={[styles.circleBox, styles.presentBorder]}>
                        <Text style={styles.statNumber}>5</Text>
                        <View style={styles.divider} />
                        <Text style={styles.statNumber}>10</Text>
                    </View>
                    <Text style={styles.statLabel}>Present 95%</Text>
                </View>

                {/* Absent */}
                <View style={styles.statItem}>
                    <View style={[styles.circleBox, styles.absentBorder]}>
                        <Text style={styles.statNumber}>5</Text>
                        <View style={styles.divider} />
                        <Text style={styles.statNumber}>10</Text>
                    </View>
                    <Text style={styles.statLabel}>Absent 5%</Text>
                </View>

                {/* Not marked */}

                <View style={styles.statItem}>
                    <View style={[styles.circleBox, styles.notMarkedBorder]}>
                        <Text style={styles.statNumber}>5</Text>
                        <View style={styles.divider} />
                        <Text style={styles.statNumber}>10</Text>
                    </View>
                    <Text style={styles.statLabel}>Not marked 5%</Text>
                </View>

                {/* Gt */}

                <View style={styles.statItem}>
                    <View style={[styles.circleBox, styles.gtBorder]}>
                        <Text style={styles.statNumber}>1</Text>
                        <View style={styles.divider} />
                        <Text style={styles.statNumber}>10</Text>
                    </View>
                    <Text style={styles.statLabel}>Gt 5%</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SubjectBox