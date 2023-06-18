import React from 'react';
// import './FeaturePosts.css';
import { Link } from 'react-router-dom';

const FeaturePosts = () => {
  return (
    <section className="upcoming-events">
    <div className="container">
      <h2 className="text-center mb-4"></h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="Event" />
            <div className="card-body">
              <h5 className="card-title">Life Style</h5>
              <p className="card-text">AWS hosts events, both online and in-person, bringing the cloud computing community together to connect, collaborate, and learn from AWS experts.</p>
              <Link to="/subsegment/Lifestyle" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_640.jpg" className="card-img-top" alt="Event" />
            <div className="card-body">
              <h5 className="card-title">Technology</h5>
              <p className="card-text">AWS re:Invent offers cloud enthusiasts, experts, and practitioners an experience like no other. You get five days of opportunities to find productive solutions that will transform your company, </p>
              <Link to="/subsegment/Technology" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg" className="card-img-top" alt="Event" />
            <div className="card-body">
              <h5 className="card-title">Travel</h5>
              <p className="card-text">A new security flaw has been disclosed in the Google Cloud Platform's (GCP) Cloud SQL service that could be potentially exploited to obtain access to confidential data.</p>
              <Link to="/subsegment/Travel" className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FeaturePosts;