import React, { useEffect, useState } from 'react';
import { getTodos } from '../services';  // Importa o serviço criado acima

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Chama a API para buscar as tarefas quando o componente for montado
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.task} - {todo.isCompleted ? 'Concluída' : 'Pendente'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
