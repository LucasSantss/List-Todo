import React from 'react';

export default function ConcluirTarefas({ handleToggleComplete, isCompleted, index }) {
  return (
    <button
      onClick={() => handleToggleComplete(index)}
      className={`mr-2 ${isCompleted ? 'bg-gray-500 hover:bg-gray-800' : 'bg-green-800 hover:bg-green-600'} text-white py-1 px-4 cursor-pointer rounded `}
    >
      {isCompleted ? 'Reverter' : 'Concluir'}
    </button>
  );
}
