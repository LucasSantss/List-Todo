import React from 'react';

export default function ExcluirTarefas({ handleDeleteTodo, index }) {
  return (
    <button class="bg-green-800 text-white py-2 px-6 mr-2 rounded cursor-pointer opacity-80 transition-opacity duration-300 hover:opacity-100"
      onClick={() => handleDeleteTodo(index)} className='bg-red-500 text-white py-1 px-3 cursor-pointer rounded hover:bg-red-800'>
      Excluir
    </button>
  );
}

