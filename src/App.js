import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ErrorPage from './Pages/ErrorPage';
import BookDetail from './Pages/BookDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/home' element={<Homepage/>} />
      <Route path='/book/:id' element={<BookDetail/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
  
   </BrowserRouter>
  );
}

export default App;
