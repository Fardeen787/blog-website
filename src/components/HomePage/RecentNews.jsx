import React from 'react';
// import './UpcomingEvents.css';

const RecentEvents = () => {
  return (
    <section className="upcoming-events">
      <div className="container">
        <h2 className="text-center mb-4">Recent News</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.crn.com/resources/0281-17e8a96e83eb-d93a4c3e590a-1000/microsoft-azure-sign-2.jpeg" className="card-img-top" alt="Event" />
              <div className="card-body">
                <h5 className="card-title">Azure AI Content Safety</h5>
                <p className="card-text">AWS hosts events, both online and in-person, bringing the cloud computing community together to connect, collaborate, and learn from AWS experts.</p>
                <a href="https://www.crn.com/news/cloud/microsoft-build-2023-the-biggest-azure-news" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.reuters.com/resizer/bhRTye_b6aj6FY2rFy7ZzJBoWMA=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LAD5NMZL7NOLXAROIUJFCXN5A4.jpg" className="card-img-top" alt="Event" />
              <div className="card-body">
                <h5 className="card-title">AmazAWS re:Ion new Ai Chip</h5>
                <p className="card-text">The logo of Amazon Web Services (AWS) is seen during the 4th annual America Digital Latin American Congress of Business and Technology.


</p>
                <a href="https://www.reuters.com/technology/amazons-cloud-unit-is-considering-amds-new-ai-chips-2023-06-14/" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://d1.awsstatic.com/aws-reinforce-2023-event-directory.fa9947907cc2b0455ea632b6400d096b45023629.png" className="card-img-top" alt="Event" />
              <div className="card-body">
                <h5 className="card-title">Aws Inforce</h5>
                <p className="card-text">AWS re:Inforce is a 2-day, in-person security conference. Join us in Anaheim, CA to learn how AWS is innovating in the world of cloud security.</p>
                <a href="https://reinforce.awsevents.com/" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;