import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Loginfrom(){
    const navigate = useNavigate()
    const [name,setname] = useState()
    const [pass,setpass] = useState()

    function handlename (event){
     setname(event.target.value)
    
    }
    function handlepass (event){
        setpass(event.target.value)
    
    }
   
    function check(){
        
        const value = axios.get(`https://backend1-2-a5kb.onrender.com/login?useremail=${name}&userpass=${pass}`);
        value.then(function(data){
          if(data.data == true){
            navigate("/home")
          }else{
            navigate("/loginfailed")
          }
        })
    }

    return(
        <div className="flex justify-center h-screen items-center">
        <div className="grid grid-cols-2 lg:w-2/3 mx-6 h-2/3 border-2 border-solid border-black">
            <div className="text-center flex flex-col justify-center">
                <h1 className="text-4xl pb-7">sign in</h1>
                <p className="pb-3">or use your account</p>
                <input onChange={handlename} className="bg-gray-200 p-2 lg:mx-20 mx-3 mb-3 text-black" type="email" placeholder="enter your email" />
                <br />
                <input onChange={handlepass} className="bg-gray-200 p-2 lg:mx-20 mx-3" type="number" placeholder="password" name="" id="" />
                <p className="pt-3 pb-3">forgot your password?</p>
                <button onClick={check} className="bg-red-500 rounded-full lg:mx-20 mx-3" >sign in</button>
            </div>
            <div className="bg-red-500 text-center flex flex-col justify-center">
                <h1 className="lg:text-4xl text-2xl pb-10 ">Hello,friend!</h1>
                <p className="text-white text-xl">enter your Login details and start</p><br />
                <p className="text-white text-xl">journey with us</p>
                <button onClick={check} className="lg:mx-20 mx-3 mt-5">sign up</button>
            </div>
            </div>
            </div>
    )
}

export default Loginfrom;