
import './App.css';
import Home from "../src/Components/pages/Home/Home";
import Home_Cleaning from './Components/pages/Homecleaning/Home_cleaning';
import Window_Clean from './Components/pages/WindowCleaning/Window_Clean';
import DHome from './Components/pages/DeepCleaning/D_Home';
import Moveout_cleaning from './Components/pages/MoveoutCleaning/Moveout_cleaning';

import {Route,BrowserRouter,Routes,} from "react-router-dom";
import Navbar from './Components/Gernal_Components/Navbar';
import Footer from './Components/Gernal_Components/Footer';
import { ChakraProvider } from '@chakra-ui/react'
import Booking from './Components/pages/Booking/Booking';
import Calender from './Components/pages/Booking/Calender';
import WindowCleaning from './Components/pages/WindowCleaning/Window_Clean_Form';
import Book_By_Visit from './Components/pages/Homecleaning/Book_By_Visit';
import Book_By_Call from './Components/pages/Homecleaning/Book_By_Call';
import Contact from './Components/pages/Contact/Contact';





function App() {
  
  return (
<ChakraProvider>
    <BrowserRouter>
    <div className="App text-center text-black "> 
<Navbar /> 
<Routes>

  <Route path='/'  element={<Home /> } />
  <Route path='/Home_clean' inde element={<Home_Cleaning/> }/> 
  <Route path='/Window_clean' element={ <Window_Clean />} />
  <Route path='/Deep_Clean' element={ <DHome />} /> 
  <Route path='/Moving_Home' element={ <Moveout_cleaning />} /> 
  <Route path='/home_cleaning' element={ <Book_By_Visit />} /> 
  <Route path='/book_by_call' element={ <Book_By_Call />} /> 
  <Route path='/window_cleaning' element={ <WindowCleaning />} /> 
  <Route path='/Booking' element={ <Booking />} /> 
  <Route path='/calender' element={ <Calender />} /> 
  <Route path='/contact' element={ <Contact />} /> 

  <Route path='*' element={<div>It and error</div>}/>

</Routes>
<Footer/>

</div>
</BrowserRouter>
</ChakraProvider>
 
  );
}

export default App;
