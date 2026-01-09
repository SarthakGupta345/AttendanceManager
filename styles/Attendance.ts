import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffffff',
  },
  navButton: {
    padding: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  monthText: {
    fontSize: 23,
    fontWeight: '600',
    color: '#01040fff',
    letterSpacing: 0.5,
  },
  yearText: {
    fontSize: 23,
    fontWeight: '400',
    color: '#5d6165ff',
  },
  calendarContainer: {
    paddingHorizontal: 8,
  },
  weekHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekDayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  weekDayText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444648ff',
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
    position: 'relative',
  },
  dayContent: {
    width: 45,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayCircle: {
    backgroundColor: '#e8f0fe',
    borderWidth: 1,
    borderColor: '#1a73e8',
  },
  selectedCircle: {
    backgroundColor: '#1a73e8',
    borderRadius: 50,
    padding: 10
  },
  dayText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#202124',
  },
  otherMonthText: {
    color: '#dadce0',
  },
  todayText: {
    color: '#1a73e8',
    fontWeight: '600',
  },
  selectedText: {
    color: '#ffffff',
    fontWeight: '600',
  },


  // Box


  box: {
    backgroundColor: "rgba(248, 251, 251, 1)",
    width: "93%",
    height: 90,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 8,
    shadowColor: "#7a7878ff",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Android shadow
  },

  attendanceBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "rgba(149,150,147,0.4)",
  },

  noBorder: {
    borderRightWidth: 0,
  },

  numberText: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 4,
  },

  titleText: {
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.85,
  },

});










