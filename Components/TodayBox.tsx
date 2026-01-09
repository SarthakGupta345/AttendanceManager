import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '@/styles/Home'
import Entypo from '@expo/vector-icons/Entypo';
const TodayBox = () => {
    const [dotSelected, setDotSelected] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>("")
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
                            setSelected("Present")
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