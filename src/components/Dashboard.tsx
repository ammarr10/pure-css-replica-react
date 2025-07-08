import React from 'react';
import competitionImage from '../assets/competition-image.png';
import authorAvatar from '../assets/author-avatar.png';
import userAvatar from '../assets/user-avatar.png';

const Dashboard = () => {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">E</div>
            Elsewedy School
          </div>
        </div>
        
        <div className="search-bar">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search your Competition here...."
          />
          <div className="search-icon">🔍</div>
        </div>
        
        <div className="header-right">
          <div className="header-actions">
            <button className="header-btn">🔔</button>
            <button className="header-btn">⚙️</button>
          </div>
          <div className="user-profile">
            <div className="user-info">
              <div className="user-name">Mohamed Hanafy Khairy</div>
              <div className="user-role">Continue Your Journey And Achieve Your Target</div>
            </div>
            <div className="user-avatar">
              <img src={userAvatar} alt="User Avatar" />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-section">
          <div className="sidebar-title">Overview</div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link active">
                <span className="sidebar-icon">🏆</span>
                competitions
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">👥</span>
                Students
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">👨‍🏫</span>
                Teachers
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">👨‍💻</span>
                Engineers
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">👑</span>
                Main Admins
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">🎯</span>
                Teams
              </a>
            </li>
          </ul>
        </div>
        
        <div className="sidebar-section">
          <div className="sidebar-title">Settings</div>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">⚙️</span>
                Settings
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                <span className="sidebar-icon">🚪</span>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-area">
          {/* Hero Banner */}
          <div className="hero-banner">
            <div className="hero-content">
              <div className="hero-label">Local Competitions</div>
              <h1 className="hero-title">Boost Your Potential With Inspiring Competitions</h1>
              <button className="join-btn">
                Join Now
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon local">🏆</div>
              <div className="stat-number">16</div>
              <div className="stat-label">Local Competitions</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon international">🌍</div>
              <div className="stat-number">12</div>
              <div className="stat-label">International Competitions</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon total">📊</div>
              <div className="stat-number">27</div>
              <div className="stat-label">Total Competitions</div>
            </div>
          </div>

          {/* Local Competitions */}
          <div className="competition-section">
            <div className="section-header">
              <h2 className="section-title">Local Competitions</h2>
              <div className="section-nav">
                <button className="nav-btn">‹</button>
                <button className="nav-btn">›</button>
              </div>
            </div>
            <div className="competitions-grid">
              {[1, 2, 3].map((item) => (
                <div key={item} className="competition-card">
                  <div className="card-image">
                    <img src={competitionImage} alt="Competition" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    <div className="card-badge">Fanni Mobtaker</div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Beginner's Guide To Becoming A Professional Frontend Developer</h3>
                    <div className="card-footer">
                      <img src={authorAvatar} alt="Author" className="author-avatar" />
                      <div className="author-info">
                        <div className="author-name">Prashant Kumar Singh</div>
                        <div className="author-role">Software Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Competitions */}
          <div className="competition-section">
            <div className="section-header">
              <h2 className="section-title">International Competitions</h2>
              <div className="section-nav">
                <button className="nav-btn">‹</button>
                <button className="nav-btn">›</button>
              </div>
            </div>
            <div className="competitions-grid">
              {[1, 2, 3].map((item) => (
                <div key={item} className="competition-card">
                  <div className="card-image">
                    <img src={competitionImage} alt="Competition" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    <div className="card-badge">Fanni Mobtaker</div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Beginner's Guide To Becoming A Professional Frontend Developer</h3>
                    <div className="card-footer">
                      <img src={authorAvatar} alt="Author" className="author-avatar" />
                      <div className="author-info">
                        <div className="author-name">Prashant Kumar Singh</div>
                        <div className="author-role">Software Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="sidebar-header">
            <div className="profile-avatar">
              <img src={userAvatar} alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="profile-name">Mohamed Hanafy Khairy</div>
            <div className="profile-subtitle">Continue Your Journey And Achieve Your Target</div>
            <div className="profile-actions">
              <button className="action-btn">🔔</button>
              <button className="action-btn">✉️</button>
              <button className="action-btn">📧</button>
            </div>
          </div>
          
          <div className="chart-section">
            <div className="chart-title">Fanni Mobtaker</div>
            <div className="chart-container">
              <div className="chart-bars">
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
                <div className="chart-bar"></div>
              </div>
            </div>
            
            <div className="team-stats">
              <div className="team-item">
                <div className="team-info">
                  <div className="team-indicator red"></div>
                  <span className="team-name">Competition 1</span>
                </div>
                <span className="team-count">21 Team</span>
              </div>
              <div className="team-item">
                <div className="team-info">
                  <div className="team-indicator orange"></div>
                  <span className="team-name">Competition 2</span>
                </div>
                <span className="team-count">10 Team</span>
              </div>
              <div className="team-item">
                <div className="team-info">
                  <div className="team-indicator gray"></div>
                  <span className="team-name">Competition 3</span>
                </div>
                <span className="team-count">0 Team</span>
              </div>
            </div>
            
            <button className="new-competition-btn">New Competition</button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Dashboard;