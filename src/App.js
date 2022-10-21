import UserDetails from './Components/UserDetails.jsx';
import InitialPage from './Components/InitialPage.jsx';
import SingleUserDetails from './Components/SingleUserDetails';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <InitialPage /> */}
      {/* <Blog/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />}/>
        <Route path="/userdetails" element={<UserDetails />}/>
        <Route path="/getsingleuser/:id" element={<SingleUserDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
