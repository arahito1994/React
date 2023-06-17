import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Delete from './Delete';
import Edit from './Edit';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import NewPost from './NewPost';
import Other from './Other';
import PostPage from './PostPage';

function App() {
  return (
    <div className="App">
      <h1>作成開始</h1>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/*" element={<Other />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );

}

export default App;
