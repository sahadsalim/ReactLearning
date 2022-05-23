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
       :<p>Please login see data.</p>}
       </Fragment>
    );
}
export default Home;
