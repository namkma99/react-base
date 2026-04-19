import { useEffect, useMemo } from 'react';
import { useTodoViewStore } from '../stores/use-todo-view-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Plus, RefreshCcw } from 'lucide-react';

export const TodoList = () => {
  const {
    tasks,
    isLoading,
    error,
    filter,
    searchQuery,
    draftTitle,
    fetchTasks,
    createDraftTask,
    updateTask,
    clearError,
    setFilter,
    setSearchQuery,
    setDraftTitle,
  } = useTodoViewStore();

  useEffect(() => {
    void fetchTasks();
  }, [fetchTasks]);

  const filteredData = useMemo(
    () =>
      tasks
        .filter((todo) => {
          if (filter === 'completed') return todo.completed;
          if (filter === 'pending') return !todo.completed;
          return true;
        })
        .filter((todo) => todo.title.toLowerCase().includes(searchQuery.toLowerCase())),
    [tasks, filter, searchQuery]
  );

  const taskStats = useMemo(
    () => ({
      total: tasks.length,
      completed: tasks.filter((task) => task.completed).length,
      pending: tasks.filter((task) => !task.completed).length,
    }),
    [tasks]
  );

  if (isLoading && tasks.length === 0) {
    return (
      <div className="animate-pulse p-8 text-center text-muted-foreground">Loading tasks...</div>
    );
  }

  if (error && tasks.length === 0) {
    return (
      <div className="space-y-4 rounded-2xl border border-destructive/30 bg-destructive/5 p-6 text-center">
        <p className="text-sm font-medium text-destructive">{error}</p>
        <Button size="sm" variant="outline" onClick={() => void fetchTasks()}>
          Retry
        </Button>
      </div>
    );
  }

  const getStatusLabel = (status: 'todo' | 'in_progress' | 'done' | undefined) => {
    if (status === 'in_progress') return 'In Progress';
    if (status === 'done') return 'Done';
    return 'To Do';
  };

  const getNextStatus = (status: 'todo' | 'in_progress' | 'done' | undefined) => {
    if (status === 'todo') return 'in_progress';
    if (status === 'in_progress') return 'done';
    return 'todo';
  };

  const getStatusVariant = (status: 'todo' | 'in_progress' | 'done' | undefined) => {
    if (status === 'done') return 'secondary' as const;
    if (status === 'in_progress') return 'default' as const;
    return 'outline' as const;
  };

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="px-0 pt-0">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <CardTitle className="text-xl">Task System</CardTitle>
            <p className="mt-1 text-sm text-muted-foreground">
              Mock API + Zustand store + production-style UI states.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border bg-card px-4 py-3">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Total</p>
              <p className="mt-2 text-xl font-semibold">{taskStats.total}</p>
            </div>
            <div className="rounded-xl border bg-card px-4 py-3">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Done</p>
              <p className="mt-2 text-xl font-semibold">{taskStats.completed}</p>
            </div>
            <div className="rounded-xl border bg-card px-4 py-3">
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">Pending</p>
              <p className="mt-2 text-xl font-semibold">{taskStats.pending}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 px-0">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tasks..."
              className="h-10 pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Input
              className="h-10 min-w-52"
              placeholder="Create a new task..."
              value={draftTitle}
              onChange={(e) => setDraftTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') void createDraftTask();
              }}
            />
            <Button
              className="h-10"
              onClick={() => void createDraftTask()}
              disabled={!draftTitle.trim()}
            >
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {(['all', 'completed', 'pending'] as const).map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f)}
              className="h-8 px-3 capitalize"
            >
              {f}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="h-8"
            onClick={() => void fetchTasks()}
            disabled={isLoading}
          >
            <RefreshCcw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {error && (
          <div className="flex items-center justify-between rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
            <span>{error}</span>
            <Button size="sm" variant="ghost" className="h-7" onClick={clearError}>
              Dismiss
            </Button>
          </div>
        )}

        <ul className="space-y-3">
          {filteredData.slice(0, 10).map((todo) => (
            <li
              key={todo.id}
              className={`rounded-xl border p-4 transition-all hover:bg-accent/50 ${
                todo.completed ? 'bg-muted/50 opacity-75' : 'border-border bg-card shadow-sm'
              }`}
            >
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={
                        todo.completed ? 'text-muted-foreground line-through' : 'font-medium'
                      }
                    >
                      {todo.title}
                    </span>
                    <Badge variant={getStatusVariant(todo.status)}>
                      {getStatusLabel(todo.status)}
                    </Badge>
                    {todo.priority && <Badge variant="outline">{todo.priority}</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Project: {todo.project ?? 'Internal'} · Status flow backed by mock service layer
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => void updateTask(todo.id, getNextStatus(todo.status))}
                  disabled={isLoading}
                >
                  Move to {getStatusLabel(getNextStatus(todo.status))}
                </Button>
              </div>
            </li>
          ))}
          {filteredData.length === 0 && (
            <li className="rounded-xl border-2 border-dashed py-10 text-center text-muted-foreground">
              <p className="font-medium">No tasks matched your current filters.</p>
              <p className="mt-2 text-sm">
                Try another search term or create a new task to test the flow.
              </p>
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};
