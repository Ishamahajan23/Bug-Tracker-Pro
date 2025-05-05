import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store.js';
import "../App.css"
import {Link} from 'react-router-dom';


export const LogTable = () => {
    const logs=useSelector((state)=>state.activeLogs);
    const allLogs=useSelector((state)=>state.allLogs);
    // const logs=store.getState().activeLogs;
    console.log(logs);
    console.log(allLogs);
   
    
  return (
   
        <table  style={{ border:"1px solid black", borderCollapse:"collapse", } } className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Timestamp</th>
                    <th>Severity</th>
                    <th>Message</th>
                    <th>DevId</th>
                </tr>
            </thead>
            <tbody>
                {
                   logs.map((log)=>(
                        <tr key={log.id}>
                          <td>{log.id}</td>
                          <td>{log.timestamp}</td>
                          <td>{log.severity}</td>
                          <td>{log.message}</td>
                          <td><Link to={`search/${log.devId}`}>Get Info</Link></td>
                        </tr>
                    ))
                }
               
            </tbody>
        </table>
 
  )
}
