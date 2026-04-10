import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#F8FAFC',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: "#94A3B8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  monthText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: 0.5,
  },
  yearText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#64748B',
  },
  calendarContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginHorizontal: 16,
    paddingVertical: 20,
    shadowColor: "#94A3B8",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  weekHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  weekDayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  weekDayText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#94A3B8',
    textTransform: 'uppercase',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%', // 100% / 7 days
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  dayContent: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayCircle: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#C7D2FE',
  },
  selectedCircle: {
    backgroundColor: '#4F46E5',
    shadowColor: "#4F46E5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  dayText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  otherMonthText: {
    color: '#CBD5E1',
    fontWeight: '400',
  },
  todayText: {
    color: '#4F46E5',
    fontWeight: '700',
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  // Box (Attendance Summary Box)

  box: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    borderRadius: 24,
    alignSelf: "center",
    marginTop: 24,
    marginBottom: 20,
    flexDirection: "row",
    paddingVertical: 20,
    shadowColor: "#94A3B8",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 3, 
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  attendanceBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#F1F5F9",
  },

  noBorder: {
    borderRightWidth: 0,
  },

  numberText: {
    fontSize: 32,
    fontWeight: "800",
    color: '#0F172A',
    marginBottom: 4,
  },

  titleText: {
    fontSize: 12,
    fontWeight: "700",
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  markerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#4F46E5",
    position: "absolute",
    bottom: 4,
  },
});
