import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '@/styles/schedule'
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import ScheduleBox from '@/Components/scheduleBox';
const SchedulePage = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.dateBox}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        router.back()
                    }}
                >
                    <Feather name="arrow-left" size={25} color="black" />
                </TouchableOpacity>
                <View style={{
                    flexDirection: "row",
                    gap: 10
                }}>
                    <Text style={styles.dateText}>28 feb 2023</Text>
                    <Text style={styles.dateText}>( Monday )</Text>
                </View>

            </View>
            <ScrollView style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 20 }}
            >

                <ScheduleBox />
                <ScheduleBox />
                <ScheduleBox />
                <ScheduleBox />
                <ScheduleBox />
                <ScheduleBox />

                <ScheduleBox />
                <ScheduleBox />
                <ScheduleBox />
                <ScheduleBox />
                <ScheduleBox />
                <ScheduleBox />


            </ScrollView>
        </SafeAreaView>

    )
}

export default SchedulePage