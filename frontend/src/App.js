import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogsSearchPage from "./pages/BlogsSearchPage.js";
import SingleBlogPage from "./pages/SingleBlogPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<BlogsSearchPage />} />
        <Route path="/:slug" element={<SingleBlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
