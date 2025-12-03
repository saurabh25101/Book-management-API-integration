import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookForm from "./components/FormData";
import Navbar from "./pages/Navbar";
import DashBoard from "./pages/dashboard/DashBoard";
import { Toaster } from "react-hot-toast";




const App = () => {
  return (
    <BrowserRouter>
    

      <Routes>
        <Route
          path="/"
          element={
            <>
          
              <DashBoard />
            </>
          }
        />

        <Route
          path="/bookform/:id"
          element={<BookForm />}
        />
         <Route
          path="/bookform"
          element={<BookForm />}
        />
      </Routes>
       <Toaster position="top-center"/>
    </BrowserRouter>
  );
};

export default App;
