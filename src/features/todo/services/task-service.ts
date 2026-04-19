import type { Todo } from '../api/types';

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

const createTodo = (todo: Todo): Todo => ({ ...todo });

let taskDb: Todo[] = [
  createTodo({
    id: 101,
    userId: 1,
    title: 'Finalize onboarding flow audit',
    completed: false,
    status: 'in_progress',
    priority: 'high',
    project: 'TaskMaster Pro',
  }),
  createTodo({
    id: 102,
    userId: 1,
    title: 'Refactor analytics widget states',
    completed: false,
    status: 'todo',
    priority: 'medium',
    project: 'Dashboard',
  }),
  createTodo({
    id: 103,
    userId: 1,
    title: 'Ship task search and filter experience',
    completed: true,
    status: 'done',
    priority: 'high',
    project: 'Tasks',
  }),
  createTodo({
    id: 104,
    userId: 1,
    title: 'Document API service boundaries',
    completed: false,
    status: 'todo',
    priority: 'low',
    project: 'Architecture',
  }),
];

export const getTasks = async (): Promise<Todo[]> => {
  await delay();
  return taskDb.map(createTodo);
};

export const createTask = async (title: string): Promise<Todo> => {
  await delay(350);

  const task: Todo = {
    id: Date.now(),
    userId: 1,
    title,
    completed: false,
    status: 'todo',
    priority: 'medium',
    project: 'Tasks',
  };

  taskDb = [task, ...taskDb];
  return createTodo(task);
};

export const updateTaskStatus = async (
  id: number,
  status: Exclude<Todo['status'], undefined>
): Promise<Todo> => {
  await delay(250);

  const currentTask = taskDb.find((task) => task.id === id);
  if (!currentTask) {
    throw new Error('Task not found');
  }

  const updatedTask: Todo = {
    ...currentTask,
    status,
    completed: status === 'done',
  };

  taskDb = taskDb.map((task) => (task.id === id ? updatedTask : task));
  return createTodo(updatedTask);
};
