import React, { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask } from './services/task.service';
import TaskList from './components/task-list/task-list.component';
import AddTaskForm from './components/add-tack-form/add-task-form.component';

interface Task {
  id: string;
  title: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await getTasks();
      if (loadedTasks) setTasks(loadedTasks);
    };
    loadTasks();
  }, []);

  const handleAddTask = async (title: string) => {
    const newTask = await createTask(title);
    if (newTask) setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      <AddTaskForm onAdd={handleAddTask} />
    </div>
  );
};

export default App;
