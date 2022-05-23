import React , { useState , useEffect } from "react";
export function getList() {
    return fetch('https://api.sampleapis.com/coffee/hot')
      .then(data => data.json())
  }
const Api = () =>{
        const [list, setList] = useState([]);

    useEffect(() => {
         let mounted = true;
         getList()
           .then(items => {
             if(mounted) {
               setList(items)
             }
           })
         return () => mounted = false;
      
    }, [])
    return(
        <div className="wrapper m-2 flex-1">
         <h2 className=" text-center">My coffee List</h2>
         <div className="w-full bg-white rounded-lg shadow-lg">
            <ul className="divide-y-2 divide-gray-100 p-3">
                {list.map(item => <li className="p-3 hover:bg-blue-600  hover:text-blue-200 flex-auto text-lg font-medium text-slate-500" key={item.id}>{item.title}</li>)}
            </ul>
        </div>
       </div>
      )

}
export default Api;