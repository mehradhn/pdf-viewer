import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./routes/Upload";
// import Base64 from "./routes/Base64";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upload />} />
        {/* <Route path="/base64" element={<Base64 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
