import React,{useState} from 'react'

function Login() {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(email,password)
    }
    return (
        <div className="center container" style={{width:"500px"}}>
       <h3>Login</h3>  
    <form onSubmit={(e)=>handleSubmit(e)}>
    <div className="input-field ">
          <input type="email" placeholder="E-mail" onChange={(e)=>setemail(e.target.value)}/>
          <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
          
        </div>
        <button type="submit" className="btn green">Login</button>
    </form> 
    </div>
    )
}

export default Login
