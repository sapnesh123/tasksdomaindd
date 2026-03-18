import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
export const Login=()=>{
const [form, setformdata]=useState({
        email:'',
        password:''})

const navigate=useNavigate()
const handdlesubmit=async(e)=>{
   e.preventDefault();
    try {
        console.log('form',form)
        const res=await axios.post('http://localhost:3000/api/auth/login',form)
         localStorage.setItem('token',res.data.token)
         localStorage.setItem('role',res.data.data.role)
         if(res.data.data.role==="admin")
         {
            navigate('/admin')
         }else{
            navigate('/user')
         }
        
    } catch (error) {
        console.log(error)
    }
}



    const handlechnage=(e)=>{
    const {name,value}=e.target
    setformdata({
       ...form,
       [name]:value
    })
    }
return(

    <>
    <div className="login">

    <div className="login_form">

  <form onSubmit={handdlesubmit}>
    <h3>Log in with</h3>
  


    <p className="separator">
      <span>or</span>
    </p>

    <div className="input_box">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter email address"
        name="email"
         value={form.email}
         onChange={handlechnage}
      />
    </div>
 
    <div className="input_box">
      <div className="password_title">
        <label htmlFor="password">Password</label>
        
      </div>
      <input
        type="password"
        id="password"
        placeholder="Enter your password"
        name="password"
         value={form.password}
        onChange={handlechnage}
      />
    </div>
   
    <button type="submit">Log In</button>
  
  </form>
</div>

   </div>

    </>
)
}