import { useState } from 'react';
import { useEffect } from 'react'
import React from 'react';
import './App.css';
import { Table } from './Table'



function App() {

  const [rows, setRows] = useState([]);

  const [columns, setColumns] = useState([])




  useEffect(() => {
    const url = "/books";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        //console.log(json); Not needed.
        setRows(json.body); //place data into rows
       
      } catch (error) {
        console.log("error", error);
      }
    }
  

    fetchData();
    
    
  }, []);

  useEffect (() => {

    if(rows.length > 0 && columns.length == 0){ //automatically generate the accessors using the api
      const keys = Object.keys(rows[0]);

      for (let i = 0; i < keys.length; i++){
        setColumns(oldColumns =>  [...oldColumns, {accessor: keys[i], label: keys[i].toString().toUpperCase()}])
      }
  
    } else{
      
    }



  }, [rows])



  /**
   * Used code from https://www.taniarascia.com/front-end-tables-sort-filter-paginate/ to handle sorting,
   * filtering, and paginating data. A call is made to Table.jsx to handle the bulk of the logic and rendering.
  */
  return (
    <div className="App">
      <h1>Books-a-lot</h1>
             
          
              <h3 className='header'>Welcome to the book catalog!</h3>
              <Table rows={rows} columns={columns} /> 
          
            
        <footer>&copy; 2022 ServicePros</footer>
      </div>
    
  )
}

export default App
