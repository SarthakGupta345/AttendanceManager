import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Octicons from '@expo/vector-icons/Octicons';
import { styles } from '@/styles/Attendance';
import AttendanceBox from '@/Components/attendancesubpart';
import ScheduleBox from '@/Components/scheduleBox';
import { StatusBar } from "expo-status-bar";
import { useMonthlyMarkers, useClassesForDate } from '@/hooks/useClasses';

const months = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => { 
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const selectedDateStr = selectedDate.toISOString().split('T')[0];

  // YYYY-MM for markers fetch
  const yearMonth = useMemo(() => {
     const y = year;
     const m = (month + 1).toString().padStart(2, '0');
     return `${y}-${m}`;
  }, [year, month]);

  const { data: markers } = useMonthlyMarkers(yearMonth);
  const { data: classes, isLoading: isListLoading } = useClassesForDate(selectedDateStr);

  const isFuture = selectedDateStr > new Date().toISOString().split('T')[0];

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
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthDays - i, isCurrentMonth: false, isPrevMonth: true });
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true, isPrevMonth: false });
    }
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      days.push({ day, isCurrentMonth: false, isPrevMonth: false });
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleDayPress = (day: number, isCurrentMonth: boolean, isPrevMonth: boolean) => {
    let newDate;
    if (!isCurrentMonth) {
      if (isPrevMonth) {
        newDate = new Date(year, month - 1, day);
        setCurrentDate(new Date(year, month - 1, 1));
      } else {
        newDate = new Date(year, month + 1, day);
        setCurrentDate(new Date(year, month + 1, 1));
      }
    } else {
      newDate = new Date(year, month, day);
    }
    setSelectedDate(newDate);
  };

  const hasMarker = (day: number, isCurrentMonth: boolean) => {
      if (!isCurrentMonth || !markers) return false;
      const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      return markers.includes(dateStr);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setCurrentDate(new Date(year, month - 1, 1))} style={styles.navButton}>
            <Octicons name="chevron-left" size={28} color="#64748B" />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.monthText}>{months[month]}</Text>
            <Text style={styles.yearText}>{year}</Text>
          </View>
          <TouchableOpacity onPress={() => setCurrentDate(new Date(year, month + 1, 1))} style={styles.navButton}>
            <Octicons name="chevron-right" size={28} color="#64748B" />
          </TouchableOpacity>
        </View>

        <View style={styles.calendarContainer}>
          <View style={styles.weekHeader}>
            {weekDays.map((day, index) => (
              <View key={index} style={styles.weekDayCell}>
                <Text style={styles.weekDayText}>{day}</Text>
              </View>
            ))}
          </View>

          <View style={styles.daysGrid}>
            {calendarDays.map((item, index) => {
              const today = item.day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() && item.isCurrentMonth;
              const selected = item.day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear() && item.isCurrentMonth;
              const marked = hasMarker(item.day, item.isCurrentMonth);

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
                  {marked && <View style={styles.markerDot} />}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <AttendanceBox selectedDate={selectedDateStr} />

        {/* Class List for Selected Date */}
        {!isFuture && (
           <View style={{ marginTop: 10 }}>
              <Text style={{ 
                marginHorizontal: 24, 
                fontSize: 16, 
                fontWeight: '700', 
                color: '#1E293B',
                marginBottom: 10
              }}>Classes for this Day</Text>
              
              {isListLoading ? (
                  <ActivityIndicator color={"#4F46E5"} style={{ marginTop: 20 }} />
              ) : classes && classes.length > 0 ? (
                  classes.map((cls, idx) => (
                      <ScheduleBox 
                        key={cls.id}
                        number={idx + 1}
                        subjectName={cls.class_name}
                        code={cls.code || "N/A"}
                        startTime={cls.start_time}
                        endTime={cls.end_time}
                        status={cls.status}
                      />
                  ))
              ) : (
                  <Text style={{ 
                    textAlign: 'center', 
                    color: '#94A3B8', 
                    marginTop: 20,
                    fontStyle: 'italic'
                  }}>No classes found for this date.</Text>
              )}
           </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calendar;

