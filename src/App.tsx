import React from 'react';
import logo from './logo.png';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './app/router/routes';
import './App.css';

function App() {
  return (
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Routes />
        </Router>
      </DndProvider>
  );
}

export default App;
