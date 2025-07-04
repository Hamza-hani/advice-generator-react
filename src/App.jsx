import { useState, useEffect } from 'react';
import AdviceCard from './components/AdviceCard';
import './App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      setAdvice('Error fetching advice. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  const githubLink = "https://github.com/haider14-9abbaas";
  const linkedinLink = "https://www.linkedin.com/in/syed-haider-abbas-zaidi-132525215/";

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <button className="toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <h1>Advice Generator</h1>
      <AdviceCard advice={advice} loading={loading} onNewAdvice={fetchAdvice} />

      <footer className="footer">
        <p>Developed by Haider abbas</p>
        <div className="social-icons">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
