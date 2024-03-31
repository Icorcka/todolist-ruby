import React, { useState } from 'react';
import * as Styled from './add-task-form.styles';

interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(title);
    setTitle('');
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <Styled.SubmitButton type="submit">Add Task</Styled.SubmitButton>
    </Styled.Form>
  );
};

export default AddTaskForm;
