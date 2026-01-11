import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from '@/styles/Home'
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from "expo-linear-gradient";
import { useMarkAbsent, useMarkPresent } from '@/hooks/useClasses';

interface props {
    name: string,
    profName: string,
    startTime: string,
    endTime: string
    presentClass: () => void
    absentClass: () => void
    notMarkedClass: () => void
}

const TodayBox = () => {

    const [dotSelected, setDotSelected] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>("")

    const id = 2;

    const { mutate } = useMarkPresent();
    const { mutate: markAbsent } = useMarkAbsent();
    const presentClass = () => {
        mutate(id, {
            onSuccess: () => {
                Alert.alert("Success", "Attendance marked present");
            },
            onError: (error: any) => {
                console.log(error);
                Alert.alert('Alert Title', 'My Alert Msg', [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                        onPress: () => console.log('Cancel Pressed'),
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
            },
        });

        setSelected("Present")
    };

    const absentClass = () => {
        setSelected("Absent")
        markAbsent(id);
    };

    return (
        <View style={styles.todayBox}>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconBox}
                onPress={() => {
                    setDotSelected(true)
                }}
            >
                <Entypo name="dots-three-vertical" size={19} color="black" />
            </TouchableOpacity>

            {
                dotSelected && (
                    <View style={styles.sideBox}>
                        <TouchableOpacity>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            {/* Time Column */}
            <View style={styles.timeBox}>
                <Text style={styles.timeText}>8:39 AM</Text>

                <View style={styles.timeline}>
                    <LinearGradient
                        colors={["#1a8321c6", "#83ba7dfe"]}
                        style={styles.topBackground}
                    />

                    <LinearGradient
                        colors={["#83ba7dfe", "#ffffffc6"]}
                        style={styles.bottomBackground}
                    />
                </View>

                <Text style={styles.timeText}>9:40 AM</Text>
            </View>

            {/* Details */}
            <View style={styles.detailsBox}>
                <View>
                    <Text style={styles.titleText}>Software Engineering</Text>
                    <Text style={styles.codeText}>(CSE24231)</Text>
                </View>

                <Text style={styles.profText}>Prof. Michael S. Smith</Text>

                {/* Attendance */}
                <View style={styles.attendanceBox}>
                    <TouchableOpacity style={[styles.attendancePill, styles.present]}
                        activeOpacity={0.8}
                        onPress={() => {
                            presentClass()
                        }}
                    >
                        {
                            selected == "Present" && (
                                <View style={[styles.dot, { backgroundColor: "green" }]} />
                            )
                        }
                        <Text style={styles.attendanceText}>Present</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.attendancePill, styles.absent]}
                        activeOpacity={0.8}
                        onPress={() => {
                            setSelected("Absent")
                        }}
                    >
                        {
                            selected == "Absent" && (
                                <View style={[styles.dot, { backgroundColor: "red" }]} />
                            )
                        }
                        <Text style={styles.attendanceText}>Absent</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.attendancePill, styles.notMarked]}
                        activeOpacity={0.8}
                        onPress={() => {
                            setSelected("Not Marked")
                        }}
                    >
                        {
                            (selected == "Not Marked" || selected == "") && (
                                <View style={[styles.dot, { backgroundColor: "gray" }]} />
                            )
                        }
                        <Text style={styles.attendanceText}>Not Marked</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TodayBox