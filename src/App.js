import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import { createContext, useState } from "react";

export const BookMarkContext = createContext();



function App() {

  const [bookMark, setBookMark] = useState(false);

  return (
    <BookMarkContext.Provider value={{bookMark, setBookMark}}>
    <div className="h-screen w-screen">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </BrowserRouter>
    
    </div>
    </BookMarkContext.Provider>
  );
}

export default App;
