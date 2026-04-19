import { create } from 'zustand';
import { createTask, getTasks, updateTaskStatus } from '../services/task-service';
import type { Todo } from '../api/types';

interface TodoViewState {
  tasks: Todo[];
  isLoading: boolean;
  error: string | null;
  filter: 'all' | 'completed' | 'pending';
  searchQuery: string;
  draftTitle: string;
  fetchTasks: () => Promise<void>;
  createDraftTask: () => Promise<void>;
  updateTask: (id: number, status: 'todo' | 'in_progress' | 'done') => Promise<void>;
  clearError: () => void;
  setFilter: (filter: 'all' | 'completed' | 'pending') => void;
  setSearchQuery: (query: string) => void;
  setDraftTitle: (value: string) => void;
}

export const useTodoViewStore = create<TodoViewState>((set, get) => ({
  tasks: [],
  isLoading: false,
  error: null,
  filter: 'all',
  searchQuery: '',
  draftTitle: '',
  fetchTasks: async () => {
    set({ isLoading: true, error: null });
    try {
      const tasks = await getTasks();
      set({ tasks, isLoading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unable to load tasks',
        isLoading: false,
      });
    }
  },
  createDraftTask: async () => {
    const { draftTitle } = get();
    const title = draftTitle.trim();

    if (!title) return;

    set({ isLoading: true, error: null });
    try {
      const task = await createTask(title);
      set((state) => ({
        tasks: [task, ...state.tasks],
        draftTitle: '',
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unable to create task',
        isLoading: false,
      });
    }
  },
  updateTask: async (id, status) => {
    set({ isLoading: true, error: null });
    try {
      const updatedTask = await updateTaskStatus(id, status);
      set((state) => ({
        tasks: state.tasks.map((task) => (task.id === id ? updatedTask : task)),
        isLoading: false,
      }));
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unable to update task',
        isLoading: false,
      });
    }
  },
  clearError: () => set({ error: null }),
  setFilter: (filter) => set({ filter }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setDraftTitle: (draftTitle) => set({ draftTitle }),
}));
