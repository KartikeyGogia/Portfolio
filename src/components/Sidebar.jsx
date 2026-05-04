import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

function Sidebar(){
    return(
        <div style={{
            position:"fixed",
            display:"flex",
            left:"0",
            top:"0",
            height:"100vh",
            width:"40%",
            padding:"100px",
            flexDirection:"column",
            justifyContent:"center"
        }}>
            <h1 style={{fontSize:"40px"}}>
                Kartikey Gogia
            </h1>
            <h2 style={{fontSize:"20px", color:"#8892b0"}}>Full Stack Developer</h2>

            <p style={{maxWidth:"300px", marginTop:"20px"}}>
                I build intelligent and interactive web systems by integrating AI and 
                real-time technologies.

            </p>

            
                <nav style={{
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
  gap: "25px"
}}>

  <a href="#about" className="nav-link">
    <span className="nav-line"></span>
    <span className="nav-text">ABOUT</span>
  </a>

  <a href="#projects" className="nav-link">
    <span className="nav-line"></span>
    <span className="nav-text">PROJECTS</span>
  </a>

  <a href="#experience" className="nav-link">
    <span className="nav-line"></span>
    <span className="nav-text">EXPERIENCE</span>
  </a>
     
            </nav>
            <div style={{
                display: "flex",
                gap: "20px",
                marginTop: "60px"
            }}>

  <a href="https://github.com/KartikeyGogia" target="_blank">
    <FaGithub />
  </a>

  <a href="https://www.linkedin.com/in/kartikey-gogia-4070b2271/" target="_blank">
    <FaLinkedin />
  </a>

  <a href="mailto:Kartikeygogiait@gmail.com">
    <SiGmail />
  </a>

</div>

        </div>
    )
}
 export default Sidebar

 