import React from 'react'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

const App: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route element={<TodosPage/>} path='/'/>
          <Route element={<AboutPage/>} path='/about'/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
