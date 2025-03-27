import React from 'react';
import { updateTodo } from '../services/TodoServices';

export default function EditarTarefas({ handleEditTodo, index }) {
  return (
    <button
      onClick={() => handleEditTodo(index)} className='mr-2 bg-yellow-400 text-white py-1 px-3 cursor-pointer rounded hover:bg-yellow-600'>
      Editar
    </button>
  );
}