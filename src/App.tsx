import React from 'react';
import LandingPage from './componets/LandingPage';
import {
  Routes,
  Route
} from "react-router-dom";
import SignUp from './componets/SignUp';
import HomePage from './componets/HomePage';

function App() {
  return (
    <div className="App">
     
       <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/homepage" element={<HomePage/>} />

       </Routes>
    
    </div>
  );
}

export default App;
