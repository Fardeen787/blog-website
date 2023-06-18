import React from 'react'

const Travel = () => {
  return (
    <>
    <section className="welcome-message">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-center mb-4">Travel!</h1>
            {/* <p className="text-center">Introduce your blog and provide a brief overview here.</p> */}
            <p className='text-center'>Welcome to the Travel segment of our website!</p>
      <p className='text-center'>In this section, we take you on a journey to explore the wonders of the world. From breathtaking landscapes and cultural experiences to travel tips and destination recommendations, we cover all things related to travel.</p>
          </div>

        </div>
      </div>
    </section>

    <div className="card-container">
    <div className="card">
      <img src="https://media.istockphoto.com/id/1370813651/photo/surfboard-and-palm-tree-on-beach-in-summer.jpg?s=612x612&w=0&k=20&c=G9sK86pR0gpVcqLeXQEgqcq1sCyrDxC0yzLMmWJ7cLw=" className="card-img-top" alt="Card 1" />
      <div className="card-body">
        <h5 className="card-title">Beach Destination</h5>
        <p className="card-text">Discover stunning beach destinations around the world.</p>
        <a href="https://www.makemytrip.com/tripideas/beach-destinations" className="btn btn-primary">Read More</a>
      </div>
    </div>

    <div className="card">
      <img src="https://media.istockphoto.com/id/525670203/photo/snow-biking-couple.jpg?s=612x612&w=0&k=20&c=FL0L6QzG6_guOPVTts-GtwQo8gFk54Bb0NhwObUavVg=" className="card-img-top" alt="Card 2" />
      <div className="card-body">
        <h5 className="card-title">Adventure Travel</h5>
        <p className="card-text">Embark on thrilling adventures and adrenaline-pumping activities.</p>
        <a href="https://www.adventuretravel.biz/" className="btn btn-primary">Read More</a>
      </div>
    </div>

    <div className="card">
      <img src="https://media.istockphoto.com/id/1046622928/photo/writing-note-showing-your-culture-is-your-brand-business-photo-showcasing-knowledge.jpg?s=612x612&w=0&k=20&c=gIwW1rOOonptJ0WFWrE4mf5ygtHR6Tuhl8isGYTwLWA=" className="card-img-top" alt="Card 3" />
      <div className="card-body">
        <h5 className="card-title">Cultural Experiences</h5>
        <p className="card-text">Immerse yourself in the rich cultures and traditions of different countries.</p>
        <a href="https://www.theculturalexperience.com/" className="btn btn-primary">Read More</a>
      </div>
    </div>

    <div className="card">
      <img src="https://media.istockphoto.com/id/855413388/photo/theres-so-much-to-see.jpg?s=612x612&w=0&k=20&c=0pYgKJ46BH8ziQ31CMEQFSNNcvJ5P1RIwiKMHNWDr1A=" className="card-img-top" alt="Card 4" />
      <div className="card-body">
        <h5 className="card-title">City Exploration</h5>
        <p className="card-text">Explore vibrant cities and their iconic landmarks and attractions.</p>
        <a href="https://www.tallcityexploration.com/" className="btn btn-primary">Read More</a>
      </div>
    </div>

    <div className="card">
      <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" className="card-img-top" alt="Card 5" />
      <div className="card-body">
        <h5 className="card-title">Nature Retreats</h5>
        <p className="card-text">Escape to peaceful natural landscapes and enjoy the beauty of nature.</p>
        <a href="https://www.leading-retreats.com/en/nature-retreat-1157.htm" className="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
    </>
  )
}

export default Travel