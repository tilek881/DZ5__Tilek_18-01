import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserRegisterPage from "./pages/userRegisterPage/UserRegisterPage";
import UserListPage from "./pages/userListPage/UserListPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/menu/Menu";

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Routes>
          <Route index element={<UserRegisterPage/>}/>
          <Route path='/users' element={<UserListPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
