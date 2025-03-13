import React, { useState, useEffect } from 'react';

export default function AddTarefas({ addTodo, editingTodo, editingIndex }) {
  const [newTodo, setNewTodo] = useState({ id: '', task: '', dueDate: '', title: '' });

  // Preenche o formulário com os dados da tarefa ao editar
  useEffect(() => {
    if (editingTodo) {
      setNewTodo(editingTodo);
    }
  }, [editingTodo]);

  const handleAddTodo = () => {
    if (!newTodo.task || !newTodo.dueDate || !newTodo.title) return;

    // Verifica se é uma nova tarefa ou uma edição
    if (!newTodo.id) {
      newTodo.id = Date.now();  // Gera um ID único
      console.log(Date.value)
    }

    addTodo(newTodo, editingIndex);
    setNewTodo({ id: '', task: '', dueDate: '', title: '' });
  };
  return (
    <div className='p-4 mb-4 border rounded-lg shadow'>
      <h1 class="text-4xl font-bold text-center">{editingIndex !== null ? 'Editar Tarefa' : 'Adicionar Tarefa'}</h1>
      <input
        placeholder='Título da sua tarefa'
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        className='mb-2 p-2 border rounded w-full'
      />
      <input
        placeholder='Descreva sua tarefa'
        value={newTodo.task}
        onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
        className='mb-2 p-2 border rounded w-full'
      />
      <input
        type='date'
        value={newTodo.dueDate}
        onChange={(e) => setNewTodo({ ...newTodo, dueDate: e.target.value })}
        className='mb-2 p-2 border rounded w-full'
      />
      <button class="bg-green-800 text-white py-2 px-6 mr-2 rounded cursor-pointer opacity-80 transition-opacity duration-300 hover:opacity-100"
        onClick={handleAddTodo} className='w-full bg-slate-800 text-white py-2 px-4 cursor-pointer  rounded  hover:bg-slate-600'>
        {editingIndex !== null ? 'Salvar Edição' : 'Adicionar Tarefa'}
      </button>
    </div>
  )
}