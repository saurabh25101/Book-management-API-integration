import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookForm from "./components/FormData";
import DashBoard from "./pages/Dashboard/Dashboard";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <DashBoard />
            </>
          }
        />

        <Route
          path="/bookform/:id"
          element={<BookForm />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
