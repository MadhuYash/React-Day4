// import logo from './logo.svg';
import './App.css';
// import Dashboard from "./components/Dashboard";
// import LivingThings from './components/assignment 1/livingThings';
import LivingThings from './components/assignment 2/livingThings';
import { Routes, Route } from "react-router-dom";
// views
// import Users from "./components/Users";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import NoMatch from "./components/NoMatch";
// import About from "./components/About";
// import Animals from "./components/assignment 1/animals";
// import Home from "./components/assignment 1/home";
// import Users from "./components/assignment 1/users";
// import Employees from "./components/assignment 1/employees";
// import Birds from "./components/assignment 1/birds";
import Animals from "./components/assignment 2/animals";
import Home from "./components/assignment 2/home";
import Users from "./components/assignment 2/users";
import Employees from "./components/assignment 2/employees";
import Birds from "./components/assignment 2/birds";

 function App() {
  return (
    <div className='App'>
      <LivingThings/>
      <div className='renderRoutes'>
        {/* <Routes>
          <Route element={<Home/>}exact path="/"/>
           <Route element={<Users/>}exact path="/users"/>
           <Route element={<About/>}exact path="/aboutus"/>
           <Route element={<Contact/>}exact path="/contact"/>
           <Route element={<NoMatch/>}exact path="*"></Route>
        </Routes> */}
         <Routes>
          <Route element={<Home/>}exact path="/"/>
           <Route element={<Animals/>}exact path="/animals"/>
           <Route element={<Users/>}exact path="/users"/>
           <Route element={<Birds/>}exact path="/birds"/>
           <Route element={<Employees/>}exact path="/employees"/>
        </Routes>
      </div>
    </div>
  )
 }
 export default App;