import { userInfo } from 'os';
import React, {useEffect, useState} from 'react';
import {User} from '../types/interfaces'


const HomePage = () => {
   const [user, setUser] = useState<User | null>(null)
    useEffect(()=> {
    //    const userInfo:User =  localStorage.getItem("userInfo").json();
    //    console.log(JSON.parse(userInfo));
       
    //    setUser(JSON.parse(userInfo))
        
    },[])
  return <div>
      Home Page
  </div>;
};

export default HomePage;
