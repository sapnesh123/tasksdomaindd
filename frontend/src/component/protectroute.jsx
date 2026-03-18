import { Navigate } from "react-router-dom";
function Protected({children,role})
{
    const userrole=localStorage.getItem('role')
    if(!userrole)
    {
        return<Navigate to='/'/>;
    }
      if(userrole  !==role)
    {
        return<Navigate to='/'/>;
    }
    return children
}

export default Protected