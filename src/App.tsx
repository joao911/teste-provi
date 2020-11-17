import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import api from './services/api';

function App() {
  const [borrowing, setBorrowing] = useState([]);


  useEffect(() => {
    api.get('baseURL').then(response => {
      setBorrowing(response.data);
      console.log(setBorrowing)
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}

export default App;
