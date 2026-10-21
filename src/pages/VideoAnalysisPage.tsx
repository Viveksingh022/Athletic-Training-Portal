import { useState } from 'react';
import { PlayCircle, Video, Upload, Search } from 'lucide-react';

interface VideoItem {
  id: number;
  title: string;
  date: string;
  duration: string;
  sport: string;
  thumbnail: string;
  processed: boolean;
  analysis: AnalysisResults | null;
}

interface AnalysisResults {
  performanceScore: number;
  injuryRisk: number;
  fatigue: number;
  readiness: number;
  highlights: {
    time: string;
    description: string;
  }[];
}

const VideoAnalysisPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResults | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSport, setFilterSport] = useState('all');

  // Mock video data
  const videos: VideoItem[] = [
    {
      id: 1,
      title: 'Game vs Rivals - 1st Quarter',
      date: 'Oct 18, 2026',
      duration: '12:45',
      sport: 'Basketball',
      thumbnail: 'https://via.placeholder.com/320x180',
      processed: true,
      analysis: {
        performanceScore: 87,
        injuryRisk: 22,
        fatigue: 35,
        readiness: 78,
        highlights: [
          { time: '2:15', description: 'Excellent jump shot form' },
          { time: '5:32', description: 'Good defensive stance' },
          { time: '8:47', description: 'Needs improvement on landing mechanics' },
          { time: '10:21', description: 'Quick recovery after sprint' }
        ]
      }
    },
    {
      id: 2,
      title: 'Shooting Practice - Form Work',
      date: 'Oct 17, 2026',
      duration: '08:30',
      sport: 'Basketball',
      thumbnail: 'https://via.placeholder.com/320x180',
      processed: true,
      analysis: {
        performanceScore: 92,
        injuryRisk: 12,
        fatigue: 18,
        readiness: 89,
        highlights: [
          { time: '1:05', description: 'Consistent release point' },
          { time: '3:20', description: 'Good follow-through' },
          { time: '5:45', description: 'Foot positioning could be better' }
        ]
      }
    },
    {
      id: 3,
      title: 'Soccer Match - First Half',
      date: 'Oct 16, 2026',
      duration: '22:15',
      sport: 'Soccer',
      thumbnail: 'https://via.placeholder.com/320x180',
      processed: false,
      analysis: null
    }
  ];

  const filteredVideos = videos.filter(video =>
    (filterSport === 'all' || video.sport === filterSport) &&
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Filter videos based on sport and search term

  const handleVideoSelect = (video: VideoItem) => {
    setSelectedVideo(video);
    if (video.processed && video.analysis) {
      setAnalysisResults(video.analysis);
    } else {
      setAnalysisResults(null);
    }
  };

  const handleProcessVideo = () => {
    if (!selectedVideo) return;

    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      // Generate mock analysis results
      const mockAnalysis: AnalysisResults = {
        performanceScore: Math.floor(Math.random() * 20) + 80,
        injuryRisk: Math.floor(Math.random() * 30) + 10,
        fatigue: Math.floor(Math.random() * 40) + 20,
        readiness: Math.floor(Math.random() * 20) + 70,
        highlights: [
          { time: '1:20', description: 'Strong acceleration' },
          { time: '3:45', description: 'Good change of direction' },
          { time: '6:10', description: 'Landing mechanics need work' }
        ]
      };

      setAnalysisResults(mockAnalysis);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section id="video-analysis" className="min-h-screen bg-background text-main-text">
      <div className="container section-padding">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-main-text">Video Analysis</h1>
          <p className="text-secondary-text">
            Upload, analyze, and gain insights from training and game footage
          </p>
        </header>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <div className="flex-1 min-w-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary-text" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search videos..."
                className="w-full px-4 py-2 pl-10 bg-card-background/50 border border-border rounded-xl text-main-text placeholder:text-secondary-text focus:outline-none"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <select
              value={filterSport}
              onChange={(e) => setFilterSport(e.target.value)}
              className="w-full px-4 py-2 bg-card-background/50 border border-border rounded-xl text-main-text placeholder:text-secondary-text focus:outline-none"
            >
              <option value="all">All Sports</option>
              <option value="basketball">Basketball</option>
              <option value="soccer">Soccer</option>
              <option value="tennis">Tennis</option>
              <option value="swimming">Swimming</option>
              <option value="track">Track & Field</option>
            </select>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 mb-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleVideoSelect(video)}
              className={`cursor-pointer bg-card-background/50 border border-border rounded-xl p-4 hover:bg-card-background/80 transition-colors ${selectedVideo?.id === video.id ? 'border-primary-blue' : ''}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 h-20 bg-primary-blue/20 rounded-lg flex items-center justify-center">
                  <Video className="h-10 w-10 text-primary-blue" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-main-text">{video.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-secondary-text">
                    <p>{video.sport}</p>
                    <p className="mx-1">•</p>
                    <p>{video.date}</p>
                    <p className="mx-1">•</p>
                    <p>{video.duration}</p>
                  </div>
                  {video.processed && (
                    <div className="mt-2">
                      <span className="px-2 py-1 text-xs bg-primary-blue/20 text-primary-blue rounded">
                        Analyzed
                      </span>
                    </div>
                  )}
                  {!video.processed && (
                    <div className="mt-2">
                      <span className="px-2 py-1 text-xs bg-attention-indicator/20 text-attention-indicator rounded">
                        Pending Analysis
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player and Analysis */}
        {selectedVideo && (
          <div className="grid gap-8 md:grid-cols-2">
            {/* Video Player */}
            <div className="bg-card-background/50 border border-border rounded-xl p-6">
              <h2 className="text-xl font-bold text-main-text mb-4">
                {selectedVideo.title}
              </h2>
              <div className="aspect-w-16 aspect-h-9 bg-primary-blue/20 rounded-lg mb-4">
                {/* In a real app, this would be a video player */}
                <div className="flex h-full w-full items-center justify-center text-secondary-text">
                  Video Player Placeholder
                </div>
              </div>

              {!selectedVideo.processed && !isProcessing && (
                <button
                  onClick={handleProcessVideo}
                  className="w-full bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-primary-blue/90 transition-colors"
                >
                  Process Video
                </button>
              )}

              {isProcessing && (
                <div className="flex items-center justify-center mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 border-2 border-primary-blue border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-sm text-main-text">Processing video...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Analysis Results */}
            <div className="bg-card-background/50 border border-border rounded-xl p-6">
              {analysisResults ? (
                <>
                  <h2 className="text-xl font-bold text-main-text mb-4">Analysis Results</h2>

                  {/* Metrics */}
                  <div className="grid gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-sm font-medium text-secondary-text">Performance Score</p>
                      <p className="text-2xl font-bold text-main-text">{analysisResults.performanceScore}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-secondary-text">Injury Risk</p>
                      <p className="text-2xl font-bold text-main-text">{analysisResults.injuryRisk}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-secondary-text">Fatigue Level</p>
                      <p className="text-2xl font-bold text-main-text">{analysisResults.fatigue}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-secondary-text">Readiness</p>
                      <p className="text-2xl font-bold text-main-text">{analysisResults.readiness}%</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h3 className="font-bold text-main-text mb-2">Key Highlights</h3>
                    <div className="space-y-2">
                      {analysisResults.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-primary-blue/10 rounded-lg">
                          <div className="flex-shrink-0">
                            <PlayCircle className="h-4 w-4 text-primary-blue" />
                          </div>
                          <div className="flex-1 space-y-0.5">
                            <p className="text-sm font-medium text-main-text">{highlight.time}</p>
                            <p className="text-xs text-secondary-text">{highlight.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="mt-6">
                    <h3 className="font-bold text-main-text mb-2">Recommendations</h3>
                    <p className="text-secondary-text">
                      Based on the analysis, consider focusing on landing mechanics during jump shots to reduce injury risk.
                      The athlete shows excellent consistency in shooting form which should be maintained.
                    </p>
                  </div>
                </>
              ) : selectedVideo.processed ? (
                <p className="text-secondary-text">Analysis results not available.</p>
              ) : (
                <p className="text-secondary-text">Select a video to view analysis results or process an unprocessed video.</p>
              )}
            </div>
          </div>
        )}

        {/* Upload Section */}
        <div className="mt-8">
          <div className="bg-card-background/50 border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-main-text mb-4">Upload New Video</h2>
            <p className="text-secondary-text mb-4">
              Upload training or game footage for analysis
            </p>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-3">
                <Upload className="h-8 w-8 text-primary-blue" />
                <p className="text-sm text-secondary-text">
                  Drag & drop or click to upload
                </p>
              </div>
              <p className="text-xs text-secondary-text text-center">
                Supported formats: MP4, MOV, AVI (Max size: 2GB)
              </p>
              <button
                className="bg-primary-blue text-white px-6 py-3 rounded-md hover:bg-primary-blue/90 transition-colors"
              >
                Browse Files
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAnalysisPage;