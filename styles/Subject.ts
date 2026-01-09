import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
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
    fontSize: 20,
    fontWeight: '500',
    color: '#202124',
    letterSpacing: 0.5,
  },
  yearText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#5f6368',
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
    fontSize: 14,
    fontWeight: '500',
    color: '#5f6368',
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
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayCircle: {
    backgroundColor: '#e8f0fe',
    borderWidth: 1,
    borderColor: '#1a73e8',
    borderRadius:50,
  },
  selectedCircle: {
    backgroundColor: '#1a73e8',
    borderRadius:50,
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
  taskDot: {
    position: 'absolute',
    bottom: 4,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#1a73e8',
  },

  box:{
    flexDirection:"row",
    flexWrap:"wrap",
    gap:10,
    backgroundColor:"red",

  },
  individualBox:{
    width:"40%",
    height:"40%",
    backgroundColor:"red",
    borderRadius:10,
    padding:10
  }
});