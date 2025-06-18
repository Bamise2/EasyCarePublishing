import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Upload from "./pages/UploadPage";
import Custom from './pages/Custom'

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='/custom' element={<Custom/>}></Route>
      </Routes>
    </div>
  );
}
