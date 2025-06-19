import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./ui/MainLayout";
import GalleryItem from "./components/GalleryItem";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminLogin from "./features/auth/AdminLogin";
import Dashboard from "./features/admin/Dashboard";
import AdminDashboard from "./features/admin/AdminDashboard";
import { DatabaseProvider } from "./context/DatabaseContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <DatabaseProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="login" element={<AdminLogin />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/admin/edit" element={<AdminDashboard />} />
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="gallery/:id" element={<GalleryItem />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DatabaseProvider>
  );
}

export default App;
