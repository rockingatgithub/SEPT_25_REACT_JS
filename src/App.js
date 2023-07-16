import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Clock from './components/Clock';
import Form from './components/Form'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  const [student, setStudent] = useState({})

  return (
    <div className="App">

        <div>
          <Link to='/signin' > Signin </Link>
          <Link to='/signup' > Signup </Link>
          <Link to='/clock' > Clock </Link>
        </div>

        <Routes>

          <Route path='/clock' element={<Clock/>}  />
          <Route path='/signin' element={<Form setStudent={setStudent} />}>
            {/* Below route shows how to include params in a react route. */}
            {/* <Route path=':id' element={<List setStudent={setStudent} />} ></Route> */}
          </Route>
          <Route path='/signup' element={<Form signup setStudent={setStudent} />}/>
          <Route path='/profile' element={<Profile student={student} setStudent={setStudent} />} />

        </Routes>
    </div>
  );
}

export default App;
