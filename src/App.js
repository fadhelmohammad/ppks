import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Ensure this points to your correct CSS file path
import Header from './components/Header';
import Navbar from './components/Navbar';
import Proposal from './components/Proposal';
import Dashboard from './components/Dashboard';
import DynamicTable from './components/DynamicTable';
import TableODKB from './components/PPKS/Tables/ODKB';
import TableADK from './components/PPKS/Tables/ADK';

const App = () => {




  return (
    <Router>
      <div className='App-container'>
        <Header />
        <Navbar show={false} />
        <Routes>
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<TableODKB/>} />
          <Route path="/test1" element={<TableADK/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
