import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '@/styles/Home'
import Entypo from '@expo/vector-icons/Entypo';
import { useMarkAbsent, useMarkPresent } from '@/hooks/useClasses';

interface props {
    name?: string,
    profName?: string,
    startTime?: string,
    endTime?: string
    presentClass?: () => void
    absentClass?: () => void
    notMarkedClass?: () => void
}

const TodayBox = ({
    startTime = "08:39 AM",
    endTime = "09:40 AM"
}: props) => {

    const [dotSelected, setDotSelected] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>("")
    const [progress, setProgress] = useState<number>(0);

    const id = 2;

    const { mutate } = useMarkPresent();
    const { mutate: markAbsent } = useMarkAbsent();
    
    // Calculate water-glass progress fill
    useEffect(() => {
        const calculateProgress = () => {
            const now = new Date();
            
            const parseTime = (timeStr: string) => {
                const [time, modifier] = timeStr.trim().split(' ');
                let [hours, minutes] = time.split(':').map(Number);
                if (hours === 12) hours = 0;
                if (modifier && modifier.toUpperCase() === 'PM') hours += 12;
                const d = new Date();
                d.setHours(hours, minutes, 0, 0);
                return d.getTime();
            };
            
            const start = parseTime(startTime);
            const end = parseTime(endTime);
            const current = now.getTime();
            
            if (current <= start) {
                setProgress(0);
            } else if (current >= end) {
                setProgress(100);
            } else {
                setProgress(((current - start) / (end - start)) * 100);
            }
        };

        calculateProgress();
        const interval = setInterval(calculateProgress, 60000); // UI updates every minute
        return () => clearInterval(interval);
    }, [startTime, endTime]);

    const presentClass = () => {
        mutate(id, {
            onSuccess: () => {
                Alert.alert("Success", "Attendance marked present");
            },
            onError: (error: any) => {
                console.log(error);
                Alert.alert('Error', 'Failed to mark attendance', [
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
                    setDotSelected(!dotSelected)
                }}
            >
                <Entypo name="dots-three-vertical" size={19} color="#64748B" />
            </TouchableOpacity>

            {
                dotSelected && (
                    <View style={styles.sideBox}>
                        <TouchableOpacity style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.sideBoxText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            {/* Time Column */}
            <View style={styles.timeBox}>
                <Text style={styles.timeText}>{startTime}</Text>

                <View style={styles.timeline}>
                    <View style={[styles.timelineFill, { height: `${progress}%` }]} />
                </View>

                <Text style={styles.timeText}>{endTime}</Text>
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
                    <TouchableOpacity 
                        style={[styles.attendancePill, selected === "Present" ? styles.presentActive : styles.present]}
                        activeOpacity={0.8}
                        onPress={() => presentClass()}
                    >
                        {selected !== "Present" && <View style={[styles.dot, { backgroundColor: "#86EFAC" }]} />}
                        <Text style={[styles.attendanceText, styles.presentText, selected === "Present" && styles.activeText]} numberOfLines={1}>Present</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.attendancePill, selected === "Absent" ? styles.absentActive : styles.absent]}
                        activeOpacity={0.8}
                        onPress={() => absentClass()}
                    >
                        {selected !== "Absent" && <View style={[styles.dot, { backgroundColor: "#FCA5A5" }]} />}
                        <Text style={[styles.attendanceText, styles.absentText, selected === "Absent" && styles.activeText]} numberOfLines={1}>Absent</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.attendancePill, selected === "Not Marked" || selected === "" ? styles.notMarkedActive : styles.notMarked]}
                        activeOpacity={0.8}
                        onPress={() => setSelected("Not Marked")}
                    >
                         {selected !== "Not Marked" && selected !== "" && <View style={[styles.dot, { backgroundColor: "#CBD5E1" }]} />}
                        <Text style={[styles.attendanceText, styles.notMarkedText, (selected === "Not Marked" || selected === "") && styles.activeText]} numberOfLines={1}>Not Marked</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TodayBox