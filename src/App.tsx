import "./App.css";
import { Route, Routes } from "react-router-dom";


import HomePage from "./pages/Home";
import FilesListPage from "./pages/FilesList";
import UploadPage from "./pages/Upload";

import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/files-list" element={ <FilesListPage /> } /> 
        <Route path="/upload" element={<UploadPage /> } />
        <Route path="/" element={<HomePage /> } />
      </Routes>
    </>
  );
}

export default App;
