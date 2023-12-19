import LogIn from "./Pages/LogIn";
import React from "react";
import {Routes, Route} from "react-router-dom";
import SignUp from "./Pages/SignUp";

const App=()=>{
 return(
     <div>
         <Routes>
             <Route path="/" element={<LogIn/>}/>
             <Route path="/signin" element={<SignUp/>}/>
         </Routes>
     </div>
 )
}
export default App