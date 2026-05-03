import Projects from "./components/projects"
import Cursorglow from "./components/Cursorglow"
import Sidebar from "./components/Sidebar"
import About from "./components/About"
import Experience from "./components/Experience"

function App() {
  
  return (
    <div>
      
      <Sidebar />
      <Cursorglow />
      <main style={{marginLeft:"40%" , padding:"100px"}}>
    
    <About />
    <Projects />
    <Experience />
    </main>
    </div>

  )
}
 export default App