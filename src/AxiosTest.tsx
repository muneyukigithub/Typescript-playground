import React, { useState } from 'react'
import { useEffect } from 'react';
import requests from 'Requests';
import axios from 'axios';

const AxiosTest = () => {
    const [axi,setaxi] = useState([]);

    // const i = <p>emhko</p>
    useEffect(
        ()=>{
            async function fetchData(){
                const _data = await axios.get(requests.url)
                // setdata(_data.data);
                // console.log(_data.data.smalltask);
                setaxi(_data.data[0].task_id);
                // return _da
            }
            
            fetchData();
            
            },[]);

  return (
    <div>
       {axi}

    </div>);

  }
export default AxiosTest;