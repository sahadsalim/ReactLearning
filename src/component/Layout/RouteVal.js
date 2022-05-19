import {BrowserRouter as Router,
  Routes,
  Route,
  useRoutes} from 'react-router-dom';
  import { render } from 'react-dom';
import React, { Suspense, lazy } from 'react';
import {UserContextProvider} from '../Auth/userContext';
import { Provider } from 'react-redux';
import store from '../../redux/store';
const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('../Auth/Login'));
const SignUp = lazy(() => import('../Auth/SignUp'));
const RouteVal=(data)=>{

    return (
      // <UserContextProvider value={data}>
<Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
      <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
      </Router>
      </Suspense>
    {/* // </UserContextProvider> */}
    </Provider>

  )

}
export default RouteVal;
