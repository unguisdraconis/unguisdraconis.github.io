import { Capabilities } from './components/Capabilities.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { Hero } from './components/Hero.jsx'
import { SelectedWork } from './components/SelectedWork.jsx'
import { Service } from './components/Service.jsx'
import { SiteHeader } from './components/SiteHeader.jsx'
import { SkipLink } from './components/SkipLink.jsx'
import { capabilityGroups } from './content/capabilities.js'
import { education, professionalDevelopment } from './content/education.js'
import { experience } from './content/experience.js'
import { profile } from './content/profile.js'
import { projects } from './content/projects.js'
import { presentations, service } from './content/service.js'

function App() {
  return (
    <>
      <SkipLink />
      <div id="top" className="site-shell">
        <SiteHeader name={profile.name} />
        <main id="main-content">
          <Hero profile={profile} />
          <SelectedWork projects={projects} />
          <Capabilities groups={capabilityGroups} />
          <Education education={education} development={professionalDevelopment} />
          <Experience experience={experience} />
          <Service presentations={presentations} service={service} />
        </main>
        <footer className="site-footer">
          <p>Jeremiah King</p>
          <p>Research data management · Digital curation · Data visualization</p>
        </footer>
      </div>
    </>
  )
}

export default App
