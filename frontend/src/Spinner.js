import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Spinner = () => {
    const[count,setCount]= useState(5)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
          const interval = setInterval(()=>{
                setCount((count) => --count)
          },1000)
          count===0 && navigate('/login',{
            state:location.pathname
          })
          return ()=>clearInterval(interval)
    },[count,navigate,location])
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" 
      style={{height:"100vh"}}>
        <h1>redirecting to you {count} second</h1>
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
