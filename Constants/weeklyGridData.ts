export const CELL_WIDTH_1H = 120;
export const CELL_WIDTH_2H = CELL_WIDTH_1H * 2;
export const CELL_LUNCH = 60;
export const CELL_DAY = 70;

export type GridCell = {
  id: string;
  code?: string;
  name?: string;
  detail?: string; // Room / Prof
  width: number;
  type: "Header" | "Lecture" | "Lab" | "Tutorial" | "Lunch" | "Empty";
  isSpanningVertical?: boolean; // if true, maybe just style differently
};

export type RowData = {
  day: string;
  cells: GridCell[];
};

export const gridHeaders = [
  { id: "h1", name: "9:00 - 10:00 AM", width: CELL_WIDTH_1H },
  { id: "h2", name: "10:00 - 11:00 AM", width: CELL_WIDTH_1H },
  { id: "h3", name: "11:00 - 12:00 PM", width: CELL_WIDTH_1H },
  { id: "h4", name: "12:00 - 1:00 PM", width: CELL_WIDTH_1H },
  { id: "h5", name: "LUNCH", width: CELL_LUNCH },
  { id: "h6", name: "2:30 - 3:30 PM", width: CELL_WIDTH_1H },
  { id: "h7", name: "3:30 - 4:30 PM", width: CELL_WIDTH_1H },
  { id: "h8", name: "4:30 - 5:30 PM", width: CELL_WIDTH_1H },
];

export const weeklyGridData: RowData[] = [
  {
    day: "MON",
    cells: [
      { id: "m1", code: "HUM 24251", name: "Fund. of Entrep.", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "m2", code: "CSE 24222", name: "CS Org", detail: "AS", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "m3", code: "CSE 24221", name: "Soft. Engineering", detail: "VG", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "m4", code: "CSE 24224", name: "Data Comm.", detail: "VS", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "ml", name: "L\nU\nN\nC\nH", type: "Lunch", width: CELL_LUNCH },
      { id: "m5", code: "CSE 24227", name: "CS Org Lab", detail: "LRC B Block Lab", type: "Lab", width: CELL_WIDTH_2H },
      { id: "m6", type: "Empty", width: CELL_WIDTH_1H },
    ]
  },
  {
    day: "TUE",
    cells: [
      { id: "t1", code: "HUM 24251", name: "Fund. of Entrep.", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "t2", code: "CSE 24221", name: "Soft. Engineering", detail: "VG", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "t3", code: "CSE 24223", name: "Theory of Comp.", detail: "NK", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "t4", code: "CSE 24224", name: "Data Comm.", detail: "VS", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "tl", name: "L\nU\nN\nC\nH", type: "Lunch", width: CELL_LUNCH },
      { id: "t5", type: "Empty", width: CELL_WIDTH_1H },
      { id: "t6", type: "Empty", width: CELL_WIDTH_1H },
      { id: "t7", type: "Empty", width: CELL_WIDTH_1H },
    ]
  },
  {
    day: "WED",
    cells: [
      { id: "w1", code: "HUM 24251", name: "Fund. of Entrep.", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "w2", code: "CSE 24222", name: "CS Org", detail: "AS", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "w3", code: "CSE 24223", name: "Theory of Comp.", detail: "NK", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "w4", code: "CSE 24225", name: "Algo Design", detail: "MG", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "wl", name: "L\nU\nN\nC\nH", type: "Lunch", width: CELL_LUNCH },
      { id: "w5", code: "CSE 24226", name: "Algo Design Lab", detail: "LRC A Block Lab", type: "Lab", width: CELL_WIDTH_2H },
      { id: "w6", type: "Empty", width: CELL_WIDTH_1H },
    ]
  },
  {
    day: "THR",
    cells: [
      { id: "th1", code: "FLT", name: "Floating Tutorial", type: "Tutorial", width: CELL_WIDTH_1H },
      { id: "th2", code: "CSE 24224", name: "Data Comm.", detail: "VS", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "th3", code: "CSE 24223", name: "Theory of Comp.", detail: "NK", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "th4", code: "CSE 24225", name: "Algo Design", detail: "MG", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "thl", name: "L\nU\nN\nC\nH", type: "Lunch", width: CELL_LUNCH },
      { id: "th5", type: "Empty", width: CELL_WIDTH_1H },
      { id: "th6", type: "Empty", width: CELL_WIDTH_1H },
    ]
  },
  {
    day: "FRI",
    cells: [
      { id: "f1", code: "CSE 24221", name: "Soft. Engineering", detail: "VG", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "f2", code: "CSE 24222", name: "CS Org", detail: "AS", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "f3", code: "CSE 24225", name: "Algo Design", detail: "MG", type: "Lecture", width: CELL_WIDTH_1H },
      { id: "f4", code: "FLT", name: "Floating Tutorial", type: "Tutorial", width: CELL_WIDTH_1H },
      { id: "fl", name: "L\nU\nN\nC\nH", type: "Lunch", width: CELL_LUNCH },
      { id: "f5", type: "Empty", width: CELL_WIDTH_1H },
      { id: "f6", type: "Empty", width: CELL_WIDTH_1H },
      { id: "f7", type: "Empty", width: CELL_WIDTH_1H },
    ]
  }
];
