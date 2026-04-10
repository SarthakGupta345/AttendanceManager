export type RoutineClass = {
  id: string;
  time: string;
  subjectCode: string;
  subjectName: string;
  facultyRoom: string;
  type: 'Lecture' | 'Lab' | 'Lunch' | 'Tutorial';
};

export const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THR', 'FRI'] as const;

export const routineData: Record<string, RoutineClass[]> = {
  MON: [
    { id: 'm1', time: '9:00 - 10:00 AM', subjectCode: 'HUM 24251', subjectName: 'Fundamentals of Entrepreneurship', facultyRoom: 'Lecture', type: 'Lecture' },
    { id: 'm2', time: '10:00 - 11:00 AM', subjectCode: 'CSE 24222', subjectName: 'Computer System Organization', facultyRoom: 'Prof. Akash Sinha (AS)', type: 'Lecture' },
    { id: 'm3', time: '11:00 - 12:00 PM', subjectCode: 'CSE 24221', subjectName: 'Software Engineering', facultyRoom: 'Prof. Vikram Garg (VG)', type: 'Lecture' },
    { id: 'm4', time: '12:00 - 1:00 PM', subjectCode: 'CSE 24224', subjectName: 'Data Communication', facultyRoom: 'Prof. Vaibhav Soni (VS)', type: 'Lecture' },
    { id: 'ml', time: '1:00 - 2:30 PM', subjectCode: 'LUNCH', subjectName: 'LUNCH BREAK', facultyRoom: '--', type: 'Lunch' },
    { id: 'm5', time: '2:30 - 4:30 PM', subjectCode: 'CSE 24227', subjectName: 'Computer System Org Lab', facultyRoom: 'LRC B Block Lab (AS/RW/YP/PhD...)', type: 'Lab' },
  ],
  TUE: [
    { id: 't1', time: '9:00 - 10:00 AM', subjectCode: 'HUM 24251', subjectName: 'Fundamentals of Entrepreneurship', facultyRoom: 'Lecture', type: 'Lecture' },
    { id: 't2', time: '10:00 - 11:00 AM', subjectCode: 'CSE 24221', subjectName: 'Software Engineering', facultyRoom: 'Prof. Vikram Garg (VG)', type: 'Lecture' },
    { id: 't3', time: '11:00 - 12:00 PM', subjectCode: 'CSE 24223', subjectName: 'Theory of Computation', facultyRoom: 'Prof. Nilay Khare (NK)', type: 'Lecture' },
    { id: 't4', time: '12:00 - 1:00 PM', subjectCode: 'CSE 24224', subjectName: 'Data Communication', facultyRoom: 'Prof. Vaibhav Soni (VS)', type: 'Lecture' },
    { id: 'tl', time: '1:00 - 2:30 PM', subjectCode: 'LUNCH', subjectName: 'LUNCH BREAK', facultyRoom: '--', type: 'Lunch' },
    { id: 't5', time: '2:30 - 4:30 PM', subjectCode: 'CSE 24227', subjectName: 'Computer System Org Lab', facultyRoom: 'LRC B Block Lab (AS/RW/YP/PhD...)', type: 'Lab' },
  ],
  WED: [
    { id: 'w1', time: '9:00 - 10:00 AM', subjectCode: 'HUM 24251', subjectName: 'Fundamentals of Entrepreneurship', facultyRoom: 'Lecture', type: 'Lecture' },
    { id: 'w2', time: '10:00 - 11:00 AM', subjectCode: 'CSE 24222', subjectName: 'Computer System Organization', facultyRoom: 'Prof. Akash Sinha (AS)', type: 'Lecture' },
    { id: 'w3', time: '11:00 - 12:00 PM', subjectCode: 'CSE 24223', subjectName: 'Theory of Computation', facultyRoom: 'Prof. Nilay Khare (NK)', type: 'Lecture' },
    { id: 'w4', time: '12:00 - 1:00 PM', subjectCode: 'CSE 24225', subjectName: 'Algorithm Design & Analysis', facultyRoom: 'Prof. Manasi Gyanchandani (MG)', type: 'Lecture' },
    { id: 'wl', time: '1:00 - 2:30 PM', subjectCode: 'LUNCH', subjectName: 'LUNCH BREAK', facultyRoom: '--', type: 'Lunch' },
    { id: 'w5', time: '2:30 - 4:30 PM', subjectCode: 'CSE 24226', subjectName: 'Algorithm Design & Analysis Lab', facultyRoom: 'LRC A Block Lab (MG/SB/PK/AC/PhD...)', type: 'Lab' },
  ],
  THR: [
    { id: 'th1', time: '9:00 - 10:00 AM', subjectCode: 'FLT TUT', subjectName: 'Floating Tutorial', facultyRoom: 'Tutorial Block', type: 'Tutorial' },
    { id: 'th2', time: '10:00 - 11:00 AM', subjectCode: 'CSE 24224', subjectName: 'Data Communication', facultyRoom: 'Prof. Vaibhav Soni (VS)', type: 'Lecture' },
    { id: 'th3', time: '11:00 - 12:00 PM', subjectCode: 'CSE 24223', subjectName: 'Theory of Computation', facultyRoom: 'Prof. Nilay Khare (NK)', type: 'Lecture' },
    { id: 'th4', time: '12:00 - 1:00 PM', subjectCode: 'CSE 24225', subjectName: 'Algorithm Design & Analysis', facultyRoom: 'Prof. Manasi Gyanchandani (MG)', type: 'Lecture' },
    { id: 'thl', time: '1:00 - 2:30 PM', subjectCode: 'LUNCH', subjectName: 'LUNCH BREAK', facultyRoom: '--', type: 'Lunch' },
    { id: 'th5', time: '2:30 - 4:30 PM', subjectCode: 'CSE 24226', subjectName: 'Algorithm Design & Analysis Lab', facultyRoom: 'LRC A Block Lab (MG/SB/PK/AC/PhD...)', type: 'Lab' },
  ],
  FRI: [
    { id: 'f1', time: '9:00 - 10:00 AM', subjectCode: 'CSE 24221', subjectName: 'Software Engineering', facultyRoom: 'Prof. Vikram Garg (VG)', type: 'Lecture' },
    { id: 'f2', time: '10:00 - 11:00 AM', subjectCode: 'CSE 24222', subjectName: 'Computer System Organization', facultyRoom: 'Prof. Akash Sinha (AS)', type: 'Lecture' },
    { id: 'f3', time: '11:00 - 12:00 PM', subjectCode: 'CSE 24225', subjectName: 'Algorithm Design & Analysis', facultyRoom: 'Prof. Manasi Gyanchandani (MG)', type: 'Lecture' },
    { id: 'f4', time: '12:00 - 1:00 PM', subjectCode: 'FLT TUT', subjectName: 'Floating Tutorial', facultyRoom: 'Tutorial Block', type: 'Tutorial' },
  ]
};
