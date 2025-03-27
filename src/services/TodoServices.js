import { neon } from '@neondatabase/serverless';

const API_URL = 'postgresql://neondb_owner:npg_ZXWGdN95Igyc@ep-spring-hat-a5laai83-pooler.us-east-2.aws.neon.tech/Todo?sslmode=require';  // Altere para o URL correto da sua API

const sql = neon(API_URL);

const postId = 1;

//const posts = await sql('SELECT * FROM todos WHERE id = $1', [postId]);
// `post` is now [{ id: 12, title: 'My post', ... }] (or undefined)


// Função para buscar todas as tarefas
export const getTodos = async () => {
  try {
    const posts = await sql('SELECT * FROM todos ORDER BY ID DESC');
    //console.log(posts);
    return posts;
  } catch (error) {
    console.error('Erro ao buscar as tarefas:', error);
    throw error;
  }
};

// Função para criar uma nova tarefa
export const createTodo = async (newTodo) => {
  try {
    const posts = await sql('INSERT INTO todos (title, task, due_date, is_completed) VALUES ($1, $2, $3, $4) RETURNING *', [newTodo.title, newTodo.task, newTodo.due_date, newTodo.is_completed]);
    alert('Tarefa Criada com Sucesso!');
    window.location.reload();
    return posts;
  } catch (error) {
    console.error('Erro ao criar a tarefa:', error);
    throw error;
  }
};


// Função para atualizar uma tarefa existente
export const updateTodo = async (id, updatedTodos) => {
  try {
    //console.log(id, updatedTodos);
    const posts = await sql(`UPDATE todos SET task = $1, title = $2, due_date = $3, is_Completed = $4 WHERE id = ${id}`, [updatedTodos.title, updatedTodos.task, updatedTodos.due_date, updatedTodos.is_completed]);
    return posts;
  } catch (error) {
    console.error('Erro ao atualizar a tarefa:', error);
    throw error;
  }
};


// Função para deletar uma tarefa
export const deleteTodo = async (id) => {
  try {
    const posts = await sql(`DELETE FROM todos WHERE id = ${id}`);
    //console.log(posts)
    if (posts.length === 0) {
      alert('Tarefa Excluída com Sucesso!');
      window.location.reload();
      return;
    }
    return posts;
  } catch (error) {
    console.error('Erro ao deletar a tarefa:', error);
    throw error;
  }
};
