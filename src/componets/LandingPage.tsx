import React from 'react';
import { Link } from "react-router-dom";

const LandingPage = () => {
  return <div className='landingPage'>
      <div className="logo"><img src="https://x-squad.com/images/logo.png" alt="logo" /></div>
       <Link to="/signup"> <button>Register with my email</button></Link>
  </div>;
};

export default LandingPage;
