
import Navbar from '../components/layout/Navbar';
import Hero from '../components/landing/Hero';
import PoseTracking from '../components/landing/PoseTracking';
import DashboardPreview from '../components/landing/DashboardPreview';
import PreventionRehab from '../components/landing/PreventionRehab';
import HowItWorks from '../components/landing/HowItWorks';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/layout/Footer';
import UpdatesPage from './UpdatesPage';
import AboutPage from './AboutPage';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PoseTracking />
      <DashboardPreview />
      <PreventionRehab />
      <HowItWorks />
      <UpdatesPage />
      <AboutPage />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default HomePage;