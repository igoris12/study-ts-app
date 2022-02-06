import React from 'react';
import {User} from '../types/interfaces';
import { sendUser } from '../actions/SendUser';
import { Link } from 'react-router-dom';


const createCccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputs = document.querySelectorAll('input')
    let data: User = {name: '', username: '', email: ''}
 for (let i = 0; i < inputs.length; i++) {
     inputs[i].name === "name"?  data.name = inputs[i].value : <></>;
     inputs[i].name === "username"?  data.username = inputs[i].value : <></>;
     inputs[i].name === "email"?  data.email = inputs[i].value : <></>;
 }  
    sendUser("http://jsonplaceholder.typicode.com/users", data)
    .then((data) => {
        localStorage.setItem("userInfo", JSON.stringify(data)); 
        
    })

   window.location.href ='/homepage'
    
}

const SignUp = () => {
  return <div>
     <form action="homepage" onSubmit={ (e) => createCccount(e)}>
         <input type="text"   placeholder='Name' name='name' required/>
         <input type="text"  placeholder='Username' name='username' required/>
         <input type="email"  placeholder='E-mail' name='email' required />
          <button type='submit'>Create my account </button>
         
     </form>
  </div>;
};

export default SignUp;
