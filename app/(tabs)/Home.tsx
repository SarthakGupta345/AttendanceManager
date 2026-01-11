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
const Home = () => {

    const [calendarSelected, setCalendarSelected] = useState<boolean>(false)

    const [selected, setSelected] = useState<boolean>(false)
    return (
        <SafeAreaView style={styles.container}>

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
                        <FontAwesome name="calendar" size={22} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        marginLeft: 6
                    }}>
                        <MaterialIcons name="sort" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={20} color="black" style={{
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
                    setSelected(true)
                }}
            >
                <Entypo name="plus" size={43} color="black" />
            </TouchableOpacity>

            {
                true && (
                    <FloatingBox />
                )
            }


            {/* <DayOff/> */}
            {/* <Holiday /> */}

        </SafeAreaView>
    );
};

export default Home;
