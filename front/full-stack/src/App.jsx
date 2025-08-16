import React from 'react'
import ReactDOM from 'react-dom/client'
import iconDelete from './../public/images/delete.png';
import iconEdit from './../public/images/edit.png';
import iconPlus from './../public/images/plus.png';
import iconFois from './../public/images/Multiply.png';


import { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newChar, setNewChar] = useState({ name: "", realName: "", universe: "" });

  const [title, setTitle] = useState("Add Character");
  const changeTitle = () => {
    setTitle("Edit Character"); 
  };

  const [isVisible, setIsVisible] = useState(true);
  const hiddenModal = () => {
    setIsVisible(false); // cache la div
  };

  useEffect(() => {
    fetch('http://localhost:3001/api/characters')
      .then(res => res.json())
      .then(data => setCharacters(data.characters))
      .catch(err => console.error('Erreur:', err));
  }, []); 

  const handleAddCharacter = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/api/characters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newChar)
    })
    .then(res => res.json())
    .then(data => {
      setCharacters([...characters, data]); 
      setShowForm(false);
      setNewChar({ name: "", realName: "", universe: "" }); 
    })
    .catch(err => console.error(err));
    
  };
   const deleteCharacter = (id) => {
    fetch(`http://localhost:3001/api/characters/${id}`, { method: 'DELETE' })
      .then(() => {
        setCharacters(characters.filter(char => char.id !== id));
      })
      .catch(err => console.error('Erreur suppression:', err));
  };
  

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
              <button className="border-2 border-green-500 border-solid rounded p-1 hover:bg-green-200 hover:border-green-200 hover:cursor-pointer" onClick={()=>{changeTitle(); setShowForm(!showForm) }}>
                <img src={iconEdit} alt="" className='w-5' />
              </button>
              <button className="border-2 border-red-500 border-solid rounded p-1 hover:bg-red-200 hover:border-red-200 hover:cursor-pointer" onClick={() => alert("Voulez-vous suppr ?")  ? startEditing(char) : deleteCharacter(char.id)  }>
                <img src={iconDelete} alt="" className='w-5' />
              </button>
            </td>


          </tr>
        ))}
      </table>
      <button className='bg-blue-500 text-white px-5 py-1.5 rounded my-2 flex justify-center items-center gap-1 hover:bg-blue-400 hover:cursor-pointer' onClick={() => setShowForm(!showForm)}  >Add
        <img src={iconPlus} alt="" className='w-4' />
      </button>
      {isVisible && showForm && (
        <div className='w-full bg-[#00000058] flex justify-center items-center h-[100vh] absolute top-0'>
          <form onSubmit={handleAddCharacter} className=' flex flex-col rounded-xl shadow-xl w-[350px] p-3.5 bg-white'>
            <div className='w-full flex justify-between mb-1.5'>
              <h3 className="text-xl text-gray-500 ">{title}</h3>
              <button onClick={hiddenModal}>
                <img src={iconFois} alt="" />
              </button>
            </div>

            <hr className='text-gray-500 mb-3' />
            <input type="text" placeholder='Name...' value={newChar.name} onChange={e => setNewChar({ ...newChar, name: e.target.value })} className='border border-gray-500 px-2.5 py-1 border-solid rounded w-[325px] my-2.5' />
            <input type="text" placeholder='Real name...' value={newChar.realName} onChange={e => setNewChar({ ...newChar, realName: e.target.value })} className='border border-gray-500 px-2.5 py-1 border-solid rounded w-[325px] my-2.5' />
            <input type="text" placeholder='Universe...' value={newChar.universe}
              onChange={e => setNewChar({ ...newChar, universe: e.target.value })} className='border border-gray-500 px-2.5 py-1 border-solid rounded w-[325px] my-2.5' />
            <button className='w-[325px] bg-blue-500 text-white px-5 py-1.5 rounded my-2 flex justify-center items-center gap-1 hover:bg-blue-400 hover:cursor-pointer' type='submit'>Save
            </button>
          </form>
        </div>
      )}
      
    </div>
  )

}
export default App