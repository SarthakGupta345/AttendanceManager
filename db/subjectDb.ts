import { getDB } from "./database";

export type Task = {
  id: number;
  title: string;
  completed: number;
};

export const getTasks = async (): Promise<Task[]> => {
  const db = await getDB();
  const result = await db.getAllAsync<Task>(
    "SELECT * FROM tasks ORDER BY id DESC;"
  );
  return result;
};

export const createTask = async (title: string) => {
  const db = await getDB();
  await db.runAsync(
    "INSERT INTO tasks (title, completed) VALUES (?, 0);",
    [title]
  );
};
