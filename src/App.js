import { useState, useRef, useEffect} from "react";
import "./App.css";
import content from "./Localization/content";

function App() {
    
  const [todo, setTodo] = useState(JSON.parse(window.localStorage.getItem("todos")) || [])
    // const [lang, setLang] = useState('uz')

    const deleteTodo = (item) => {
      let confirmIt = window.confirm(content[lang].item)
      if(confirmIt == true){
        let filteredTodo = todo.filter((i) => i.id !== Number(item. id));
        setTodo(filteredTodo);
        window.localStorage.setItem("todos", JSON.stringify(filteredTodo));
      } else {
        return;
      }
    };
    // deleteTodo

    const checkedTodo = (e) => {
      const todoId = e.target.dataset.id

      const findTodo = todo.find(i => i.id === Number(todoId))

      findTodo.isCompleted = !findTodo.isCompleted

      setTodo([...todo])

     window.localStorage.setItem("todos", JSON.stringify([...todo]))
    }; 
    // checkedTodo

    const createTodo = (e) => {
      if(e.code ==="Enter"){

        let newTodo = {
          id: new Date().getTime(),
          content: e.target.value,
          isCompleted: false
        }

        setTodo([newTodo, ...todo])

        window.localStorage.setItem("todos", JSON.stringify([newTodo, ...todo]))

        e.target.value = null
      }
    }
    // Modal Settings
    // const [modal, setModal] = useState(false)
    // const [modal2, setModal2] = useState(false)

    const [lang, setLang] = useState('uz')

    return (
      <>
        <select
           defaultValue={lang}  
            onChange={(e) => {
            setLang(e.target.value)
           }} className="select-todo">
          <option value="uz">uz</option>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
     
           <p className="todo-text">Info: {content[lang].coment}</p>
          {/* <main>
          <button className="modal-btn" onClick={() => setModal(!modal)}>?</button>
          </main> */}

      <h1 className="todo-title" >{content[lang].title}</h1>
          
        
      <div className="todo-div">
        <input className="todo-input"
          onKeyPress={(e) => createTodo(e)}
        placeholder={content[lang].text}/>
      </div>

        <h2 className="count-title"> {content[lang].result} {todo.length}</h2>


      <ul className="todo-list">
        {todo.map(item => {
          return(
            <li className="todo-item"
            style={{textDecoration: item.isCompleted ? "line-through" : "none"}}
            
            key={item.id}>

                <input className="todo-input-todo"
                defaultChecked = {item.isCompleted}
                onChange={(e) => checkedTodo(e)}
                data-id={item.id}
                
                type={"checkbox"}/>

                {item.content}
                {/* <button className="todo-item-button" onClick={() => setModal(true)}>Add</button> */}
                <button className="todo-button" onClick={() => deleteTodo(item)}>x</button>

              </li>
            )
          })
        }
      </ul>
      </>
    )
}

export default App;
