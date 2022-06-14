import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

  import Login from '../pages/Login';
  import Home from '../pages/Home'
  import HomePageLayout from '../layouts/Homepage/Homepage.layout';


  function CustomRouter () {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/" element={<HomePageLayout><Home /></HomePageLayout> }/>
            </Routes>
        </Router>
    )
  }

  export default CustomRouter;