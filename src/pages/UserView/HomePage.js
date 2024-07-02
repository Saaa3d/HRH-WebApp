import React from "react";

import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Hero from "../../components/homePage/Hero";
import How from "../../components/homePage/How";
import InstallApp from "../../components/homePage/InstallApp";
import Popular from "../../components/homePage/Popular";
import ReviewsSection from "../../components/homePage/ReviewsSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <How />
      <Popular />
      <ReviewsSection />
      <InstallApp />
      <Footer />
    </>
  );
};

export default HomePage;
