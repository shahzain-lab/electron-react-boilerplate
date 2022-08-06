import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Todo.css'

const Todo = () => {
    const [text, setText] = useState('');
    const [ch, setCh] = useState(false);

    const [todos, setTodos] = useState([{
        text: '',
        ch: false
    }])

    const submitHandler = (e:any) => {
        e.preventDefault();
        if(text) {
            setTodos([...todos, {text, ch}]);
            setText('')
        } 
    }


  return (
    <div className="todo">
        <div className="back">
            <Link to={'/'}>
                ← Back
            </Link>
        </div>
        <h1>
        Todolist Dashboard
        </h1>
        <form action="" onSubmit={submitHandler} className="form">
            <input type="checkbox"
             className='todo-ch'
             onClick={() => setCh(!ch)}
             id="todo-text"
              name="todo-text" />
            <input className='todo-tx'
             value={text}
              id="todo-text" type={"text"}
             onChange={(e) => setText(e.target.value)}  />
            <button type='submit'>Push down</button>
        </form>
        <ul>
            {
                todos.map(t => (
                    <li>{t.text} <strong>{t.text && t.ch ? 'Completed': 'Pending'}</strong></li>
                ))
            }
        </ul>
        </div>
  )
}

export default Todo