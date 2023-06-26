import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Delete from './Delete';
import Edit from './Edit';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import NewPost from './NewPost';
import Other from './Other';
import PostPage from './PostPage';

function App() {
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
  return (
    <div className="App">
      <Router>
        <Header title="ReactBlogApp"/>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/*" element={<Other />} />
        </Routes>
        <Footer copy="Copyright ©️"/>
      </Router>
    </div>
    
  );

}

export default App;
