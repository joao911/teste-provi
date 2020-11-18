import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import api from './services/api';

function App() {
  const [borrowing, setBorrowing] = useState({});


  useEffect(() => {
    api.get('/').then(response => {
      setBorrowing(response.data);         
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <Table borrowing={borrowing}/>
    </div>
  );
}

export default App;
