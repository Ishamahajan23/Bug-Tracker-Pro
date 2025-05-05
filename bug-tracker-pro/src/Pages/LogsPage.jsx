import React from 'react'
import { LogTable } from '../components/LogTable'
import { FilterBar } from '../components/FilterBar'
import "../App.css";

export const LogsPage = () => {

  return (
    <div className='logs-page'>
        <h1>ALL LOGS</h1>
        <FilterBar/>
        <LogTable/>
    </div>
  )
}
