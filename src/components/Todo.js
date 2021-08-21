
import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {db} from '../firebase';
let unsubscribe=()=>{

}
function Todo({user}) {
    const [text,setText]=useState(' ')
    const [mytodos,setTodos] = useState([])
const history=useHistory()
    useEffect(()=>{
        if(user){
         
            const docRef=db.collection('todos').doc(user.uid)
            unsubscribe = docRef.onSnapshot(docSnap=>{
                if(docSnap.exists){
        
                    console.log(docSnap.data().todos)
                    setTodos(docSnap.data().todos)
                }
                else{
                    console.log('no doc')
                   
                }
            })
        }
        else{
            history.push('/Login')
        }
        return()=>{
            unsubscribe();
        }
    
    },[]);
    const addTodo=()=>{
db.collection('todos').doc(user.uid).set({
    todos:[...mytodos,text]
})
    }
const deleteTodo=(deleteTodo)=>{
    const docRef=db.collection('todos').doc(user.uid)
    docRef.get().then(docSnap=>{
        const result=docSnap.data().todos.filter(todo =>todo!==deleteTodo)
        docRef.update({
            todos:result
        })
    })
}
    
    return (
        <div className="container">
        <div className="input-field ">
          <input type="text" placeholder="Add Items" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <button className="btn brown" onClick={()=>addTodo()}>ADD</button>

        <ul className="collection">
        {mytodos.map(todo=>{
            return <li className="collection-item" key={todo}>
            {todo}
                <i class="material-icons right" onClick={()=>deleteTodo(todo)}>delete</i>
                </li>
            
        })}
     
    </ul>
        </div>
    )
}

export default Todo
