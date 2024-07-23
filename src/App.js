import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to House Finder</h1>
        <p>Your ideal home is just a click away.</p>
      </header>
      <main>
        <section id="features">
          <h2>Key Features</h2>
          <ul>
            <li>Browse through comprehensive property listings</li>
            <li>View high-quality images and detailed descriptions</li>
            <li>Connect with real estate agents</li>
          </ul>
        </section>
        <section id="gallery">
          <h2>Featured Properties</h2>
          <div className="gallery">
            <img src="/images/house1.webp" alt="House 1" />
            <img src="/images/house2.jpg" alt="House 2" />
            <img src="/images/house3.jpg" alt="House 3" />
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 House Finder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


