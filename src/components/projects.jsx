function Projects() {
  return (
    <section id="projects">

      <h2 style={{
        marginTop: "120px",
        marginBottom: "40px",
        fontSize: "28px",
        color: "#ccd6f6"
      }}>
        Projects
      </h2>

      <a
        href="https://mern-product-app-psi.vercel.app/login"
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        <img src="/civiceye.png" className="project-image" />

        <div className="project-content">
          <h3>CivicEye ↗</h3>

          <p>
            AI-powered system for reporting rash driving using image upload and location tracking.
          </p>

          <div className="project-tags">
            <span>Flutter</span>
            <span>Firebase</span>
            <span>Google Maps API</span>
          </div>
        </div>
      </a>

      
      <a
        href="https://mern-product-app-psi.vercel.app/login"
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        <img src="mern.png" className="project-image"/>

        <div className="project-content">
          <h3>Full-Stack Product Management App (MERN) ↗</h3>

          <p>
            Built a full-stack CRUD application using MongoDB, Express, React, and Node.js.
            Implemented REST APIs and connected frontend and backend using Axios.
          </p>

          <div className="project-tags">
            <span>MongoDB</span>
            <span>Express</span>
            <span>React</span>
            <span>Node.js</span>
          </div>
        </div>
      </a>

      
      <a
        href= ""
        target="_blank"
        rel="noopener noreferrer"
        className="project-card"
      >
        <img src="/gesture.png" className="project-image" />

        <div className="project-content">
          <h3>Gesture Control System ↗</h3>

          <p>
            Developed a hand gesture-based control system using OpenCV and MediaPipe
            to control YouTube playback.
          </p>

          <div className="project-tags">
            <span>Python</span>
            <span>OpenCV</span>
            <span>MediaPipe</span>
          </div>
        </div>
      </a>

    </section>
  )
}

export default Projects