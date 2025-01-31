const API_URL = "https://jsonplaceholder.typicode.com/todos";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority?: string;
  type?: string;
  dueDate?: string;
  details?: string;
  relatedTasks?: number[];
}

export const fetchInitialTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(`${API_URL}?_limit=5`);
    const data = await response.json();
    return data.map((task: any) => ({
      id: task.id,
      title: task.title,
      completed: task.completed,
      priority: 'no-urgency', // Valor padrão
      type: 'others'
    }));
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    return [];
  }
};