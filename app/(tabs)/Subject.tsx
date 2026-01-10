import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/calendar";
import SubjectBox from "@/Components/SubjectBox";
import Entypo from '@expo/vector-icons/Entypo';
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



                <SubjectBox />
                <SubjectBox />



            </ScrollView>

            <View style={styles.floatingBox}>
                <Entypo name="plus" size={44} color="black" />

            </View>
        </SafeAreaView>
    );
};

export default Subject;
