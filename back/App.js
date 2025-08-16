// const express = require('express');
// const bodyParser = require('body-parser')

// const app = express();
// const port = 3000;

// app.use(bodyParser.json());



// // let tasks = [
// //     {
// //         id:1,
// //         description: 'faiere les courses'
// //     },
// //     {
// //         id:2,
// //          description: 'Apprendre node.js'
// //     }
    
    
// // ];

// app.listen(port ,() => {
//     console.log(`Serveur écoutant sur le port ${port}`);
    
// })
// // app.get('/tasks', (req, res) => {
// //     const taskReferences = tasks.map(task => `/task/${task.id}`);
// //     res.json(taskReferences);
// // });


// // app.get('/task/:id', (req, res) => {
// //     const taskId = parseInt(req.params.id);
// //     const task = tasks.find(task => task.id === taskId);

// //     if (task) {
// //         res.json(task);
// //     }else {
// //         res.status(404).json({ error: 'Tache non trouvée'});
// //     }
// // });
// // app.post('/tasks', (req, res) => {
// //     const newTask = {
// //         id: tasks.length + 1,
// //         description: req.body.description
// //     };
// //     tasks.push(newTask);
// //     res.status(201).json({ message : 'Tâche ajoutée avec succées', task:newTask })

    
// // });
// // app.put('/task/:id', (req, res) =>{
// //     const taskId = parseInt(req.params.id);
// //     const task = tasks.find(task =>task.id === taskId);
// //     if (task) {
// //         task.description = req.body.description;
// //         res.json({ message: 'Tâche mise à jour avec succées' , task});
// //     } else {
// //         res.status(404).json({ error: 'Tâche non trouvée'});
// //     }
// // }); 
// // app.delete('/task/:id', (req, res) => {
// //     const taskId = parseInt(req.params.id);
// //     tasks = tasks.filter(task => task.id !== taskId);
// //     res.json({message: 'Tâche suprimée avec succées'});

// // });




// import { useState, useEffect } from 'react';

// function App() {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/api/characters')
//       .then(res => res.json())
//       .then(data => setCharacters(data.characters))
//       .catch(err => console.error('Erreur:', err));
//   }, []); // [] = se lance une seule fois au montage du composant

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl font-bold mb-4">Liste des personnages</h1>
//       <ul>
//         {characters.map(char => (
//           <li key={char.id} className="mb-2">
//             <span className="font-semibold">{char.name}</span> ({char.realName}) - {char.universe}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'   // ← très important pour activer Tailwind

//  import { useState, useEffect } from 'react';

// function App() {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/api/characters')
//       .then(res => res.json())
//       .then(data => setCharacters(data.characters))
//       .catch(err => console.error('Erreur:', err));
//   }, []); // [] = se lance une seule fois au montage du composant

//   return (
//   <div className="p-4">
//     <h1 className="text-3xl font-bold mb-4">Liste des personnages</h1>
//     <ul>
//       {characters.map(char => (
//         <li key={char.id} className="mb-2 text-amber-300">
//           <span className="font-semibold">{char.name}</span> ({char.realName}) - {char.universe}
//         </li>
//       ))}
//     </ul>
//   </div>
// )

// }

// export default App

// // export default App;


//  return <section className="w-full flex justify-center p-10">
//         <table>
//             <thead className="bg-gray-500 py-0.5">
//                 <tr>
//                     <th className="text-white px-15">id</th>
//                     <th className="text-white px-15">Name</th>
//                     <th className="text-white px-15">RealName</th>
//                     <th className="text-white px-15">Univers</th>
//                     <th className="text-white px-15">Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr className="bg-white">
//                     <td className="py-2 text-center">1</td>
//                     <td className="py-2 text-center">naruto</td>
//                     <td className="py-2 text-center">naruto</td>
//                     <td className="py-2 text-center">Univers</td>
//                     <td className='flex gap-3 justify-center items-center py-2'>
//                         <button className="border-2 border-green-500 border-solid rounded p-1">
//                             <img src={iconEdit} alt="" className='w-5' />
//                         </button>
//                         <button className="border-2 border-red-500 border-solid rounded p-1">
//                             <img src={iconDelete} alt="" className='w-5' />
//                         </button>
//                     </td>
//                 </tr>
//                 <tr className="bg-gray-100">
//                     <td className="py-2 text-center">1</td>
//                     <td className="py-2 text-center">naruto</td>
//                     <td className="py-2 text-center">naruto</td>
//                     <td className="py-2 text-center">Univers</td>
//                     <td className='flex gap-3 justify-center items-center py-2'>
//                         <button className="border-2 border-green-500 border-solid rounded p-1">
//                             <img src={iconEdit} alt="" className='w-5' />
//                         </button>
//                         <button className="border-2 border-red-500 border-solid rounded p-1">
//                             <img src={iconDelete} alt="" className='w-5' />
//                         </button>
//                     </td>
//                 </tr>
//             </tbody>

//                 <button className='bg-blue-600  rounded flex justify-center items-center p-1'>
//                     <img src={iconPlus} alt="" />
//                 </button>
//         </table>
//     </section>


// <div className="p-4">
//         <h1 className="text-3xl font-bold mb-4">Liste des personnages</h1>
//         <ul>
//           {characters.map(char => (
//             <li key={char.id} className="mb-2 text-amber-300">
//               <span className="font-semibold">{char.name}</span> ({char.realName}) - {char.universe}
//             </li>
//           ))}
//         </ul>
//       </div>