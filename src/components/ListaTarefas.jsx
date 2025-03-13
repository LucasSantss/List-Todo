import React from 'react';
import { format } from 'date-fns';
import EditarTarefas from './EditarTarefas';
import ExcluirTarefas from './ExcluirTarefas';
import ConcluirTarefas from './ConcluirTarefa';

export default function ListaTarefas({ todos, handleEditTodo, handleDeleteTodo, handleToggleComplete, search }) {
  // Filtrar tarefas com base no título
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <div key={todo.id} className='mb-2 p-4 border rounded-lg shadow'>
            <h3 className={`text-xl font-semibold ${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</h3>
            <p className={`text-lg ${todo.isCompleted ? 'line-through' : ''}`}>{todo.task}</p>
            <p className='text-sm text-gray-400'>Due: {format(new Date(todo.dueDate), 'PPP')}</p>

            <ConcluirTarefas handleToggleComplete={handleToggleComplete} isCompleted={todo.isCompleted} index={index} />
            <EditarTarefas handleEditTodo={handleEditTodo} index={index} />
            <ExcluirTarefas handleDeleteTodo={handleDeleteTodo} index={index} />
          </div>
        ))
      ) : (
        <p>Nenhuma tarefa encontrada.</p>
      )}
    </div>
  );
}
