import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';

import "./Mix.css"
const Register = () => {
    const [passShow,setPassShow] = useState(false);
    const [cpassShow,setCPassShow] = useState(false);

    const[inpval, setInpval] = useState({
        fname:"",
        email:"",
        password:"",
        cpassword:""
    });
    
    const setVal = (e)=>{
        // console.log(e.target.value);
        const {name,value} = e.target;

        setInpval(()=>{
            return{
                ...inpval,
                [name]:value
            }
        })
    };

    const addUserdata = async(e)=>{
        e.preventDefault();

        const {fname, email, password, cpassword} = inpval;

        if(fname ===""){
        alert("Please enter you name");
        }
        else if(email ===""){
            alert("Please enter your email")
        }else if(!email.includes("@")){
            alert("Enter a valid email")
        }else if(password ===""){
            alert("Enter your password")
        }else if(password.length < 6){
            alert("Password must be of 6 characters")
        }else if(cpassword ===""){
            alert("Confirm your password")
        }else if(cpassword.length < 6){
            alert("Confirm password must be of 6 characters")
        }else if(password !== cpassword){
            alert("Passwords do not match")
        }else{
            // console.log("registration done");
            const data = await fetch("http://localhost:8009/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({fname, email, password, cpassword})
            });
            const res = await data.json();
            console.log(res);
        }
    }
    
  return (
     <>
     <section>
            <div className="form_data">
                <div className="form_heading">
                    <h1>Sign Up</h1>
                    <p style = {{textAlign:"center"}}>We are glad that you will be using Project Cloud to manage <br /> your tasks! We hope that you will get like it.</p>
                </div>
                <form>
                    <div className="form_input">
                        <label htmlFor="fname">Name</label>
                        <input type="text" onChange={setVal} value={inpval.fname} name="fname" id='fname' placeholder='Enter you name'/>
                    </div>
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
                    <div className="form_input">
                        <label htmlFor="password">Confirm Password</label>
                        <div className="two">
                             <input type={!cpassShow ? "password" : "text"} onChange={setVal} value={inpval.cpassword} name="cpassword" id='cpassword' placeholder='Confirm Password'/>
                             <div className="showpass" onClick={()=>setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                             </div>
                        </div>
                    </div>

                    <button className="btn" onClick= {addUserdata}>Sign Up</button>
                    <p>Already have an Account? <NavLink to= "/">Login </NavLink></p>
                </form>
            </div>
        </section>
     </>
  )
}

export default Register