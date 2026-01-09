import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/calendar";

const Subject = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Overall */}
            <Text style={styles.pageTitle}>Overall Attendance</Text>

            <View style={styles.topBox}>
                {/* You can add overall stats here later */}
            </View>

            {/* Subjects */}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.containerBox}
            >

                <Text style={styles.pageTitle}>Subjects</Text>



                <View style={styles.subjectBox}>
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
                </View>


                <View style={styles.subjectBox}>
                    {/* Subject Header */}
                    <View style={styles.subjectHeader}>
                        <Text style={styles.subjectName}>Design of Algorithms</Text>
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
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Subject;
