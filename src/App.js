import {useState, useEffect} from 'react'
import {BsTrash , BsBookmarkCheck , BsBookmarkCheckFill} from 'react-icons'

import './App.css';


const API ="http://localhost:5000";


function App() {
  const [ title , setTitle] =useState('')
  const [time , setTime] = useState('')
  const [ todos, seTodos] =useState([])
  const [ loading,setLoading] =useState(false)


  return (
    <div className="App">
       <div className='todo-header'>
        <h1>Todo em React</h1>
       </div>
       <div className='form-todo'>
        <p>Formulario</p>
       </div>
       <div className='list-todo'>
        <h2>Lista de tarefas</h2>
        {todos.length === 0 && <p>Não há tarefas</p>}
       </div>
    </div>
  );
}

export default App;
