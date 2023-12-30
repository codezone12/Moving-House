import "./App.css";
import Home from "../src/Components/pages/Home/Home";
import HomeCleaning from "./Components/pages/Homecleaning/Home_cleaning";
import WindowClean from "./Components/pages/WindowCleaning/Window_Clean";
import DHome from "./Components/pages/DeepCleaning/D_Home";
import Moveoutcleaning from "./Components/pages/MoveoutCleaning/Moveout_cleaning";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/Gernal_Components/Navbar";
import Footer from "./Components/Gernal_Components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import Booking from "./Components/pages/Booking/Booking";
import Calender from "./Components/pages/Booking/Calender";
import WindowCleaning from "./Components/pages/WindowCleaning/Window_Clean_Form";
import BookByVisit from "./Components/pages/Homecleaning/Book_By_Visit";
import BookByCall from "./Components/pages/Homecleaning/Book_By_Call";
import Contact from "./Components/pages/Contact/Contact";
import DeepCleaning from "./Components/pages/DeepCleaning/Deep_Cleaning";
import MoveForm from "./Components/pages/MoveoutCleaning/Moving_Service";
import MovingOutService from "./Components/pages/MoveoutCleaning/MovingOut_Service";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App text-center text-black ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home_clean" index element={<HomeCleaning />} />
            <Route path="/Window_clean" element={<WindowClean />} />
            <Route path="/Deep_Clean" element={<DHome />} />
            <Route path="/Moving_Home" element={<Moveoutcleaning />} />
            <Route path="/home_cleaning" element={<BookByVisit />} />
            <Route path="/book_by_call" element={<BookByCall />} />
            <Route path="/deep_cleaning" element={<DeepCleaning />} />
            <Route path="/window_cleaning" element={<WindowCleaning />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/moving_service" element={<MoveForm />} />
            <Route path="/moving_out_service" element={<MovingOutService />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<div>It and error</div>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
