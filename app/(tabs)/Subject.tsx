import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/calendar";
import SubjectBox from "@/Components/SubjectBox";
import Entypo from '@expo/vector-icons/Entypo';
import { useAttendanceStats, useSubjectsStats } from "@/hooks/useClasses";

const Subject = () => {
    const { data: overallStats } = useAttendanceStats();
    const { data: subjects, isLoading } = useSubjectsStats();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.pageTitle}>Attendance Summary</Text>

            {/* Overall Status Card (Moved from Home) */}
            <View style={styles.statsCard}>
                <Text style={styles.statsHeader}>Global Attendance</Text>
                <View style={styles.statsMainRow}>
                    <Text style={styles.statsPercentage}>{overallStats?.percentage?.toFixed(0) || 0}%</Text>
                    <Text style={styles.statsSubValue}>{overallStats?.present || 0} / {overallStats?.total || 0} Classes</Text>
                </View>
            </View>

            {/* Subjects List */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.containerBox}
            >
                <Text style={styles.pageTitle}>Subjects</Text>

                {isLoading ? (
                    <ActivityIndicator size="large" color="#4F46E5" style={{ marginTop: 20 }} />
                ) : subjects && subjects.length > 0 ? (
                    subjects.map((item, index) => (
                        <SubjectBox 
                            key={index}
                            name={item.subject_name}
                            code={item.code || "N/A"}
                            present={item.present}
                            absent={item.absent}
                            total={item.total}
                        />
                    ))
                ) : (
                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <Text style={{ color: '#64748B' }}>No attendance data yet.</Text>
                    </View>
                )}
            </ScrollView>

            <View style={styles.floatingBox}>
                <Entypo name="plus" size={44} color="#FFF" />
            </View>
        </SafeAreaView>
    );
};

export default Subject;
