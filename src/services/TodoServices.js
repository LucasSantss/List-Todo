import axios from 'axios';

const API_URL = 'https://localhost:3306/api/todoitems';  // Altere para o URL correto da sua API

// Função para buscar todas as tarefas
export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar as tarefas:', error);
    throw error;
  }
};

// Função para criar uma nova tarefa
export const createTodo = async (newTodo) => {
  try {
    const response = await axios.post(API_URL, newTodo);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar a tarefa:', error);
    throw error;
  }
};

// Função para atualizar uma tarefa existente
export const updateTodo = async (id, updatedTodo) => {
  try {
    await axios.put(`${API_URL}/${id}`, updatedTodo);
  } catch (error) {
    console.error('Erro ao atualizar a tarefa:', error);
    throw error;
  }
};

// Função para deletar uma tarefa
export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Erro ao deletar a tarefa:', error);
    throw error;
  }
};
