const API_URL = "https://jsonplaceholder.typicode.com/todos";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchInitialTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(`${API_URL}?_limit=5`);
    const data = await response.json();
    return data.map((task: any) => ({
      id: task.id,
      title: task.title,
      completed: task.completed
    }));
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    return [];
  }
};