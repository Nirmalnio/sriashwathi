import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TopSection from '../components/Pages/TopSection';
import OverviewSection from '../components/Pages/OverviewSection';
import BackgroundSection from '../components/Pages/BackgroundSection';
import ComponentsSection from '../components/Pages/ComponentsSection';
import BannerSlide from '../components/Pages/BannerSlide';
import CourseDetails from '../components/Pages/CourseDetails';

function Fingrad() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const topSectionStyle = {
        color: '#007a78',
    };

    return (
        <div>
            <Header />
            <TopSection image="pge-top-bgDiv" title="FinGrad" style={topSectionStyle} />
            <OverviewSection />
            <BackgroundSection />
            <ComponentsSection />
            <BannerSlide />
            <CourseDetails />
            <Footer />
        </div>
    );
}

export default Fingrad;
