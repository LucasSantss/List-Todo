import { neon } from '@neondatabase/serverless';

const API_URL = 'postgresql://neondb_owner:npg_ZXWGdN95Igyc@ep-spring-hat-a5laai83-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require';  // Altere para o URL correto da sua API

const sql = neon(API_URL);

const postId = 1;

//const posts = await sql('SELECT * FROM todos WHERE id = $1', [postId]);
// `post` is now [{ id: 12, title: 'My post', ... }] (or undefined)


// Função para buscar todas as tarefas
export const getTodos = async () => {

  try {
    const posts = await sql('SELECT * FROM todos ORDER BY ID DESC');
    return posts;
  } catch (error) {
    console.error('Erro ao buscar as tarefas:', error);
    throw error;
  }
};


export const getLastTodos = async () => {
  try {
    const posts = await sql('SELECT id FROM todos ORDER BY ID DESC LIMIT 1');
    const newId = posts[0].id + 1;
    console.log(newId);
    return newId;
  } catch (error) {
    console.error('Erro ao buscar as tarefas:', error);
    throw error;
  }
};
console.log(getLastTodos());

// Função para criar uma nova tarefa
export const createTodo = async (newTodo) => {
  try {
    const posts = await sql('INSERT INTO todos (title, task, dueDate, isCompleted) VALUES ($1, $2, $3, $4) RETURNING *', [newTodo.title, newTodo.task, newTodo.dueDate, newTodo.isCompleted, newTodo.id]);
    //const posts = await sql('INSERT * FROM todos', newTodo)
    return posts;
  } catch (error) {
    console.error('Erro ao criar a tarefa:', error);
    throw error;
  }
};

// Função para atualizar uma tarefa existente
export const updateTodo = async (id, updatedTodo) => {
  try {
    const posts = await sql(`UPDATE todos SET task = $1, title = $2, dueDate = $3, isCompleted = $4 WHERE id = ${id}`, [updatedTodo.task, updatedTodo.title, updatedTodo.dueDate, updatedTodo.isCompleted]);
    //const posts = await sql(`SELECT * FROM todos WHERE id = ${id}`, updatedTodo);
    return posts;
    //await axios.put(`${posts}/${id}`, updatedTodo);
  } catch (error) {
    console.error('Erro ao atualizar a tarefa:', error);
    throw error;
  }
};

// Função para deletar uma tarefa
export const deleteTodo = async (id) => {
  try {
    const posts = await sql('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
    //const posts = await sql(`DELETE * FROM todos WHERE id = ${id}`);
    return posts;
    //const posts = await sql('SELECT * FROM todos');
  } catch (error) {
    console.error('Erro ao deletar a tarefa:', error);
    throw error;
  }
};
