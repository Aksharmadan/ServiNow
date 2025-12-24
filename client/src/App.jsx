import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ServiceListing from "./pages/ServiceListing";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import WorkerDashboard from "./pages/WorkerDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/services/:service" element={<ServiceListing />} />
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pro" element={<WorkerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
