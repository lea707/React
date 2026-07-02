import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetails from "./pages/ArticleDetails";
function App() {
  return (
    <div>
      <p>Welcome to the articles website!</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ArticleDetails/:id" element={<ArticleDetails />} />
      </Routes>
    </div>
  );
}
export default App;
