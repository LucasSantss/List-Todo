import React, { useState } from 'react';
import AddTarefas from './components/AddTarefas';
import ListaTarefas from './components/ListaTarefas';
import Search from './components/Search';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState('');

  // Função para adicionar ou editar tarefas
  const addTodo = (newTodo, index) => {
    const updatedTodos = index !== null ? [...todos] : [...todos, newTodo];
    if (index !== null) updatedTodos[index] = newTodo; // Atualiza a tarefa editada
    setTodos(updatedTodos);
    setEditingTodo(null);
    setEditingIndex(null);
  };

  // Função para excluir tarefas
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Função para editar tarefas (preenche o formulário com os dados da tarefa)
  const handleEditTodo = (index) => {
    setEditingTodo(todos[index]);
    setEditingIndex(index);
  };

  // Função para concluir ou reverter a conclusão da tarefa
  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  return (
    <div class="max-w-400 mx-auto mb-[300px] bg-indigo-200 p-5 rounded-xl">
      {/* Componente de busca */}
      <Search search={search} setSearch={setSearch} />

      <AddTarefas addTodo={addTodo} editingTodo={editingTodo} editingIndex={editingIndex} />

      <ListaTarefas
        todos={todos}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleComplete={handleToggleComplete}
        search={search} // Passa o termo de busca para o componente de lista
      />
    </div>
  );
}
