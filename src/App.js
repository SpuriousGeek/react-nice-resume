import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // TODO Enable analytics once configured
  // useGoogleAnalytics();

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('./resumeData.json');
        if (!response.ok) {
          const errorMessage = 'Failed to fetch resume data';
          console.error(errorMessage);
          setError(errorMessage);
        }
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Error fetching resume data:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResumeData().then(_ => console.log('Successfully fetched resume data'));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
  );
};

export default App;