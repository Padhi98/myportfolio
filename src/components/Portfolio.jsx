import React, { useState } from 'react';
import { Github, Linkedin, Mail, Cloud, Book, Briefcase, Award } from 'lucide-react';
import LanternToggle from './LanternToggle';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <LanternToggle isDark={isDarkMode} onToggle={toggleTheme} />
      
      {/* Header/Hero Section */}
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Ankita Padhi
          </h1>
          <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Google Cloud Platform Subject Matter Expert
          </p>
          
          <div className="flex space-x-4">
            <a href="mailto:padhiankita1@gmail.com" 
              className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              <Mail className="w-5 h-5 mr-2" />
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/ankita-padhi/" 
              className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              <Linkedin className="w-5 h-5 mr-2" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Padhi98" 
              className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
              <Github className="w-5 h-5 mr-2" />
              <span>Github</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Briefcase className={`w-6 h-6 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Work Experience
            </h2>
          </div>
          
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6`}>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Google Cloud Platform (Subject Matter Expert)
            </h3>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Cognizant, Pune, Maharashtra | Jul 2021 - Present
            </p>
            <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Supported 130+ projects/initiatives focusing on data acquisition and processing</li>
              <li>• Saved 4000+ company hours through efficient customer issue resolution</li>
              <li>• Architected 100+ implementations for Fortune 500 clients</li>
              <li>• Led RFx responses contributing to revenue growth</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Cloud className={`w-6 h-6 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Project
            </h2>
          </div>
          
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6`}>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Google Cloud Resume Challenge
            </h3>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Built and deployed a website on Google Cloud Platform demonstrating practical skills in:
            </p>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>• Cloud Storage and Cloud Build implementation</li>
              <li>• Cloud Firestore database integration</li>
              <li>• Infrastructure as Code (IaC)</li>
              <li>• CI/CD pipeline setup</li>
            </ul>
            <a href="https://ankitapadhi.com" 
              className={`inline-block mt-4 ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
              }`}>
              View Project →
            </a>
          </div>
        </section>

        {/* Skills & Certifications Section */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Award className={`w-6 h-6 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Skills
              </h2>
            </div>
            
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6`}>
              <div className="mb-4">
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'BASH', 'SQL'].map(skill => (
                    <span key={skill} className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Cloud & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'GCP Compute',
                    'BigQuery',
                    'Dataproc',
                    'Cloud Storage',
                    'Pub/sub',
                    'Chronicle',
                    'Bigtable',
                    'Sklearn'
                  ].map(skill => (
                    <span key={skill} className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Book className={`w-6 h-6 mr-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Education
              </h2>
            </div>
            
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6`}>
              <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                M.Tech in AI & ML
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Birla Institute of Technology & Science
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Jul 2022 - June 2024
              </p>
              
              <div className="mt-6">
                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'
                  }`}>
                    Google Cloud Professional DevOps Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t mt-16`}>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Ankita Padhi. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;