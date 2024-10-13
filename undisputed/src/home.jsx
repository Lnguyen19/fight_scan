import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Menu from "./menu"
import NavBar from "./navBar"

const Home = ()=>{
return(<>
<NavBar/>
<Menu/>
</>)	
}
export default Home;