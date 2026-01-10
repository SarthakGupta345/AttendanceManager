import * as SQLite from "expo-sqlite";

export const getDB = async () => {
    const db = await SQLite.openDatabaseAsync("app.db");

    // Enable foreign keys (IMPORTANT)
    await db.execAsync(`PRAGMA foreign_keys = ON;`);

    return db;
};

export const initDB = async () => {
    const db = await getDB();

    await db.execAsync(`
  CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    theme TEXT NOT NULL DEFAULT 'light',
    attendance_criteria INTEGER DEFAULT 75,
    is_notification INTEGER DEFAULT 1,
    created_date TEXT NOT NULL DEFAULT CURRENT_DATE
  );

  CREATE TABLE IF NOT EXISTS Subjects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    code TEXT,
    prof_name TEXT,

    total_lectures INTEGER,
    completed_lectures INTEGER DEFAULT 0,
    absent_lectures INTEGER DEFAULT 0,
    gt_lectures INTEGER DEFAULT 0,

    start_date TEXT NOT NULL DEFAULT CURRENT_DATE,
    end_date TEXT NOT NULL,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,

    lecture_days INTEGER NOT NULL,

    attendance_criteria INTEGER DEFAULT 75,
    completed INTEGER DEFAULT 0,
    created_date TEXT NOT NULL DEFAULT CURRENT_DATE
  );

  CREATE TABLE IF NOT EXISTS Classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    prof_name TEXT,
    code TEXT,

    subject_id INTEGER,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,

    is_cancelled INTEGER DEFAULT 0,

    status TEXT NOT NULL DEFAULT 'not_marked'
      CHECK (status IN ('present', 'absent', 'gt', 'not_marked')),

    created_date TEXT NOT NULL DEFAULT CURRENT_DATE,

    FOREIGN KEY (subject_id) REFERENCES Subjects(id) ON DELETE CASCADE
  );
`);


    console.log("✅ Database initialized");
};
