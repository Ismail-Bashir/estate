import { BrowserRouter,Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/Header";


export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/sign-in" element={<Signin/>}/>
   <Route path="about/" element={<About/>}/>
   <Route path="/sign-up" element={<Signup/>}/>
   <Route path="/profile" element={<Profile/>}/>

  </Routes>
  
  </BrowserRouter>;
}
