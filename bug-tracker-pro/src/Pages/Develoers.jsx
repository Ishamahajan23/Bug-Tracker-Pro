import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Develoers = () => {
    const {devId}=useParams();
    const logs=useSelector((state)=>state.activelogs);
    const allLogs=useSelector((state)=>state.allLogs);
    const filteredLogs=allLogs.filter((log)=>log.devId===devId);




  return (
    <div>
        <h1>Logs for Developers</h1>
        {
            filteredLogs.map((log)=>(
                <div>
                    <h1>{log.devId}</h1>
                    <p>{log.message}</p>
                    <p>{log.severity}</p>
                    <p>{log.timestamp}</p>
                </div>
            ))
        }



    </div>
  )
}
