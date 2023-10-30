import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Upload from "./routes/Upload";
import Base64 from "./routes/Base64";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/base64"}>base64</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/base64" element={<Base64 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
