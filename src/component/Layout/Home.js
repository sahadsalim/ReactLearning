import { render } from 'react-dom';
import {UserContextConsumer} from '../Auth/userContext';

import ToDo from "../Todo/ToDo";
const Home=()=>{
  let data=localStorage.getItem('user');
     return (
       <div>
       <ToDo></ToDo>
       </div>
     );
}
export default Home;
