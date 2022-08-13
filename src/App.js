
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import List from './Pages/list/List';
import Single from './Pages/Single/Single';
import New from './Pages/New/New';
import { productInputs, userInputs } from './formSource';
import '../src/Style/dark.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "dark"}>
      <BrowserRouter >
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=":productsId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
