const API_URL = import.meta.env.VITE_API_URL;

console.log(API_URL);

export const getTasks = async (userId) => {
  const response = await fetch(`${API_URL}/tasks?userId=${userId}`);
  return response.json();
};

export const createTask = async (taskData) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });

  return response.json();
};
export const deleteTask = async (taskId) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "DELETE",
  });

  return response.json();
};
export const updateTask = async (taskId, updatedData) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  return response.json();
};
