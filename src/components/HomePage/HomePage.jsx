import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import FeaturedPosts from './FeaturePosts' // Update the import path for FeaturedPosts
import UpcomingEvents from './UpcomingEvents';
import RecentNews from './RecentNews';
import Navbar from './Navbar';
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <WelcomeMessage />
      <FeaturedPosts />
      <UpcomingEvents/>
      <RecentNews/>
    </div>
  );
};

export default HomePage;