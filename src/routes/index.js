import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

  import Login from '../pages/Login';
  import Home from '../pages/Home'


  function CustomRouter () {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
  }

  export default CustomRouter;