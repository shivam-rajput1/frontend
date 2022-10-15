import React, { useState } from 'react';


const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectData = async ()=>{
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.warn(name, email, password);
        result = await result.json()
        console.log(result);
    }
    return (

        <div className='register'>
            <h1>Resister</h1>
            <input className='inputBox' type="text" value={name}
                onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />

            <input className='inputBox' type="text" value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder='Enter E-Mail' />

            <input className='inputBox' type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />

            <button onClick={collectData} className="SignUpButton" type="button">Sign Up</button>

        </div>
    )
}



export default SignUp; 