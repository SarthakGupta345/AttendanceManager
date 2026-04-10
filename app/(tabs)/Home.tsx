import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/Home";
import TodayBox from "@/Components/TodayBox";
import DayOff from "@/Components/dayOff";
import Holiday from "@/Components/Holiday";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import FloatingBox from "@/Components/floatingBox";
import FloatingCalendar from "@/Components/floatingCalendar";
import { StatusBar } from "expo-status-bar";

const Home = () => {

    const [calendarSelected, setCalendarSelected] = useState<boolean>(false)
    const [createSelected, setCreateSelected] = useState<boolean>(false)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />

            {/* calendar Selected */}


            {/* Date Header */}
            <View style={styles.dateBox}>
                <Text style={styles.dateText}>23 Feb 2026</Text>
                <Text style={styles.dayText}>( Monday )</Text>
                <View style={{
                    flexDirection: "row",
                    marginLeft: "auto",
                    marginRight: 5,
                    gap: 15
                }}>

                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => {
                            setCalendarSelected(true)
                        }}
                    >
                        <FontAwesome name="calendar" size={22} color="#1E293B" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        marginLeft: 6
                    }}>
                        <MaterialIcons name="sort" size={24} color="#1E293B" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={20} color="#1E293B" style={{
                            marginTop: 4
                        }} />
                    </TouchableOpacity>
                </View>
            </View>





            <ScrollView style={styles.cardBox}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 51 }}
            >

                <TodayBox />
                <TodayBox />



            </ScrollView>

            <TouchableOpacity style={styles.floatingBox}
                activeOpacity={0.8}
                onPress={() => {
                    setCreateSelected(true)
                }}
            >
                <Entypo name="plus" size={32} color="#FFFFFF" />
            </TouchableOpacity>

            {
                false && (
                    <FloatingBox />
                )
            }


            {/* <DayOff/> */}
            {/* <Holiday /> */}

        </SafeAreaView>
    );
};

export default Home;
