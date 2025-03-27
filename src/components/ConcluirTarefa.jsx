import React from 'react';

export default function ConcluirTarefas({ handleToggleComplete, is_completed, index }) {
  return (
    <button
      onClick={() => handleToggleComplete(index)}
      className={`mr-2 ${is_completed ? 'bg-gray-500 hover:bg-gray-800' : 'bg-green-800 hover:bg-green-600'} text-white py-1 px-4 cursor-pointer rounded `}
    >
      {is_completed ? 'Reverter' : 'Concluir'}
    </button>

  );
}


