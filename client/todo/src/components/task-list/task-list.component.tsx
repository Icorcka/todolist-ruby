import React from 'react';
import * as Styled from './task-list.styles';

interface Task {
  id: string;
  title: string;
}

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <Styled.List>
      {tasks.map(task => (
        <Styled.ListItem key={task.id}>
          {task.title} 
          <Styled.DeleteButton onClick={() => onDelete(task.id)}>
            Delete
          </Styled.DeleteButton>
        </Styled.ListItem>
      ))}
    </Styled.List>
  );
};

export default TaskList;
