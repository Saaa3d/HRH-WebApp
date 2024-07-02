import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/UserView/HomePage";
import HistoryPage from "./pages/UserView/HistoryPage";
import CategoriesPage from "./pages/UserView/CategoriesPage";
import ProfilePage from "./pages/UserView/ProfilePage";
import SummaryPage from "./pages/UserView/SummaryPage";
import LoginPage from "./pages/UserView/LoginPage";
import BookingPage from "./pages/UserView/BookingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
