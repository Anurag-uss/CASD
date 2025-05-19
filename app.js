import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ChatInterface from './components/ChatInterface';
import RoadmapDisplay from './components/RoadmapDisplay';
import './styles/main.css';
import './styles/theme.css';

function App() {
  const [roadmap, setRoadmap] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <ChatInterface setRoadmap={setRoadmap} setIsLoading={setIsLoading} />
        <RoadmapDisplay roadmap={roadmap} isLoading={isLoading} />
      </div>
      <footer className="app-footer">
        <p>© 2023 Guiddii - Educational Purposes Only</p>
      </footer>
    </div>
  );
}

export default App;
