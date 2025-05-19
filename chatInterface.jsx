import React, { useState } from 'react';
import '../styles/chat.css';

const ChatInterface = ({ setRoadmap, setIsLoading }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: "Hi there! I'm Guiddii, your career roadmap assistant. What career path would you like to explore today?" }
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage = { sender: 'user', text: message };
    setChatHistory([...chatHistory, userMessage]);
    setMessage('');
    setIsLoading(true);
    
    try {
      // Simulate API call (replace with actual API call)
      const response = await generateRoadmap(message);
      
      // Add bot response to chat
      setChatHistory(prev => [...prev, { sender: 'bot', text: response.text }]);
      setRoadmap(response.roadmap);
    } catch (error) {
      setChatHistory(prev => [...prev, { 
        sender: 'bot', 
        text: "Sorry, I encountered an error. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Mock function - replace with actual API call
  const generateRoadmap = async (query) => {
    // In a real implementation, this would call your backend API
    return new Promise(resolve => {
      setTimeout(() => {
        const sampleRoadmap = {
          career: query,
          steps: [
            "1. Complete relevant bachelor's degree",
            "2. Gain internship experience",
            "3. Develop technical skills through certifications",
            "4. Build portfolio projects",
            "5. Network with professionals in the field"
          ],
          resources: [
            { name: "Coursera Course", url: "#" },
            { name: "Industry Certification", url: "#" }
          ]
        };
        
        resolve({
          text: `Here's a suggested roadmap for ${query}:`,
          roadmap: sampleRoadmap
        });
      }, 1500);
    });
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Guiddii Career Advisor</h2>
        <p>Ask me about any career path</p>
      </div>
      <div className="chat-messages">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your career query..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? <i className="fas fa-spinner fa-spin"></i> : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
