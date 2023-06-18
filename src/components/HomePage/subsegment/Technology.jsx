import React from 'react'

const Technology = () => {
  return (

    <>
    <section className="welcome-message">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h1 className="text-center mb-4">Technology</h1>
            {/* <p className="text-center">Explore the latest mobile app developments and trends.</p> */}
            <p className="text-center">Welcome to the Technology segment of our website!</p>
            <p className="text-center">In this section, we delve into the exciting world of technology and explore the latest trends, innovations, and advancements shaping our digital landscape.</p>
          </div>
        </div>
      </div>
    </section>

    <div className="card-container">
    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg" className="card-img-top" alt="Card 1" />
      <div className="card-body">
        <h5 className="card-title">Web development</h5>
        <p className="card-text">Learn about web development technologies, frameworks, and best practices.</p>
        <a href="https://www.w3schools.com/whatis/" className="btn btn-primary">Read More</a>
      </div>
    </div>

    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_640.jpg" className="card-img-top" alt="Card 2" />
      <div className="card-body">
        <h5 className="card-title">Artificial Intelligence</h5>
        <p className="card-text">Discover the fascinating world of AI and its applications.</p>
        <a href="https://builtin.com/artificial-intelligence" className="btn btn-primary">Read More</a>
      </div>
    </div>

    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2018/05/14/16/25/cyber-security-3400657_640.jpg" className="card-img-top" alt="Card 3" />
      <div className="card-body">
        <h5 className="card-title">Cybersecurity</h5>
        <p className="card-text">Stay updated on the latest cybersecurity news and strategies.</p>
        <a href="https://www.kaspersky.com/resource-center/definitions/what-is-cyber-security#:~:text=Cyber%20security%20is%20the%20practice,security%20or%20electronic%20information%20security." className="btn btn-primary">Read More</a>
      </div>
    </div>

    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2018/04/21/02/11/iot-3337536_640.png" className="card-img-top" alt="Card 4" />
      <div className="card-body">
        <h5 className="card-title">Cloud</h5>
        <p className="card-text">Get insights into new gadgets and devices in the tech industry.</p>
        <a href="https://www.cloudflare.com/learning/cloud/what-is-the-cloud/" className="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
    </>
    
  )
}

export default Technology