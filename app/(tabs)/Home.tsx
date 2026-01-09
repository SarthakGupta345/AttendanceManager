import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/Home";
import TodayBox from "@/Components/TodayBox";
import DayOff from "@/Components/dayOff";
import Holiday from "@/Components/Holiday";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Date Header */}
            <View style={styles.dateBox}>
                <Text style={styles.dateText}>23 Feb 2026</Text>
                <Text style={styles.dayText}>( Monday )</Text>
            </View>


            <ScrollView style={styles.cardBox}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 51 }}
            >

                <TodayBox />
                <TodayBox />
                <TodayBox />
                <TodayBox />
                <TodayBox />


            </ScrollView>


            {/* <DayOff/> */}
            {/* <Holiday /> */}

        </SafeAreaView>
    );
};

export default Home;
