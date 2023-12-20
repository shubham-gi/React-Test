import './App.css';
import Home from './components/Home';
import {useState} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Student from './components/Student';
function App() {
  const initalCredential={
    username:"",
    telephone:"",
}
const [credentials, setcredentials] = useState(initalCredential);
  return (
    <div >
      <BrowserRouter>
        <Routes>
           {/* Set credentials is passed to the Home component. When user visits the '/' route the value of credentials is initialised. */}
          <Route exact path='/' element={<Home setcredentials={setcredentials} />}></Route>
          <Route exact path='/student' element={<Student credentials={credentials}/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
