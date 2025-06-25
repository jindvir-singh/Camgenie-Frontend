import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Camgenie</h1>
      </header>

      <button className="Chatbot-button" onClick={toggleDialog}>
        💬
      </button>

      {isDialogOpen && (
        <div className="Chatbot-dialog">
          <h2>Pre-Chat Form</h2>
          <form className="Chatbot-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
            </div>

            <div className="form-group">
              <label htmlFor="query">Query</label>
              <textarea id="query" name="query" placeholder="Enter your query" required></textarea>
            </div>

            <button type="submit" className="Submit-button">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
