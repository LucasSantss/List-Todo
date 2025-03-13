import React from 'react';

export default function Search({ searchTerm, setSearch }) {
  return (
    <div className='mb-4'>
      <input
        type='text'
        placeholder='Pesquisar tarefas...'
        value={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
        className='p-2 border rounded w-full'
      />
    </div>
  );
}
