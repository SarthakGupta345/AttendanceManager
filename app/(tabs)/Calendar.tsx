import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Octicons from '@expo/vector-icons/Octicons';
import { styles } from '@/styles/Attendance';
import AttendanceBox from '@/Components/attendancesubpart';

const months = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
import { StatusBar } from "expo-status-bar";
const Calendar = () => { 
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const prevMonthDays = getDaysInMonth(year, month - 1);

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];

    // Add days from previous month
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isPrevMonth: true,
      });
    }

    // Add current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        isPrevMonth: false,
      });
    }

    // Add days from next month to complete the grid
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        isPrevMonth: false,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const isToday = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return false;
    const today = new Date();
    return day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();
  };

  const isSelected = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return false;
    return day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear();
  };

  const handleDayPress = (day: number, isCurrentMonth: boolean, isPrevMonth: boolean) => {
    if (!isCurrentMonth) {
      if (isPrevMonth) {
        setCurrentDate(new Date(year, month - 1, 1));
        setSelectedDate(new Date(year, month - 1, day));
      } else {
        setCurrentDate(new Date(year, month + 1, 1));
        setSelectedDate(new Date(year, month + 1, day));
      }
    } else {
      setSelectedDate(new Date(year, month, day));
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Month Navigation Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goToPreviousMonth} style={styles.navButton}>
            <Octicons name="chevron-left" size={28} color="#64748B" />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.monthText}>{months[month]}</Text>
            <Text style={styles.yearText}>{year}</Text>
          </View>

          <TouchableOpacity onPress={goToNextMonth} style={styles.navButton}>
            <Octicons name="chevron-right" size={28} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Calendar Grid */}
        <View style={styles.calendarContainer}>
          {/* Week Days Header */}
          <View style={styles.weekHeader}>
            {weekDays.map((day, index) => (
              <View key={index} style={styles.weekDayCell}>
                <Text style={styles.weekDayText}>{day}</Text>
              </View>
            ))}
          </View>

          {/* Calendar Days Grid */}
          <View style={styles.daysGrid}>
            {calendarDays.map((item, index) => {
              const today = isToday(item.day, item.isCurrentMonth);
              const selected = isSelected(item.day, item.isCurrentMonth);

              return (
                <TouchableOpacity
                  key={index}
                  style={styles.dayCell}
                  onPress={() => handleDayPress(item.day, item.isCurrentMonth, item.isPrevMonth)}
                  activeOpacity={0.6}
                >
                  <View style={[
                    styles.dayContent,
                    today && styles.todayCircle,
                    selected && styles.selectedCircle,
                  ]}>
                    <Text
                      style={[
                        styles.dayText,
                        !item.isCurrentMonth && styles.otherMonthText,
                        today && styles.todayText,
                        selected && styles.selectedText,
                      ]}
                    >
                      {item.day}
                    </Text>
                  </View>

                </TouchableOpacity>
              );
            })}
          </View>


        </View>
        <AttendanceBox />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calendar;

