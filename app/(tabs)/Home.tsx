import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/Home";
import TodayBox from "@/Components/TodayBox";
import DayOff from "@/Components/dayOff";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo } from "@expo/vector-icons";
import FloatingBox from "@/Components/floatingBox";
import { StatusBar } from "expo-status-bar";
import { useTodayClasses } from "@/hooks/useClasses";

const Home = () => {
    const [calendarSelected, setCalendarSelected] = useState<boolean>(false);
    const [createSelected, setCreateSelected] = useState<boolean>(false);

    const { data: classes, isLoading: isClassesLoading } = useTodayClasses();

    const now = new Date();
    const dayNamesFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-GB', dateOptions);
    const currentDayFull = dayNamesFull[now.getDay()];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            {/* Date Header */}
            <View style={styles.dateBox}>
                <View>
                    <Text style={styles.dateText}>{dateString}</Text>
                    <Text style={styles.dayText}>{currentDayFull}</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    marginLeft: "auto",
                    marginRight: 5,
                    gap: 15
                }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setCalendarSelected(true)}>
                        <FontAwesome name="calendar" size={22} color="#1E293B" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 6 }}>
                        <MaterialIcons name="sort" size={24} color="#1E293B" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={20} color="#1E293B" style={{ marginTop: 4 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView 
                style={styles.cardBox}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {isClassesLoading ? (
                    <ActivityIndicator size="large" color="#4F46E5" style={{ marginTop: 50 }} />
                ) : classes && classes.length > 0 ? (
                    classes.map((item) => {
                        // Render Lunch Break Divider
                        if (item.type === 'Lunch') {
                            return (
                                <View key={item.id} style={styles.lunchDividerContainer}>
                                    <View style={styles.lunchDividerLine} />
                                    <MaterialIcons name="restaurant" size={16} color="#94A3B8" />
                                    <Text style={styles.lunchDividerText}>LUNCH BREAK</Text>
                                    <View style={styles.lunchDividerLine} />
                                </View>
                            );
                        }

                        return (
                            <TodayBox
                                key={item.id}
                                id={item.id}
                                subjectCode={item.code || undefined}
                                subjectName={item.subject_name}
                                profName={item.prof_name || "N/A"}
                                startTime={item.start_time}
                                endTime={item.end_time}
                                status={item.status}
                            />
                        )
                    })
                ) : (
                    <DayOff />
                )}
            </ScrollView>

            <TouchableOpacity style={styles.floatingBox}
                activeOpacity={0.8}
                onPress={() => setCreateSelected(true)}
            >
                <Entypo name="plus" size={32} color="#FFFFFF" />
            </TouchableOpacity>

            {createSelected && <FloatingBox onClose={() => setCreateSelected(false)} />}
        </SafeAreaView>
    );
};

export default Home;
