import type { Todo } from './types';
import { getTasks } from '../services/task-service';

export const getTodos = (): Promise<Todo[]> => {
  return getTasks();
};
