import React from 'react';
// import './WelcomeMessage.css';

const WelcomeMessage = () => {
  return (
    <section className="welcome-message">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-center mb-4 mt-4">Welcome to My Blog Website!</h1>
            <p className="text-center">Here, you'll find a variety of informative and engaging articles covering diverse topics such as lifestyle, technology, travel, and more. Our aim is to provide valuable content that entertains, educates, and inspires our readers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;