
import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {db} from '../firebase';
function Todo({user}) {
    const [text,setText]=useState('')
    const [mytodos,settodos] = useState([])
const history=useHistory()
    useEffect(()=>{
        if(user){
            const docRef=db.collection('todos').doc(user.uid)
            docRef.onSnapshot(docSnap=>{
                if(docSnap.exist){
        
                    console.log(docSnap.data().todos);
                    settodos(docSnap.date().todos)
                }
                else{
                    console.log('no doc')
                   
                }
            })
        }
        else{
            history.push('/Login')
        }
    
    },[])
    const addTodo=()=>{
db.collection('todos').doc(user.uid).set({
    todos:[...mytodos,text]
})
    }
    return (
        <div>
        <div className="input-field ">
          <input type="text" placeholder="Add items" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <button className="btn brown" onClick={()=>addTodo()}>ADD</button>
        </div>
    )
}

export default Todo
