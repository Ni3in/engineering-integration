import Navbar from "./components/common/Navbar";
import React from "react";
import HomePage from "./Home/HomePage";
import About from "./about/About";
import SevicePage from "./our-services/SevicePage";
import ClientPage from "./our-client/ClientPage";
import OurIndustry from "./our-industry/OurIndustry";
import FreuentQuestions from "./f-n-q/FreuentQuestions";
import CustomerStories from "./customer-stories/CustomerStories";
import OurUpdates from "./updates/OurUpdates";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <HomePage />
      <About />
      <SevicePage />
      <ClientPage />
      <FreuentQuestions />
      <OurIndustry />
      <CustomerStories />
      <OurUpdates />
      <Footer />
    </React.Fragment>
  );
}
