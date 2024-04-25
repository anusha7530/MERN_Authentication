import React,  {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "./Mix.css"

const Login = () => {
    const navigate = useNavigate();
    const [passShow,setPassShow] = useState(false);

    const[inpval, setInpval] = useState({
        email:"",
        password:""
    });

    const setVal = (e)=>{

        const {name,value} = e.target;

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    };

    const loginuser = (e) =>{
        e.preventDefault();
        const{email,password}=inpval;

        if(email ===""){
            alert("Please enter your email")
        }else if(!email.includes("@")){
            alert("Enter a valid email")
        }else if(password ===""){
            alert("Enter your password")
        }else if(password.length < 6){
            alert("Password must be of 6 characters")
    }else{
        console.log("registration done");
        navigate('/dashboard');
    }
};


  return (
    <>
        <section>
            <div className="form_data">
                <div className="form_heading">
                    <h1>Welcome Back</h1>
                    <p>Hi, We are glad you are back.Please login</p>
                </div>
                <form>
                    <div className="form_input">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={setVal} value={inpval.email} name="email" id='email' placeholder='Enter you Email Address'/>
                    </div>
                    <div className="form_input">
                        <label htmlFor="password">Password</label>
                        <div className="two">
                        <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id='password' placeholder='Enter you Password'/>
                        <div className="showpass" onClick={()=>setPassShow(!passShow)}>
                            {!passShow ? "Show" : "Hide"}
                        </div>
                        </div>
                    </div>

                    <button className="btn" onClick={loginuser}>Login</button>
                    <p>Don't have an Account? <NavLink to= "/Register">Sign Up </NavLink> </p>
                </form>
            </div>
        </section>
    </>
  )
}

export default Login