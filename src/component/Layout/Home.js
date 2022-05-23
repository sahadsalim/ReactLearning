import { useSelector } from 'react-redux';
import { Fragment } from "react";
import ToDo from "../Todo/ToDo";
import Api from "../Rest/Api";
const Home=()=>{
  const auth = useSelector((state) => state.auth);
     return (
       <Fragment>
       {auth.isLogged?<div className='flex'>
        <ToDo ></ToDo>
        <Api ></Api>
       </div>
       :<h4 className='text-center'>Please login see data. <a className='text-blue-500' href='/login'>Click here to Login</a></h4>}
       </Fragment>
    );
}
export default Home;
