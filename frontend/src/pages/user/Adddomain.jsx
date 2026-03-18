import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
export const Adddomain=()=>{
const [form, setformdata]=useState({
        domainname:'',
        })

const token=localStorage.getItem('token')
const navigate=useNavigate()
const handdlesubmit=async(e)=>{
   e.preventDefault();
    try {
        console.log('form',form)
        const res=await axios.post('http://localhost:3000/api/domain/create',form,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        console.log(res)
        
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
    <h3>Add Domain</h3>
  


    <p className="separator">
      <span>or</span>
    </p>

    <div className="input_box">
      <label htmlFor="email">Domain name</label>
      <input
        type="text"
        id="domain"
        placeholder="Enter domain name"
        name="domainname"
        value={form.domainname}
        onChange={handlechnage}
      />
    </div>
 
   
   
    <button type="submit">Add domain</button>
  
  </form>
</div>

   </div>

    </>
)
}