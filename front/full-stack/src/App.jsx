import React from 'react'
import ReactDOM from 'react-dom/client'
import iconDelete from './../public/images/delete.png';
import iconEdit from './../public/images/edit.png';
import iconPlus from './../public/images/plus.png';


import { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/characters')
      .then(res => res.json())
      .then(data => setCharacters(data.characters))
      .catch(err => console.error('Erreur:', err));
  }, []); // [] = se lance une seule fois au montage du composant

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-500 text-center">List of characters</h1>
      <table>
        <tr className='bg-gray-400'>
          <th className='text-white px-15 py-1'>Id</th>
          <th className='text-white px-15 py-1'>Name</th>
          <th className='text-white px-15 py-1'>Realname</th>
          <th className='text-white px-15 py-1'>Universe</th>
          <th className='text-white px-15 py-1'>Actions</th>
        </tr>
        {characters.map(char => (
          <tr key={char.id} className="">
            <td className='text-center border-b border-gray-300 border-solid text-gray-500'>{char.id}</td>
            <td className='text-center border-b border-gray-300 border-solid text-gray-500'>{char.name}</td>
            <td className='text-center border-b border-gray-300 border-solid text-gray-500'>{char.realName}</td>
            <td className='text-center border-b border-gray-300 border-solid text-gray-500'>{char.universe}</td>
            <td className='text-center flex gap-5 justify-center items-center py-2 border-b border-gray-300 border-solid'>
              <button className="border-2 border-green-500 border-solid rounded p-1 hover:bg-green-200 hover:border-green-200 hover:cursor-pointer">
                <img src={iconEdit} alt="" className='w-5' />
              </button>
              <button className="border-2 border-red-500 border-solid rounded p-1 hover:bg-red-200 hover:border-red-200 hover:cursor-pointer">
                <img src={iconDelete} alt="" className='w-5' />
              </button>
            </td>


          </tr>
        ))}
      </table>
        <button className='bg-blue-500 text-white px-5 py-1.5 rounded my-2 flex justify-center items-center gap-1 hover:bg-blue-400 hover:cursor-pointer' onClick={() => setShowForm(true)}>Add
          <img src={iconPlus} alt="" className='w-4' />
        </button>
      </div>
  )

}
export default App