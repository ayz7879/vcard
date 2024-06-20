import React from "react";
import { Container } from "@mui/material";
import NameSection from "./components/NameSection";
import ContactPage from "./components/ContactPage";
import Appointment from "./components/Appointment";
import Payment from "./components/Payment";
import Product from "./components/Product";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container className="cl" maxWidth="md">
      <NameSection />
      {/* Other components or sections */}

      <Payment />
      <Product />
      <Appointment />
      <ContactPage />
      <Footer />
    </Container>
  );
};

export default App;
