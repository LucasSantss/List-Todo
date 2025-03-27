import React, { useState } from 'react';
import AddTarefas from './components/AddTarefas';
import ListaTarefas from './components/ListaTarefas';
import Search from './components/Search';
import { createTodo, deleteTodo, getTodos, updateTodo } from './services/TodoServices';

export default function App() {
  const [todos, setTodos] = useState([getTodos()]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [search, setSearch] = useState('');

  // Função para adicionar ou editar tarefas
  const addTodo = (newTodo, index) => {
    const updatedTodos = [...todos]
    if (index !== null && index !== undefined) {
      updatedTodos[index] = newTodo
      setEditingIndex(newTodo); // Atualiza a tarefa existente
      updateTodo(newTodo.id, newTodo);
    } else {
      updatedTodos.push(newTodo)
      createTodo(newTodo); // Chama apenas ao adicionar nova tarefa
    }; // Atualiza a tarefa editada
    setTodos(updatedTodos);
    setEditingTodo(null);
    setEditingIndex(null);
  };

  //  Função para excluir tarefas
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    deleteTodo(index);
    setTodos(updatedTodos);
  };

  // Função para editar tarefas 
  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setEditingTodo(index)
  };

  // Função para concluir ou reverter a conclusão da tarefa
  const handleToggleComplete = (index) => {
    console.log(index.due_date);
    const updatedTodos = (index);
    updatedTodos.is_completed = !updatedTodos.is_completed;
    setTodos(updatedTodos);
    updateTodo(index.id, index);
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
