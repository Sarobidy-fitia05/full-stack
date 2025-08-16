import iconDelete from '../../public/images/delete.png';
import iconEdit from '../../public/images/edit.png';
import iconPlus from '../../public/images/plus.png';
import React from 'react'
import ReactDOM from 'react-dom/client'
 import { useState, useEffect } from 'react';


const Table = () => {
    const [characters, setCharacters] = useState([]);

     return (
  <div className="p-4">
    <h1 className="text-3xl font-bold mb-4">Liste des personnages</h1>
    <ul>
      {characters.map(char => (
        <li key={char.id} className="mb-2 text-amber-300">
          <span className="font-semibold">{char.name}</span> ({char.realName}) - {char.universe}
        </li>
      ))}
    </ul>
  </div>
)

   



}
export default Table;