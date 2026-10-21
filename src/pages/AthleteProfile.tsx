import { useState } from 'react';
import { Users, Activity, Heart, ShieldCheck, Clock, Video } from 'lucide-react';

const AthleteProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock athlete data
  const athlete = {
    id: 1,
    name: 'Alex Johnson',
    sport: 'Basketball',
    team: 'Elite Athletics',
    jerseyNumber: 23,
    photo: 'https://via.placeholder.com/150',
    stats: {
      readiness: 85,
      performanceScore: 92,
      injuryRisk: 15,
      fatigue: 30,
    },
    recentPerformance: [
      { date: '2026-10-10', score: 88 },
      { date: '2026-10-12', score: 90 },
      { date: '2026-10-14', score: 85 },
      { date: '2026-10-16', score: 92 },
    ],
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  let tabContent;
  if (activeTab === 'overview') {
    tabContent = (
      <div className="space-y-6">
        <div className="bg-card-background/50 border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-text mb-4">Athlete Overview</h3>
          <p className="text-secondary-text">
            Alex is a promising basketball player with excellent performance metrics.
            Readiness is high, indicating good recovery and preparation for training.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-card-background/50 border border-border rounded-xl p-6">
            <h4 className="font-bold text-main-text mb-4">Readiness Trend</h4>
            <div className="h-32 bg-primary-blue/10 rounded-lg"></div>
            <p className="text-xs text-secondary-text mt-2">
              * Chart placeholder - would show readiness over time
            </p>
          </div>
          <div className="bg-card-background/50 border border-border rounded-xl p-6">
            <h4 className="font-bold text-main-text mb-4">Performance Scores</h4>
            <div className="h-32 bg-primary-blue/10 rounded-lg"></div>
            <p className="text-xs text-secondary-text mt-2">
              * Chart placeholder - would show performance scores
            </p>
          </div>
        </div>
      </div>
    );
  } else if (activeTab === 'performance') {
    tabContent = (
      <div className="space-y-6">
        <div className="bg-card-background/50 border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-text mb-4">Performance Analytics</h3>
          <p className="text-secondary-text">
            Detailed breakdown of athletic performance across key metrics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-card-background/50 border border-border rounded-xl p-6">
            <h4 className="font-bold text-main-text mb-4">Monthly Performance</h4>
            <div className="h-40 bg-primary-blue/10 rounded-lg"></div>
          </div>
          <div className="bg-card-background/50 border border-border rounded-xl p-6">
            <h4 className="font-bold text-main-text mb-4">Skill Breakdown</h4>
            <div className="space-y-3">
              {[
                { label: 'Shooting', value: 85 },
                { label: 'Speed', value: 78 },
                { label: 'Agility', value: 82 },
                { label: 'Strength', value: 90 },
                { label: 'Endurance', value: 75 },
              ].map((skill, index) => (
                <div key={index} className="flex justify-between space-x-2">
                  <span className="text-sm text-secondary-text">{skill.label}</span>
                  <span className="text-sm font-medium text-main-text">{skill.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (activeTab === 'videos') {
    tabContent = (
      <div className="space-y-6">
        <div className="bg-card-background/50 border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-text mb-4">Video Analysis</h3>
          <p className="text-secondary-text">
            Review and analyze training and game footage.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              title: 'Game vs Rivals - Oct 15',
              date: 'Oct 15, 2026',
              duration: '12:30',
              type: 'Game',
            },
            {
              title: 'Shooting Practice - Oct 14',
              date: 'Oct 14, 2026',
              duration: '08:15',
              type: 'Practice',
            },
            {
              title: 'Strength Training - Oct 13',
              date: 'Oct 13, 2026',
              duration: '06:45',
              type: 'Training',
            },
          ].map((video, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-card-background/50 border border-border rounded-xl">
              <div className="flex-shrink-0">
                <Video className="h-5 w-5 text-primary-blue" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-bold text-main-text">{video.title}</p>
                <p className="text-sm text-secondary-text">
                  {video.date} • {video.duration} • {video.type}
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-primary-blue text-white px-3 py-1 rounded text-xs hover:bg-primary-blue/90">
                  Watch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (activeTab === 'settings') {
    tabContent = (
      <div className="space-y-6">
        <div className="bg-card-background/50 border border-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-main-text mb-4">Profile Settings</h3>
          <p className="text-secondary-text">
            Update athlete information and preferences.
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-secondary-text mb-1">
              Display Name
            </label>
            <input
              type="text"
              value={athlete.name}
              placeholder="Enter display name"
              className="w-full px-3 py-2 bg-card-background/50 border border-border rounded-xl text-main-text placeholder:text-secondary-text focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-secondary-text mb-1">
              Sport
            </label>
            <select
              value={athlete.sport}
              className="w-full px-3 py-2 bg-card-background/50 border border-border rounded-xl text-main-text placeholder:text-secondary-text focus:outline-none"
            >
              <option value="basketball">Basketball</option>
              <option value="soccer">Soccer</option>
              <option value="tennis">Tennis</option>
              <option value="swimming">Swimming</option>
              <option value="track">Track & Field</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-secondary-text mb-1">
              Team
            </label>
            <input
              type="text"
              value={athlete.team}
              placeholder="Enter team name"
              className="w-full px-3 py-2 bg-card-background/50 border border-border rounded-xl text-main-text placeholder:text-secondary-text focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-primary-blue/90 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    );
  }

  return (
    <section id="athlete-profile" className="min-h-screen bg-background text-main-text">
      <div className="container section-padding">
        <div className="flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-8">
          {/* Athlete Header */}
          <div className="flex-1 min-w-0 bg-card-background/50 border border-border rounded-xl p-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 bg-primary-blue/20 rounded-full flex items-center justify-center">
                <Users className="h-12 w-12 text-primary-blue" />
              </div>
              <h2 className="text-2xl font-bold text-main-text">{athlete.name}</h2>
              <div className="flex space-x-2 text-sm text-secondary-text">
                <p>#{athlete.jerseyNumber} {athlete.sport}</p>
                <p className="mx-1">•</p>
                <p>{athlete.team}</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="w-full sm:w-64 space-y-4">
            {[
              { label: 'Readiness', value: `${athlete.stats.readiness}%`, icon: Activity, color: 'text-primary-blue' },
              { label: 'Performance', value: `${athlete.stats.performanceScore}%`, icon: Heart, color: 'text-attention-indicator' },
              { label: 'Injury Risk', value: `${athlete.stats.injuryRisk}%`, icon: ShieldCheck, color: 'text-warning' },
              { label: 'Fatigue', value: `${athlete.stats.fatigue}%`, icon: Clock, color: 'text-secondary-text' },
            ].map((stat, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card-background/50 border border-border rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-primary-blue/20 rounded-full">
                  <stat.icon className="h-4 w-4" style={{ color: stat.color.replace('text-', '') }} />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-secondary-text">{stat.label}</p>
                  <p className="text-base font-bold text-main-text">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => handleTabChange('overview')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'overview' ? 'bg-primary-blue text-white' : 'bg-card-background/50 text-main-text hover:bg-card-background/80'}`}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabChange('performance')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'performance' ? 'bg-primary-blue text-white' : 'bg-card-background/50 text-main-text hover:bg-card-background/80'}`}
            >
              Performance
            </button>
            <button
              onClick={() => handleTabChange('videos')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'videos' ? 'bg-primary-blue text-white' : 'bg-card-background/50 text-main-text hover:bg-card-background/80'}`}
            >
              Video Analysis
            </button>
            <button
              onClick={() => handleTabChange('settings')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'settings' ? 'bg-primary-blue text-white' : 'bg-card-background/50 text-main-text hover:bg-card-background/80'}`}
            >
              Settings
            </button>
          </div>

          {/* Tab Content */}
          {tabContent}
        </div>
      </div>
    </section>
  );
};

export default AthleteProfile;