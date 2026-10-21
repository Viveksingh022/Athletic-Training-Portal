import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PerformancePage from './pages/PerformancePage';
import DashboardsPage from './pages/DashboardsPage';
import PreventionRehabPage from './pages/PreventionRehabPage';
import HowItWorksPage from './pages/HowItWorksPage';
import UpdatesPage from './pages/UpdatesPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AthleteProfile from './pages/AthleteProfile';
import VideoAnalysisPage from './pages/VideoAnalysisPage';
// Import other pages as they are created

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-main-text">
        {/* Routes will be rendered here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/dashboards" element={<DashboardsPage />} />
          <Route path="/prevention-rehab" element={<PreventionRehabPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/athlete/:id" element={<AthleteProfile />} />
          <Route path="/video-analysis" element={<VideoAnalysisPage />} />
          {/* Other routes will go here as pages are created */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;