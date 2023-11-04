import React, { useEffect } from "react";
import HomeTopSection from "../components/homepage/HomeTopSection";
import Header from "../components/layout/Header";
import HomeprojectSection from "../components/homepage/HomeprojectSection";
import HomeMidSection from "../components/homepage/HomeMidSection";
import Footer from "../components/layout/Footer";
import imge from "../assests/images/2 (1).png"
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ashu-main-container">
      <div className="ashu-components">
        <Header />
        <HomeTopSection />
        <HomeprojectSection />
        <HomeMidSection />
        <Footer />
      </div>
      <div className="mob-img-ashu">
        <img src={imge} alt="mobile img" />
      </div>
    </div>
  );
}

export default Home;
