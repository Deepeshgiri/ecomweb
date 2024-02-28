import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Policy } from "./pages/Policy";
import { Pagenotfound } from "./pages/Pagenotfound";
import { Registration } from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
import Private from "./routes/Private";
import AdminRoute from "./routes/AdminRoute";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { CreateCategory } from "./pages/admin/CreateCategory";
import { CreateProduct } from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import { Profile } from "./component/Profile";
import { Orders } from "./component/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* protected route */}
        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/createCategory" element={<CreateCategory />} />
          <Route path="user/createProduct" element={<CreateProduct />} />
          <Route path="user/users" element={<Users />} />
          <Route path="user/profile" element={<Profile/>} />
          <Route path="user/orders" element={<Orders/>} />
        </Route>
         {/* protected route */}
        <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="admin" element={<AdminDashboard/>} />
        </Route>

        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
