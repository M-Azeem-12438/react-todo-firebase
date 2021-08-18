import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {auth} from '../firebase'
function Signup() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const history =useHistory()
    const handleSubmit =async (e)=>{
        e.preventDefault()
        console.log(email,password)
        try{
     const result= await auth.createUserWithEmailAndPassword(email,password)
     window.  M.toast({html: 'Welcome ', classes:"green"})
     history.push('/');
        }
        catch(err){
            window.M.toast({html:err.message, classes:"red"})
        }
    }
    return (
        <div className="center container" style={{width:"500px"}}>
       <h3>Signup</h3>  
    <form onSubmit={(e)=>handleSubmit(e)}>
    <div class="input-field ">
          <input type="email" placeholder="E-mail" value={email} onChange={(e)=>setemail(e.target.value)}/>
          <input type="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
       
        </div>
        <button type="submit" className="btn brown">Signup</button>
    </form> 
    </div>
    )
}

export default Signup
