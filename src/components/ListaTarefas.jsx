import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import EditarTarefas from './EditarTarefas';
import ExcluirTarefas from './ExcluirTarefas';
import ConcluirTarefas from './ConcluirTarefa';
import { getTodos } from '../services/TodoServices';
console.log(getTodos());

export default function ListaTarefas({ todos, handleEditTodo, handleDeleteTodo, handleToggleComplete, search }) {
  // Filtrar tarefas com base no título
  const [filteredTodos, setFilteredTodos] = useState([]);
  const filterTodos = filteredTodos.filter(todo =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    // Chama a API para buscar as tarefas quando o componente for montado
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setFilteredTodos(todosData);
      } catch (error) {
        console.error('Erro ao carregar tarefas:', error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div>
      {filteredTodos.length > 0 ? (
        filterTodos.map((todo, index) => (
          <div key={todo.id} className='mb-2 p-4 border rounded-lg shadow'>
            <h3 className={`text-xl font-semibold ${todo.is_completed ? 'line-through' : ''}`}>{todo.title}</h3>
            <p className={`text-lg ${todo.is_completed ? 'line-through' : ''}`}>{todo.task}</p>
            <p className='text-sm text-gray-400'>Data: {format(new Date(todo.due_date), 'PPP')}</p>

            <ConcluirTarefas handleToggleComplete={handleToggleComplete} is_completed={todo.is_completed} index={todo} />
            <EditarTarefas handleEditTodo={handleEditTodo} index={todo} />
            <ExcluirTarefas handleDeleteTodo={handleDeleteTodo} index={todo.id} />
          </div>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}
