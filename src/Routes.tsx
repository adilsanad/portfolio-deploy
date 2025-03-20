import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout";
import Cyclo from "./projects/Cyclo";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import AAIWebapp from "./projects/AAIWebapp";
import AAIWebsite from "./projects/AAIWebsite";

const AppRoutes = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|ipod|blackberry|opera mini|iemobile|mobile/i.test(userAgent));
  }, []);

  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      // Only scroll to top if it's not a hash link navigation (which starts with #)
      if (!location.hash) {
        window.scrollTo(0, 0);
      }
    }, [location]);

    return null;
  };

  return (
    <Router basename="/portfolio-deploy/">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/portfolio-deploy/" element={<Home isMobile={isMobile} />} />
          <Route path="/portfolio-deploy/cyclo" element={<Cyclo isMobile={isMobile} />} />
          <Route path="/portfolio-deploy/aai-webapp-revamp" element={<AAIWebapp isMobile={isMobile}/>} />
          <Route path="/portfolio-deploy/aai-website-refresh" element={<AAIWebsite isMobile={isMobile}/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
