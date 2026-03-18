export const Mydomain=()=>{

    const fetchdata=async()=>{
        try {
           const res=await axios.post('http://localhost:3000/api/domain/getmydomain',form,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        } catch (error) {
            
        }
    }
    return(<>
    
    </>)
}