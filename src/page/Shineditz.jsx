import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TopSection from "../components/Pages/TopSection";
import ShineOverviewSection from "../components/Shineditz/ShineOverviewSection";
import ShineBackgroundSection from "../components/Shineditz/ShineBackgroundSection";
function Shineditz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topSectionStyle = {
    color: "#007a78",
  };

  return (
    <div>
      <Header />
      <TopSection
        image="pge-top-bgDivShine"
        title="Shineditz"
        style={topSectionStyle}
        classnm="shineditzText"
      />
      <ShineOverviewSection />
      <ShineBackgroundSection />
      <Footer />
    </div>
  );
}

export default Shineditz;
