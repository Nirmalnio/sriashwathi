import React, { useEffect } from "react";
import HomeTopSection from "../components/homepage/HomeTopSection";
import Header from "../components/layout/Header";
import HomeprojectSection from "../components/homepage/HomeprojectSection";
import HomeMidSection from "../components/homepage/HomeMidSection";
import Footer from "../components/layout/Footer";

function Home() {
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <div>
      <Header />
      <HomeTopSection />
      <HomeprojectSection />
      <HomeMidSection />
      <Footer />
    </div>
  );
}

export default Home;
