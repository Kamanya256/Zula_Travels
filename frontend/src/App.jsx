import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Flights from "./pages/Flights/Flights";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import Courier from "./pages/Courier";
import Cars from "./pages/Cars";
import Venues from "./pages/Venues";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

// Flights Subpages
import Airlines from "./pages/Flights/Airlines";
import Details from "./pages/Flights/Details";

// Shared Components
import Booking from "./components/Booking";
import Search from "./components/Search";

// TourDetails Pages
import Adventure from "./pages/TourDetails/Adventure";
import Chimps from "./pages/TourDetails/Chimps";
import Safari from "./pages/TourDetails/Safari";
import Gorilla from "./pages/TourDetails/Gorilla";
import Wildlife from "./pages/TourDetails/Wildlife";
import Honeymoon from "./pages/TourDetails/Honeymoon";
import Rafting from "./pages/TourDetails/Rafting";
import Bird from "./pages/TourDetails/Bird";
import Hotel from "./pages/Hotels";
import Culture from "./pages/TourDetails/Culture";
import Transfer from "./pages/TourDetails/Transfer";
import Pilgrim from "./pages/TourDetails/Pilgrim";
import Flight from "./pages/TourDetails/Flight";
import Vehicle from "./pages/TourDetails/Vehicle";
import City from "./pages/TourDetails/City";
import Marine from "./pages/TourDetails/Marine";
import Education from "./pages/TourDetails/Education";
import Combined from "./pages/TourDetails/Combined";
import Hiking from "./pages/TourDetails/Hiking";
import Sports from "./pages/TourDetails/Sports";

// Layout wrapper for consistent Navbar/Footer
const Layout = ({ children, showHero = false }) => (
  <>
    <Navbar />
    {showHero && <Hero />}
    <main>{children}</main>
    <Footer />
  </>
);

// Router Configuration
const router = createBrowserRouter([
  // ===== MAIN ROUTES =====
  { path: "/", element: <Layout showHero={true}><Home /></Layout> },
  { path: "/about", element: <Layout><About /></Layout> },
  { path: "/packages", element: <Layout><Packages /></Layout> },
  { path: "/flights", element: <Layout><Flights /></Layout> },
  { path: "/hotels", element: <Layout><Hotels /></Layout> },
  { path: "/hotel/:id", element: <Layout><HotelDetails /></Layout> },
  { path: "/courier", element: <Layout><Courier /></Layout> },
  { path: "/cars", element: <Layout><Cars /></Layout> },
  { path: "/venues", element: <Layout><Venues /></Layout> },
  { path: "/events", element: <Layout><Venues /></Layout> },
  { path: "/contact", element: <Layout><Contact /></Layout> },
  { path: "/services", element: <Layout><Services /></Layout> },
  { path: "/booking", element: <Layout><Booking /></Layout> },
  { path: "/search", element: <Layout><Search /></Layout> },

  // ===== FLIGHT ROUTES =====
  { path: "/flights/airlines", element: <Layout><Airlines /></Layout> },
  { path: "/flights/airlines/:id", element: <Layout><Details /></Layout> },

  // ===== TOUR DETAILS ROUTES =====
  { path: "/packages/adventure", element: <Layout><Adventure /></Layout> },
  { path: "/packages/chimps", element: <Layout><Chimps /></Layout> },
  { path: "/packages/safari", element: <Layout><Safari /></Layout> },
  { path: "/packages/gorilla", element: <Layout><Gorilla /></Layout> },
  { path: "/packages/wildlife", element: <Layout><Wildlife /></Layout> },
  { path: "/packages/honeymoon", element: <Layout><Honeymoon /></Layout> },
  { path: "/packages/rafting", element: <Layout><Rafting /></Layout> },
  { path: "/packages/bird", element: <Layout><Bird /></Layout> },
  { path: "/packages/hotel", element: <Layout><Hotel /></Layout> },
  { path: "/packages/culture", element: <Layout><Culture /></Layout> },
  { path: "/packages/transfer", element: <Layout><Transfer /></Layout> },
  { path: "/packages/pilgrim", element: <Layout><Pilgrim /></Layout> },
  { path: "/packages/flight", element: <Layout><Flight /></Layout> },
  { path: "/packages/vehicle", element: <Layout><Vehicle /></Layout> },
  { path: "/packages/city", element: <Layout><City /></Layout> },
  { path: "/packages/marine", element: <Layout><Marine /></Layout> },
  { path: "/packages/education", element: <Layout><Education /></Layout> },
  { path: "/packages/combined", element: <Layout><Combined /></Layout> },
  { path: "/packages/hiking", element: <Layout><Hiking /></Layout> },
  { path: "/packages/sports", element: <Layout><Sports /></Layout> },

  // ===== 404 FALLBACK =====
  {
    path: "*",
    element: (
      <Layout>
        <div
          style={{
            textAlign: "center",
            padding: "100px 20px",
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "#ff4d00",
              fontSize: "3rem",
              marginBottom: "1rem",
            }}
          >
            404
          </h2>
          <p
            style={{
              color: "#6c757d",
              fontSize: "1.2rem",
              marginBottom: "2rem",
            }}
          >
            Page Not Found
          </p>
          <a
            href="/"
            style={{
              padding: "12px 30px",
              background: "#0ea66a",
              color: "white",
              textDecoration: "none",
              borderRadius: "50px",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#067a4c";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "#0ea66a";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Go Back Home
          </a>
        </div>
      </Layout>
    ),
  },
]);

// ===== MAIN APP =====
export default function App() {
  return <RouterProvider router={router} />;
}
