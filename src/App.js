import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllBlogs from './Pages/Blogs';
import Post from './Components/Post';

function App() {
  
  return <>
    <div className="App">

      <Routes>
        <Route path= '/' element={<AllBlogs/>} />
        <Route path= 'posts/:id' element={<Post/>} />
      </Routes>

      </div>
  </>
  
  
}

export default App;
