import React from 'react';
import './JobNews.css'; // Import CSS file for styling

const JobNews = () => {
  const jobNewsData = [
    // Job news data...
    {
        id: 1,
        title: 'Webdeveloper',
        description: 'HTML CSS JS',
        company: 'TCS',
        location: 'Pune',
        publishedDate: 'Published Date 1',
      },
      {
        id: 2,
        title: 'App developer',
        description: 'Kotlin',
        company: 'Amazon',
        location: 'Hyderabad',
        publishedDate: 'Published Date 2',
      },
      {
        id: 2,
        title: 'Aws Developer',
        description: 'Aws',
        company: 'Google',
        location: 'Benguluru',
        publishedDate: 'Published Date 2',
      },
      {
        id: 2,
        title: 'Devops',
        description: 'Terraform,Docker',
        company: 'Capgemini',
        location: 'Nagpur',
        publishedDate: 'Published Date 2',
      },
      {
        id: 2,
        title: 'Job Title 2',
        description: 'Job description 2',
        company: 'Company 2',
        location: 'Location 2',
        publishedDate: 'Published Date 2',
      },
      {
        id: 2,
        title: 'Job Title 2',
        description: 'Job description 2',
        company: 'Company 2',
        location: 'Location 2',
        publishedDate: 'Published Date 2',
      },
      {
        id: 2,
        title: 'Job Title 2',
        description: 'Job description 2',
        company: 'Company 2',
        location: 'Location 2',
        publishedDate: 'Published Date 2',
      },
      {
        id: 2,
        title: 'Job Title 2',
        description: 'Job description 2',
        company: 'Company 2',
        location: 'Location 2',
        publishedDate: 'Published Date 2',
      },
      {
        id: 2,
        title: 'Job Title 2',
        description: 'Job description 2',
        company: 'Company 2',
        location: 'Location 2',
        publishedDate: 'Published Date 2',
      },
  ];

  return (
    <div className="job-news container">
      <h2 className="job-news-title">Job News</h2>
      <div className="row">
        {jobNewsData.map((news) => (
          <div key={news.id} className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{news.title}</h3>
                <p className="card-description">{news.description}</p>
                <p className="card-info">
                  Company: {news.company} | Location: {news.location} | Published: {news.publishedDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobNews;
