import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Workshop from "./pages/Workshop";
import Talkshow from "./pages/Talkshow";
import LoginForm from "./pages/LoginForm";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Registerform from "./pages/Registerform"




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/competition" element={<Competition/>}/>
        <Route path="/Seminar" element={<Seminar/>}/>
        <Route path="/Workshop" element={<Workshop/>}/>
        <Route path="/Talkshow" element={<Talkshow/>}/>
      </Route>

      <Route element={<AuthLayout/>}>
      <Route path="/Login" element={<LoginForm/>}/>
      <Route path="/Register" element={<Registerform/>}/>


      </Route>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
