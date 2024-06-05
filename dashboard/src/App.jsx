import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Order,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";
import Sales from "./pages/dashboard/Sales";
import Analytics from "./pages/dashboard/Analytics";
import Login from "./pages/Login";
// import Dashboard from "./Dashboard";
import Layout from "./Layout";
import Register from "./pages/register";
import PrivateRoute from "./route/PrivateRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Sales />} />
              <Route path="/sale" element={<Sales />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* "Pages" */}
              <Route path="/orders" element={<Order />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* "Apps" */}
              <Route path="/Kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* "Chars" */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
