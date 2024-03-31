import axios from 'axios';

const BASE_URL = 'http://localhost:3000/tasks';

export const getTasks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks", error);
  }
};

export const createTask = async (title: string) => {
  try {
    const response = await axios.post(BASE_URL, { title });
    return response.data;
  } catch (error) {
    console.error("Error creating task", error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting task", error);
  }
};
